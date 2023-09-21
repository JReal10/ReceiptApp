import { View, Text, StyleSheet, TouchableOpacity,Modal } from 'react-native';
import React from 'react';
import { useState } from 'react';

export default function Details() {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Modal
      animationType='slide'
      transparent= {false}
      visible = {modalVisible}>
      <View style={[styles.sectionContainer]}>
      <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}>
              <Text>Hide Modal</Text>
            </TouchableOpacity>
        <Text style={[styles.sectionHeading, { color: '#333' }]}>Insert using camera</Text>
        <Text style={[styles.sectionText, { color: '#666' }]}>
          Take a picture of the receipt and it will automatically fill in the name, price, the place you shopped, etc.
        </Text>
      </View>
      <View style={[styles.sectionContainer]}>
        <Text style={[styles.sectionHeading, { color: '#333' }]}>Enter Manually</Text>
        <Text style={[styles.sectionText, { color: '#666' }]}>
          Fill in the receipt details yourself and add it to your expenses.
        </Text>
      </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    marginTop: 22,    
  },
  sectionContainer: {
    flex: 1,
    marginBottom: 16,
    marginTop: 22,    
    padding: 16,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#EEE', // Light gray border color
    backgroundColor: '#FFFFFF',
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionText: {
    fontSize: 16,
  },
});
