import React from "react";
import {
  View, 
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

import * as Animatable from 'react-native-animatable' ;

export default function SignIn(){
    return(
        <View style={styles.container}>
        <Animatable.View
         animation="fadeInLeft"
         delay={500}
         style={styles.containerHeader}>
            <Text style={styles.message}> Bem vindo!! </Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder="Digite um email..." style={styles.input} />

        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder="Digite sua senha..." style={styles.input} />

        <TouchableOpacity style={styles.buttom}>
          <Text style={styles.buttomText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttomRegistrer}>
          <Text style={styles.RegisterText}>
            Não possui uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7B68EE'
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 20,
    marginTop: 28
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  buttom: {
    backgroundColor: '#7B68EE',
    width: '100%',
    borderRadius: 3,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttomText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttomRegistrer: {
    marginTop: 14,
    alignSelf: 'center'
  },
  RegisterText: {
    color: '#a1a1a1'
  }
})