import {View, Text, StyleSheet, Alert} from 'react-native';
import { Button } from './src/components/button';
import { Input } from './src/components/input';
import {useState } from 'react';
import { router } from 'expo-router';

export default function Index(){
    
    const [name , setName] = useState<string>("");



    function handleNext() {
        router.navigate("./dashboard");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá, {name} </Text>
            <Input onChangeText={(text) => setName(text)} placeholder="Digite seu nome"
            />
            <Button title="Entrar" onPress={handleNext} />
        </View>
    );


}
    const styles = StyleSheet.create({
        title: {
            color: "red", 
            fontSize: 24,
            fontWeight: "bold"
        },
        container: {
            flex: 1,
            gap: 16,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 32,
        },
    });