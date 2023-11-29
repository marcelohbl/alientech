import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
    container: {
        backgroundColor: "#0F5E69",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    imagem: {
        width: 600,
        height: 450
    },

    input: {
        height: 45,
        width: "75%",
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: "#B8D4E3",
        borderRadius: 5,
    },

    botao: { //Botao entrar
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2356D3',
        paddingVertical: 1,
        paddingHorizontal: 20,
        width: "66%",
        height: 40,
        marginVertical: 15,
        borderRadius: 8,
    },

    textoButton: { //Butao Entrar
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },

    botaoTransparente: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent', // Fundo transparente
        paddingVertical: 1,
        paddingHorizontal: 20,
        width: "50%",
        height: 40,
        marginVertical: 15,
        borderRadius: 8,
        borderWidth: 4, // Adicionando borda
        borderColor: '#2356D3', // Cor da borda
    },

    textoTransparente: {
        color: 'white', // Cor do texto
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },

    texto: {
        fontSize: 16,
        marginTop: 10,
    },

    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFDF2C',
        alignSelf: 'flex-start',
        marginLeft: '13%', // Alinhamento com o início das barras de input
        marginBottom: 5,
        marginTop: 10, // Ajuste na margem superior dos títulos
    },

});
