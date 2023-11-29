
import { createUserWithEmailAndPassword, AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase"; 
import { auth } from "../config/firebase";

function errosFirebase(error) {
    let mensagem = ''
    switch (error.code) {
        case AuthErrorCodes.EMAIL_EXISTS:
            mensagem = 'Esse email já está em uso'
            break;
        case AuthErrorCodes.INVALID_EMAIL:
            mensagem = 'E-mail inválido'
            break;
        case AuthErrorCodes.WEAK_PASSWORD:
            mensagem = 'A senha precisa do no mínimo 6 caracteres'
            break;
        default:
            mensagem = 'Erro desconhecido'
    }
    return mensagem
}

export async function cadastrar(email, senha) {
    const resultado = await createUserWithEmailAndPassword(auth, email, senha)
        .then(() => {
            return "sucesso"
        })
        .catch((error) => {
            return errosFirebase(error)
        })
    return resultado
}

export async function logar(email, senha) {
    const resultado = await signInWithEmailAndPassword(auth, email, senha)
        .then((dadosDoUsuario) => {
            console.log(dadosDoUsuario)
            return "sucesso"
        })
        .catch((error) => {
            console.log(error)
            return "Erro ao logar"
        })
    return resultado
}
export async function obterProfessoresTempoReal(setProfessores) {
    const ref = query(collection(db, 'Professores'))
    onSnapshot(ref, (querySnapshot) => {
        const Professores = []
        querySnapshot.forEach((doc) => {
            Professores.push({ id: doc.id, ...doc.data() })
        })
        setProfessores(Professores)
    })
}
export async function buscarProfessores() {
    try {
        const querySnapshot = await getDocs(collection(db, 'Professores'))
        let Professores = []
        querySnapshot.forEach((doc) => {
            let Professores = { id: doc.id, ...doc.data() }
            Professores.push(Professores)
        });
        return Professores
    } catch (error) {
        console.log(error)
        return []
    }
}
export async function atualizarProfessores(ProfessoresID, data) {
    try {
        const ProfessoresRef = doc(db, 'Professores', ProfessoresID)
        await updateDoc(ProfessoresRef, data)
        return 'ok'
    } catch (error) {
        console.log(error)
        return 'error'
    }

}
export async function cadastrarProfessores(data) {
    try {
        await addDoc(collection(db, 'Professores'), data)
        return 'sucesso'
    } catch (error) {
        return 'erro'
    }
}
export async function deletarProfessores(ProfessoresID) {
    try {
        const ProfessoresRef = doc(db, 'Professores', ProfessoresID)
        await deleteDoc(ProfessoresRef)
        return 'ok'
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}