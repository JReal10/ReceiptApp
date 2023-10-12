import React, { useState,useEffect,useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';
import Button from '../components/Button';

export default function CameraComponent() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image,setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash,setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted')
    })();
  }, []);
  
  if (!permission) {
    // Handle the case when camera permission information is not available yet.
    return <Text>Loading</Text>
  }

  if (!permission.granted) {
    // Handle the case when camera permission is not granted.
    return (
    <View>
      <Text>Access Denied</Text>
    </View>
   )
  }

  function toggleCameraType() {
    setType((currentType) =>
      currentType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button icon = 'close' title = {''}></Button>
      <Camera style={styles.camera} type={type}
      flashMode={flash}
      ref = {cameraRef}>
      </Camera>
      <View class = {styles.cameraProp}>
        <Button title = {''} icon = 'flash'></Button>
        <Button title = {''} icon = 'radio-button-on' ></Button>
        <Button title = {''} icon = 'sync-circle' onPress={toggleCameraType}></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#A35D6A",
    flexDirection: 'column',
    padding:20,
  },
  camera: {
    flex: 1,
  },
  cameraProp:{
    flexDirection: 'row',
  }
});
