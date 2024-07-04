import React, { useState, useEffect } from 'react';
import { Alert, Button, FlatList, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { db } from '../config/Configuracion';
import { ref, set, onValue, remove, update } from 'firebase/database';
import Tarjeta from '../components/Tarjet';

export default function RegistroScreen() {
  const [id, setId] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [equipos, setEquipos] = useState([]);

  // Guardar equipo
  function guardarEquipo(id: string, amount: string, category: string, description: string) {
    const equipoRef = ref(db, 'equipos/' + id); 
    
    const equipoData = {
      amount: amount,
      category: category,
      description: description,
    };

    set(equipoRef, equipoData)
      .then(() => {
        Alert.alert('Registro Exitoso', 'El equipo ha sido registrado correctamente.');
        limpiarCampos();
      })
      .catch((error) => {
        console.error('Error al guardar equipo:', error);
        Alert.alert('Error', 'Hubo un problema al intentar registrar el equipo.');
      });
  }

  // Limpiar campos del formulario
  function limpiarCampos() {
    setId('');
    setAmount('');
    setCategory('');
    setDescription('');
  }

  // Leer equipos al cargar la pantalla
  useEffect(() => {
    const equiposRef = ref(db, 'equipos/');
    
    onValue(equiposRef, (snapshot) => {
      const data = snapshot.val();
      const equiposArray:any = data ? Object.keys(data).map((key) => ({ key, ...data[key] })) : [];
      setEquipos(equiposArray);
    });
  }, []);

 

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registra tu Equipo Deportivo</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='ID'
          onChangeText={(texto) => setId(texto)}
          value={id}
          keyboardType='numeric'
        />
        <TextInput
          style={styles.input}
          placeholder='Monto'
          onChangeText={(texto) => setAmount(texto)}
          value={amount}
          keyboardType='numeric'
        />
        <TextInput
          style={styles.input}
          placeholder='Categoría'
          onChangeText={(texto) => setCategory(texto)}
          value={category}
        />
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder='Descripción'
          onChangeText={(texto) => setDescription(texto)}
          value={description}
          multiline
        />
        <View style={styles.buttonContainer}>
          <Button title='Guardar' onPress={() => guardarEquipo(id, amount, category, description)} />
        </View>
      </View>
      <FlatList
        style={{ marginTop: 20 }}
        data={equipos}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Tarjeta equipo={item} />
            <View style={styles.buttonGroup}>
              
             
            </View>
          </View>
        )}
       
      />
      <StatusBar  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
  },
  input: {
    backgroundColor: '#F5F5F5',
    height: 40,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
});
