import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Details() {
  return (
    <View style={styles.container}>
      <View style={[styles.sectionContainer]}>
        <Text style={[styles.sectionHeading, { color: '#333' }]}>Insert using camera</Text>
        <Text style={[styles.sectionText, { color: '#666' }]}>
          Take a picture of the receipt and it will automatically fill in the name, price, the place you shopped, etc.
        </Text>
        <View>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </View>
      <View style={[styles.sectionContainer]}>
        <Text style={[styles.sectionHeading, { color: '#333' }]}>Enter Manually</Text>
        <Text style={[styles.sectionText, { color: '#666' }]}>
          Fill in the receipt details yourself and add it to your expenses.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: 16,
  },
  sectionContainer: {
    marginBottom: 16,
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
