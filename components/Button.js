import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Button = ({ title, onPress, style,icon,color }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Ionicons name = {icon} color={color ? color:'#f1f1f1'} size = {28}></Ionicons>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height:40,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'center',
  },
  text:{
    fontWeight:'bold',
    fontSize:16,
    color:'#f1f1f1',
    marginLeft:10,
  }
});

export default Button;
