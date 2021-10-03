import React, {useState, useEffect} from "react";
import {View,Text,StyleSheet, Button, FlatList} from 'react-native';



export default ({navigation}) =>{
  const [users, setUsers] = useState([]);

  const getUsers = async (url) =>{
    const data = await fetch(url);
    const response = await data.json();
    setUsers(response);
  }

  const result = useEffect(() =>{
    getUsers('https://jsonplaceholder.typicode.com/users');
  },[]);

  
    return(
      <View style={styles.listaContainer}>
          <Text style={styles.text}>Users list</Text>
          <FlatList
            data={users}
            keyExtractor={item => String(item.id)}
            renderItem={
              ({item}) => 
                <View style={styles.fila}>
                  <Text style={styles.lista}>{item.name}</Text>
                  <Button title='Posts' onPress={() => navigation.navigate('Posts',{usuario:item})}/>
                </View>
            }
          />
      </View>
    );
  }


  const styles = StyleSheet.create({
      text:{
        fontWeight:'700',
        fontSize:28,
        color:'#ffffff'
      },
      lista:{
        fontSize:14,
        fontWeight:'900',
        padding:5,
        marginTop:5,
        color:'#fff'
      },
      listaContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#034'
      },
      fila:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5,
        margin:5
      }
  });