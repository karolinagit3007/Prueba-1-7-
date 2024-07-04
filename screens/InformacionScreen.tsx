import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { ref, child, get } from 'firebase/database';
import { db } from '../config/Configuracion';
    
export default function InformacionScreen() {
  const [idBuscar, setIdBuscar] = useState('');
  const [registroInfo, setRegistroInfo] = useState<any>(null);
  
  const handleLeerID = async () => {
    try {
      const registroRef = child(ref(db, 'equipos/'), idBuscar); // Actualiza 'equipos' por el nombre de tu colección
      const snapshot = await get(registroRef);
      if (snapshot.exists()) {
        const registro = snapshot.val();
        setRegistroInfo(registro);
      } else {
        Alert.alert('Registro no encontrado', `No se encontró ningún registro con el ID ${idBuscar}`);
        setRegistroInfo(null);
      }
      setIdBuscar('');
    } catch (error) {
      console.error('Error al obtener registro:', error);
      Alert.alert('Error', 'Hubo un problema al intentar obtener la información del registro.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de Registros</Text>
      <View style={styles.section}>
        <Text style={styles.label}>Ingrese ID:</Text>
        <TextInput
          style={styles.input}
          placeholder='ID'
          onChangeText={(texto) => setIdBuscar(texto)}
          value={idBuscar}
          keyboardType='numeric'
        />
        <Button title='Leer ID' onPress={handleLeerID} />
      </View>

      {registroInfo && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Información del Registro:</Text>
          <Text>ID: {idBuscar}</Text>
          <Text>Monto: {registroInfo.amount}</Text>
          <Text>Categoría: {registroInfo.category}</Text>
          <Text>Descripción: {registroInfo.description}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F0F0',
      padding: 20,
      justifyContent: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#333333',
    },
    section: {
      marginBottom: 20,
    },
    label: {
      fontSize: 20,
      marginBottom: 10,
      color: '#333333',
    },
    input: {
      backgroundColor: '#FFFFFF',
      height: 50,
      borderRadius: 10,
      marginBottom: 15,
      paddingHorizontal: 20,
      fontSize: 18,
      color: '#333333',
    },
    buttonContainer: {
      marginTop: 10,
      width: '100%',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#445D48',
      borderRadius: 15,
      paddingVertical: 12,
      paddingHorizontal: 50,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    infoContainer: {
      marginTop: 20,
      padding: 15,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      shadowColor: '#000000',
      shadowOpacity: 0.2,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      elevation: 3,
    },
    infoText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333333',
    },
  });