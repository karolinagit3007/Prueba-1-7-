import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen({ navigation}: any) {
  return (
    <ImageBackground 
      source={{uri:"data:image/jpeg;base64,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"}}
      style={styles.container}
    >
      <Text style={styles.text}>KAROLINA GAVILEMA</Text>

      <Button title="INGRESAR" onPress={() => navigation.replace('HomeTabs')} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
   
  },
  text: {
    color: 'black',
    fontSize: 30,
    margin:10,
    
  },
  btn: {
    backgroundColor: 'black',
    color:'white',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});


