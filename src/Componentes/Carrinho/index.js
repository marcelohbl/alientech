import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, FlatList, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { estilos } from "./estilos";

export function Carrinho({route}) {
  const [total, setTotal] = useState(0)
  const navigation = useNavigation();
    
    const produtosMaisVendidos = [
        { id: '1', nome: 'Gabinete Gamer', imagem: require('../../../assets/P-Gabinete01.png'), preco: 200 },
        { id: '2', nome: 'Memória Ram Fury ', imagem: require('../../../assets/P-MemoriaRam.png'), preco: 450 },
        { id: '3', nome: 'Processador AMD Ryzen 5 4600G Box', imagem: require('../../../assets/P-Processador.png'), preco: 2500 },
        { id: '4', nome: 'Kit Gamer', imagem: require('../../../assets/KitGamer.png'), preco: 150}
    ];

  // Função para calcular o total da compra
   useEffect(() => {
    calcularTotal()
   })
   const calcularTotal = () => {
    let novoTotal = 0;
    produtosMaisVendidos.forEach((produto) => {
      novoTotal += produto.preco;
    });
    setTotal(novoTotal);
  };
  return (
    <View style={estilos.container}>
      <Text style={estilos.title}>Carrinho de Compras</Text>

      <FlatList
        data={produtosMaisVendidos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={estilos.itemContainer}>
            <Text style={estilos.texto1}> {item.nome}</Text>
            <Image style={estilos.imagem} source={item.imagem} />
            <Text style={estilos.texto1}>Preço: R${item.preco}</Text>
          </View>
        )}
      />
      <View style={estilos.totalContainer}>
        <Text style={estilos.texto1}> Total: R${total}</Text>
        <Button
          title="Finalizar Compra"
          onPress={() => {
            alert("Compra finalizada!");
          }}
        />
      </View>
    </View>
  )
};

