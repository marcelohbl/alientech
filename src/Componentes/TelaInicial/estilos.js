import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({

  container: {
    backgroundColor: "#0F5E69",
    flex: 1,
    alignItems: "center",
  },

  container2: {
    marginBottom: 450
  },

  imagem: {
    width: 400,
    height: 200,
    alignSelf: 'center', // Para centralizar horizontalmente
    justifyContent: 'center', // Para centralizar verticalmente
  },

  barraPesquisa: {
    width: "80%", // ou a largura desejada
    height: 30,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    marginTop: 12,
    paddingLeft: 16,
    fontSize: 15,
    alignSelf: 'center', // Para centralizar horizontalmente
  },

  containerTexto: {
    width: '100%',
    marginLeft: 15,
    alignItems: 'center', // Para centralizar o texto horizontalmente
  },


  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFDF2C',
    textAlign: 'center',
    marginTop: 19, // Distância do topo (ajuste conforme necessário)
  },

  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    width: "80%",
    alignItems: 'center', // Para centralizar
  },

  icone: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#3498db", // Cor de fundo dos ícones
    resizeMode: 'contain',
  },

  itemMaisVendido: {
    marginRight: 16, // Espaçamento à direita entre os itens (ajuste conforme necessário)
  },

  imagemMaisVendido: {
    width: 150, // Largura da imagem do produto
    height: 150, // Altura da imagem do produto
    resizeMode: 'contain',
    backgroundColor: "#e0e0e0",
  },

  textoMaisVendido: {
    marginTop: 8, // Espaçamento superior entre a imagem e o texto (ajuste conforme necessário)
    textAlign: 'center', // Centraliza o texto
    fontWeight: 'bold',
    color: '#fff', // Cor do texto
  },

  retanguloInferior: {
    flexDirection: 'row', // Alterado para uma direção de linha para que os ícones fiquem na mesma linha
    justifyContent: 'space-between', // Adicionado para distribuir os ícones uniformemente na linha
    bottom: 0,
    height: 50,
    backgroundColor: '#3498db',
    alignItems: 'center',
  },
  
  iconeCarrinho: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#3498db",
    marginLeft: 10, // Ajustado para afastar da borda esquerda
    marginTop: 9,
  },
  
  iconeHome: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#3498db",
    marginRight: 10, // Ajustado para afastar da borda direita
    marginTop: 9,
  },

});
