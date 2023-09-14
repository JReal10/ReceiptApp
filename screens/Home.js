import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import receipt from '../assets/receipt.png';

const windowWidth = Dimensions.get('window').width;

export default function Home() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      image: receipt,
      title: 'First Item',
      date: 'today',
      price: '$140',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abs28ba',
      image: receipt,
      title: 'First Item',
      date: 'today',
      price: '$140',
    },
  ];

  const imageWidth = windowWidth * 0.3; // Set the image width as a percentage of the screen width
  const textContainerWidth = windowWidth * 0.7 - 32; // Subtracting padding

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={[styles.imageContainer, { width: imageWidth }]}>
        <Image source={item.image} style={[styles.image, { width: imageWidth, height: imageWidth }]} />
      </View>
      <View style={[styles.textContainer, { width: textContainerWidth }]}>
        <View>
          <Text style={styles.date}>{item.date}</Text>
          <View style={styles.titlePriceContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.detailButton}>See Full Detail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  imageContainer: {
    marginRight: 16,
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titlePriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: windowWidth < 375 ? 16 : 18, // Adjust font size based on screen width
    fontWeight: 'bold',
  },
  date: {
    fontSize: windowWidth < 375 ? 12 : 14, // Adjust font size based on screen width
    color: '#888',
  },
  price: {
    fontSize: windowWidth < 375 ? 14 : 16, // Adjust font size based on screen width
    fontWeight: 'bold',
    color: '#007AFF',
  },
  detailButton: {
    color: '#007AFF',
    textAlign: 'right',
  },
});
