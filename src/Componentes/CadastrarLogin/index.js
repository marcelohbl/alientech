import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { TextInput, HelperText, Snackbar } from 'react-native-paper';
import { cadastrar } from "../../servicos/requisicoesFirebase";
import { estilos } from "./estilos";

export function Cadastrar({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [statusError, setStatusError] = useState('');
  const [mensagemError, setMensagemError] = useState('');
  const [statusSnakbar, setStatusSnakbar] = useState(false);
  const [mensagemSnakbar, setMensagemSnakbar] = useState('');

  function limpaCampos() {
    setNome('');
    setEmail('');
    setSenha('');
    setConfirmaSenha('');
    navigation.navigate('Login');
  }

  async function realizarCadastro() {
    if (nome === '') {
      setMensagemError('Nome não pode ficar vazio!');
      setStatusError('nome');
    } else if (email === '') {
      setMensagemError('E-mail não pode ficar vazio!');
      setStatusError('email');
    } else if (senha === '') {
      setMensagemError('Senha não pode ser em branco');
      setStatusError('senha');
    } else if (confirmaSenha === '') {
      setMensagemError('Confirmação de senha não pode ser vazio');
      setStatusError('confirmaSenha');
    } else if (senha !== confirmaSenha) {
      setMensagemError('Senhas não conferem');
      setStatusError('senhaNaoConfere');
    } else {
      const resultado = await cadastrar(email, senha);
      setStatusSnakbar(true);
      if (resultado === 'sucesso') {
        setMensagemSnakbar("E-mail cadastrado com sucesso!");
        setTimeout(limpaCampos, 3000);
      } else {
        setMensagemSnakbar(resultado);
      }
      setMensagemError('');
      setStatusError('');
    }
  }

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Image style={estilos.imagem} source={require('../../../assets/login.png')} />
      <Text style={estilos.titulo}>CADASTRO</Text>

      <TextInput
        label="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        mode="outlined"
        error={statusError === 'nome'}
        style={estilos.input}
      />
      {statusError === 'nome' ? <HelperText type="error" visible={statusError === 'nome'}>
        {mensagemError}
      </HelperText> : null}

      <TextInput
        label="Digite seu e-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        error={statusError === 'email'}
        style={estilos.input}
      />
      {statusError === 'email' ? <HelperText type="error" visible={statusError === 'email'}>
        {mensagemError}
      </HelperText> : null}

      <TextInput
        label="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        mode="outlined"
        error={statusError === 'senha'}
        secureTextEntry
        style={estilos.input}
      />
      {statusError === 'senha' ? <HelperText type="error" visible={statusError === 'senha'}>
        {mensagemError}
      </HelperText> : null}

      <TextInput
        label="Confirme sua senha"
        value={confirmaSenha}
        onChangeText={setConfirmaSenha}
        mode="outlined"
        error={statusError === 'confirmaSenha'}
        secureTextEntry
        style={estilos.input}
      />
      {statusError === 'confirmaSenha' ? <HelperText type="error" visible={statusError === 'confirmaSenha'}>
        {mensagemError}
      </HelperText> : null}

      <HelperText type="error" visible={statusError === 'senhaNaoConfere'}>
        {mensagemError}
      </HelperText>

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => realizarCadastro()}
      >
        <Text style={estilos.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>

      <Snackbar
        visible={statusSnakbar}
        onDismiss={() => setStatusSnakbar(false)}
        duration={2000}
        action={{
          label: 'OK',
          onPress: () => {
            setStatusSnakbar(false);
          },
        }}
      >
        {mensagemSnakbar}
      </Snackbar>
    </ScrollView>
  );
}
