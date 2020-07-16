import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground } from 'react-native';
import * as Speech from 'expo-speech';


export default function App() {
  const [text, setText] = useState('Bem vindo, Samuel Marques')


  function speak() {
    Speech.speak(text, {
      language: 'pt-BR'
    });
  }

  return (



    <ImageBackground source={require('./src/image/back.jpg')}
      style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={e => setText(e)}
        placeholder="DIGITE ALGO..."
      />
      <Button 
        style={styles.btn}
        title="clica aqui"
        onPress={speak}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  input: {
    marginTop: 80,
    backgroundColor: '#FFF',
    textAlign: 'center',
    width: '90%',
    height: 50,
    borderEndWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    margin: 20,
    color: '#000',
    fontSize: 20,
  },
  btn:{
    backgroundColor: '#121212',
    borderColor: '#000',
    borderRadius: 10,
    
  }
})

