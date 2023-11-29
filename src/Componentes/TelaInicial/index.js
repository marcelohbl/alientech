import React from "react";
import { View, Image, TextInput, Text, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { estilos } from "./estilos";
import Icon from "react-native-vector-icons/FontAwesome";

const produtosMaisVendidos = [
  { id: '1', nome: 'Gabinete Gamer', imagem: require('../../../assets/P-Gabinete01.png') },
  { id: '2', nome: 'Memória RAM Fury ', imagem: require('../../../assets/P-MemoriaRam.png') },
  { id: '3', nome: 'Processador AMD', imagem: require('../../../assets/P-Processador.png') },
  { id: '4', nome: 'Kit Gamer', imagem: require('../../../assets/KitGamer.png') }
];

export function TelaInicial() {
  const navigation = useNavigation();

  const navegarParaOutraPagina = (pagina) => {
    navigation.navigate(pagina);
  };

  const renderizarItem = ({ item }) => (
    <TouchableOpacity onPress={() => navegarParaOutraPagina(item.id)}>
      <View style={estilos.itemMaisVendido}>
        <Image
          style={estilos.imagemMaisVendido}
          source={item.imagem}
        />
        <Text style={estilos.textoMaisVendido}>{item.nome}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={estilos.container}>
      <View style={estilos.container2}>
        <Image
          style={estilos.imagem}
          source={require('../../../assets/login.png')}
        />
        <TextInput
          style={estilos.barraPesquisa}
          placeholder="Busca no AlienTech"
        />
        <View style={estilos.iconContainer}>
          <TouchableOpacity onPress={() => navegarParaOutraPagina('Pagina1')}>
            <Image
              style={estilos.icone}
              source={require('../../../assets/memoriaRam.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navegarParaOutraPagina('Pagina2')}>
            <Image
              style={estilos.icone}
              source={require('../../../assets/ssd.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navegarParaOutraPagina('Pagina3')}>
            <Image
              style={estilos.icone}
              source={require('../../../assets/PlacaMae.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navegarParaOutraPagina('Pagina4')}>
            <Image
              style={estilos.icone}
              source={require('../../../assets/Processador.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navegarParaOutraPagina('Pagina5')}>
            <Image
              style={estilos.icone}
              source={require('../../../assets/Gabinete.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={estilos.containerTexto}>
          <Text style={estilos.texto}> Os Mais Vendidos</Text>
        </View>
        <View>
          <FlatList
            data={produtosMaisVendidos}
            renderItem={renderizarItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={estilos.containerTexto}>
          <Text style={estilos.texto}>Produtos</Text>
        </View>
        <View>
          <FlatList
            data={produtosMaisVendidos}
            renderItem={renderizarItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View tyle={{ marginBottom: 20 }} >
        </View>

        <View style={estilos.retanguloInferior}>
          <TouchableOpacity onPress={() => navegarParaOutraPagina('Login')}>
            <Icon style={estilos.iconeHome} name="arrow-left" size={30} color="#e0e0e0" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navegarParaOutraPagina('Carrinho', { Produtos: produtosMaisVendidos })}>
            <Icon style={estilos.iconeCarrinho} name="shopping-cart" size={30} color="#e0e0e0" />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}
