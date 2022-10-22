import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        {/* <Text style={styles.title}>Lorem ipsum lorem ipsum lorem ipsum</Text>
        <Text style={styles.text}>Faça o login para começar</Text> */}

        <TouchableOpacity
          style={styles.buttom}
          onPress={() => navigation.navigate('')}
        ></TouchableOpacity>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7B68EE',
    marginTop: '0%',
  },
  // containerLogo: {
  //   flex: 1,
  //   backgroundColor: '#7B68EE',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  containerForm: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 28,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12
  },
  text: {
    color: '#a1a1a1',
    fontSize: 15,
    fontWeight: 'bold'
  },
  // buttom: {
  //   position: 'absolute',
  //   backgroundColor: '#000',
  //   borderRadius: 50,
  //   paddingVertical: 8,
  //   width: '60%',
  //   alignSelf: 'center',
  //   bottom: '15%',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
  buttomText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})
