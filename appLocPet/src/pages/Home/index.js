import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MapView from 'react-native-maps';

import * as Location from 'expo-location';

const App = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Maps</Text>
      <MapView style={styles.map}
      initialRegion={{
       latitude: -23.62348364204039,
       longitude: -46.74943498729773,
       latitudeDelta: 0.0122,
       longitudeDelta: 0.0021
      }}      
      />
    </View>
  );
};
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    marginTop: 10,
    marginStart: 25,
  },
  map: {
    flex: 1
  },
});

export default App;