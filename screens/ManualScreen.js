import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import receipt from '../assets/receipt.png';
import Button from '../components/HomeButton'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Animated, { FadeInDown, FadeInUp, FadeOutUp, SlideInDown, SlideInUp, useSharedValue } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ManualScreen() {
  return (
    <Modal
      animationType='slide'
      transparent= {true}
      visible = {modalVisible}
      >
      <Animated.View style = {styles.modalBackground} entering={FadeInDown.springify().damping(25)} exiting={FadeOutUp.springify().damping(25)}>
        <View style = {styles.modalContainer}>

        <View style = {styles.modalTitleContainer}>
          <View></View>
          <Text style = {styles.modalTitle}>Add Receipt</Text>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Ionicons name = "close" size = {20}></Ionicons>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>{navigation.navigate('Camera')}}>
          <View style={styles.modalSubContainer}>
            <Text style={[styles.modalHeading, { color: '#333' }]}>Insert using camera</Text>
            <Text style={[styles.modalText, { color: '#666' }]}>
              Take a picture of the receipt and it will automatically fill in the name, price, the place you shopped, etc.
            </Text>
            <View style = {styles.cameraBackground}>
            <Ionicons name = "camera" size = {30} style = {styles.camera}></Ionicons>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> {navigation.navigate('Manual'),setModalVisible(false)}}>
          <View style={[styles.modalSubContainer]}>
            <Text style={[styles.modalHeading, { color: '#333' }]}>Enter Manually</Text>
            <Text style={[styles.modalText, { color: '#666' }]}>
              Fill in the receipt details yourself and add it to your expenses.
            </Text>
            <Ionicons style = {styles.arrowFoward} name = "arrow-forward-circle" size = {60}></Ionicons>
          </View>
          </TouchableOpacity>
          </View>
      </Animated.View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer:{
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalTitleContainer:{
    flexDirection: 'row',
    paddingVertical: 10, // Add padding to create vertical space
    justifyContent:'space-between'
  },
  cameraBackground:{
    backgroundColor:'#A35D6A',
    marginTop:5,
    padding: 8,
    alignSelf:'center',
    borderRadius: 30,
  },
  camera:{
    color:'#F0F0F0'
  },
  arrowFoward:{
    color:'#A35D6A',
    alignSelf:'center',
    marginTop:5,
  },
  modalBackground:{
    backgroundColor: '#A35D6A75',
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalSubContainer: {   
    padding: 18,
    borderRadius: 6,
    backgroundColor: '#F7F7F7',
    marginBottom:10,
  },
  modalHeading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalText: {
    fontSize: 14,
  }
})