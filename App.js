import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import 'react-native-gesture-handler';
import { UsuariosScreen, PostsScreen, DetallesUsuarioScreen, UbicationScreen } from './components'



const AppNavigator = createStackNavigator({
  Users:{
    screen:UsuariosScreen,
  },
  Posts:{
    screen:PostsScreen,
  },
  Details:{
    screen:DetallesUsuarioScreen,
  },
  Ubications:{
    screen:UbicationScreen
  }
},{
  initialRouteName:'Users'
}
);


export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:32,
    fontWeight:'700',
    color:'#0f0'
  },
});
