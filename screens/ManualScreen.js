import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

export default function ManualScreen() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const navigation = useNavigation();

  const handleSubmit = () => {

  };

  return (
    <View style={styles.container}>
      <View style = {styles.header}>
      <TouchableOpacity onPress = {()=>{navigation.navigate('HomeTab')}}>
        <Ionicons name = {"close-sharp"} size = {20} ></Ionicons>
      </TouchableOpacity>
        <Text style = {styles.title}>Enter Manually</Text>
        <Ionicons name = {"close-sharp"} color = {"#fff"}size = {20} ></Ionicons>
      </View>

      <View style = {styles.inputWrapper}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={input1}
          onChangeText={(text) => setInput1(text)}
          placeholder="Enter text for Input Field 1"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          value={input2}
          onChangeText={(text) => setInput2(text)}
          placeholder="Enter text for Input Field 2"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Expense</Text>
        <TextInput
          style={styles.input}
          value={input3}
          onChangeText={(text) => setInput3(text)}
          placeholder="Enter text for Input Field 3"
        />
      </View>
      </View>


      <TouchableOpacity style={styles.button}>
        <Text style = {styles.buttonText}>Submit</Text>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop:'20%',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  header:{
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal:10,
    paddingVertical:20,
  },
  inputContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight:'bold'
  },
  input: {
    borderRadius: 8,
    backgroundColor:'#F0F0F0',
    padding: 20,
    marginTop: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  inputWrapper: {
    padding:20
  },
  button: {
    backgroundColor: '#A35D6A',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginHorizontal:20,
  },
  buttonText:{
    color: "#fff",
    fontSize:16,
    fontWeight:'bold'
  }
});
