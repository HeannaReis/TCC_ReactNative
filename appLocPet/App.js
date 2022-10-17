import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textCentral}>LocPet</Text>
      <StatusBar style="auto" />
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCentral:{
    backgroundColor: 'purple',
    color: 'white',
    fontSize: 20,
  }
});
