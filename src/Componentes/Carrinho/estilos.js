import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
    container: {
        backgroundColor: "#0F5E69",
        flex: 1,
        padding: 16
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#FFFF",
        marginBottom: 16
      },
      itemContainer: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 8,
        marginBottom: 8,
      },
      totalContainer: {
        marginTop: 16,
        alignItems: 'center',
      },
      totalText: {
        fontSize: 18,
        fontWeight: 'bold',
      },

    texto: {
      color: 'white', // ou a cor de texto desejada
      fontSize: 24,
      fontWeight: 'bold',
    },
    texto1: {
      color: 'white', // ou a cor de texto desejada
      fontSize: 13,
    },
    imagem: {
      width: 150, // Largura da imagem do produto
      height: 150, // Altura da imagem do produto
      resizeMode: 'contain',
      backgroundColor: "#e0e0e0",
    },
  });
  