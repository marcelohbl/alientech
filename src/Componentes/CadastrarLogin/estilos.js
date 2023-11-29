import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F5E69',
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFDF2C',
    marginBottom: 20,
    textAlign: 'center', // Adicionando alinhamento central
  },
  input: {
    height: 45,
    width: "90%",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: "#B8D4E3",
  },
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2356D3',
    paddingVertical: 1,
    width: "66%",
    height: 40,
    marginVertical: 15,
    borderRadius: 8,
},
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
},
    imagem: {
        width: 400,
        height: 250,
    },
});
