import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { TextInput, HelperText, Snackbar } from 'react-native-paper';
import { logar } from "../../servicos/requisicoesFirebase";
import { estilos } from "./estilos";
import { Cadastrar } from "../CadastrarLogin/index"

export function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [secureMode, setSecureMode] = useState(true);
    const [statusError, setStatusError] = useState('')
    const [mensagemError, setMensagemError] = useState('')
    const [statusSnakbar, setStatusSnakbar] = useState(false)
    const [mensagemSnakbar, setMensagemSnakbar] = useState(false)

    async function fazerLogin() {
        if (email == '') {
            setMensagemError('E-mail não pode ficar vazio!')
            setStatusError('email')
        } else if (senha == '') {
            setMensagemError('Senha não pode ser em branco')
            setStatusError('senha')
        } else {
            setMensagemError('')
            setStatusError('')
            const resultado = await logar(email, senha)
            if (resultado == 'sucesso') {
                navigation.navigate('TelaInicial') 
            } else {
                setStatusSnakbar(true)
                setMensagemSnakbar("E-mail ou senha inválida")
                console.log(resultado)
            }
        }
    }

    return (
        <ScrollView contentContainerStyle={estilos.container}>
            <Image style={estilos.imagem}
                source={require('../../../assets/login.png')}
            />
            <Text style={estilos.titulo}>LOGIN</Text>
            <TextInput
                label="Digite seu e-mail"
                value={email}
                onChangeText={setEmail}
                mode="outlined"
                keyboardType="email-address"
                error={statusError == 'email'}
                style={estilos.input}
            />
            {statusError == 'email' ? <HelperText type="error" visible={statusError == 'email'}>
                {mensagemError}
            </HelperText> : null}

            <Text style={estilos.titulo}>SENHA</Text>
            <TextInput
                label="Digite sua senha"
                value={senha}
                onChangeText={setSenha}
                mode="outlined"
                error={statusError == 'senha'}
                secureTextEntry={secureMode}
                right={
                    <TextInput.Icon
                        icon={secureMode ? 'eye-off' : 'eye'}
                        onPress={() => setSecureMode(!secureMode)}
                    />
                }
                style={estilos.input}
            />
            {statusError == 'senha' ? <HelperText type="error" visible={statusError == 'senha'}>
                {mensagemError}
            </HelperText> : null}

            <TouchableOpacity style={estilos.botao} onPress={() => fazerLogin()}>
                <Text style={estilos.textoButton}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.botaoTransparente} onPress={() => navigation.navigate('Cadastrar')}>
                <Text style={estilos.textoTransparente}>QUERO CRIAR UMA CONTA</Text>
            </TouchableOpacity>
            <Snackbar visible={statusSnakbar} onDismiss={() => setStatusSnakbar(false)} duration={2000}
                action={{
                    label: 'OK',
                    onPress: () => {
                        setStatusSnakbar(false)
                    },
                }}>
                {mensagemSnakbar} 
            </Snackbar>
        </ScrollView>
    )
}
