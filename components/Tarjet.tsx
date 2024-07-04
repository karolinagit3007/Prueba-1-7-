
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Tarjeta(props:any) {
    console.log(props.equipo.id);
  return (
    <View style={styles.container}>
      <Text>{props.equipo.id}</Text>
      <Text>{props.equipo.category}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FAFFAF',
        fontSize:30,


    },
})