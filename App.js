import React, {useState} from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function App(){

  const [nome, setNome] = useState('Gustavo');

  function handleButton(){
    alert('VAMOS CODAR!')
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Iniciando com React Native</Text>
      <Text style={[styles.title, styles.text]}>Hello World, {nome}!</Text>
      <TouchableOpacity style={styles.button} onPress={handleButton}>
        <Text style={styles.buttonText}>Clique!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',

  },
  title: {
    color: "#fff",
    fontSize: 30,
    margin: 10,
  },

  text:{
    fontSize: 15,
    color: 'red'
  },
  button:{
    height: 30,
    width: 150,
    backgroundColor:'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  }, 
  buttonText:{
    color: '#fff',
    fontWeight: 'bold'
  }
})