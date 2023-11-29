import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "./src/Componentes/Login"
import { Cadastrar } from "./src/Componentes/CadastrarLogin"
import { TelaInicial } from "./src/Componentes/TelaInicial"
import { Carrinho } from "./src/Componentes/Carrinho"


export function Rotas() {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='TelaInicial' component={TelaInicial} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Cadastrar' component={Cadastrar} />
                <Stack.Screen name='Carrinho' component={Carrinho} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}