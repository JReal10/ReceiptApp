import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Reports() {
  const { width, height } = Dimensions.get('window');
  const isSmallScreen = width < 375; // Example breakpoint for small screens

  return (
    <View style={[styles.container, { marginVertical: isSmallScreen ? 10 : 20 }]}>
      <TouchableOpacity style={styles.single_row}>
        <Text style={styles.text}>Currency</Text>
        <Ionicons name="chevron-forward" size={height * 0.02} />
      </TouchableOpacity>
      <View style={styles.row_container}>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.text}>Reports</Text>
          <Ionicons name="chevron-forward" size={height * 0.02} />
        </TouchableOpacity>
        <View style={styles.row_separator} />
        <TouchableOpacity style={styles.row}>
          <Text style={styles.text}>MileStones</Text>
          <Ionicons name="chevron-forward" size={height * 0.02} />
        </TouchableOpacity>
      </View>
      <View style={styles.row_container}>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.text}>Rate Us</Text>
          <Ionicons name="chevron-forward" size={height * 0.02} />
        </TouchableOpacity>
        <View style={styles.row_separator} />
        <TouchableOpacity style={styles.row}>
          <Text style={styles.text}>Send Feedback</Text>
          <Ionicons name="chevron-forward" size={height * 0.02} />
        </TouchableOpacity>
        <View style={styles.row_separator} />
        <TouchableOpacity style={styles.row}>
          <Text style={styles.text}>Privacy Policy</Text>
          <Ionicons name="chevron-forward" size={height * 0.02} />
        </TouchableOpacity>
        <View style={styles.row_separator} />
        <TouchableOpacity style={styles.row}>
          <Text style={styles.text}>Terms of Use</Text>
          <Ionicons name="chevron-forward" size={height * 0.02} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.single_row}>
        <Text style={[styles.text, styles.redText]}>Sign Out</Text>
        <Ionicons name="chevron-forward" size={height * 0.02} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.single_row}>
        <Text style={[styles.text, styles.redText, styles.centerText]}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  row_container: {
    backgroundColor: '#E6E6E6',
    flexDirection: 'column',
    borderRadius: 10,
    marginVertical: 10, // Margin to create space between rows
  },
  single_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
    marginVertical: 10, // Margin to create space between rows
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black', // Text color
  },
  redText: {
    color: 'red', // Red text color for Sign Out and Delete
  },
  centerText: {
    textAlign: 'center', // Center-align the text
  },
  row_separator: {
    height: 1, // Height of the horizontal line
    backgroundColor: '#CCCCCC', // Color of the horizontal line
  },
});
