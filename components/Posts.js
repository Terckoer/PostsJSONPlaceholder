import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View , Button, FlatList, Dimensions} from "react-native";

export default ({navigation}) => {
  const [posts, setPosts] = useState([]);
  const usuario=navigation.getParam('usuario', 'Unknown');

  const getPosts = async (url) =>{
    const DATA = await fetch(url);
    const response = await DATA.json();
    setPosts(response.filter(element => element.userId === usuario.id));
  }

  const result = useEffect(()=>{
    getPosts('https://jsonplaceholder.typicode.com/posts');
  },[]);

  return (
    <View style={styles.listaContainer}>
      <Text style={styles.text}> {usuario.name}</Text>
      <Button color='#209fd9' title=' User details ' onPress={()=>navigation.navigate('Details', { usuario:usuario})}/>
      <Text style={styles.text}>Posts: </Text>

      <View style={styles.listaView}>
        <FlatList
          data={posts}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) =>
            <View style={styles.box}>
              <Text style={styles.font}>Title: {item.title}</Text>
              <Text style={styles.font}>Body:</Text>
              <Text style={styles.content}>{item.body}</Text>
            </View>
          }
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listaContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#145c87',
    flexDirection:'column'
  },
  listaView:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    textAlign:'justify',
    overflow:'scroll'
  },
  box:{
    margin:10,
    padding:20,
    backgroundColor:'#122439'
  },
  font:{
    color:'#ffffee',
    fontSize:20,
    fontWeight:'800',
    marginBottom:10
  },
  content:{
    color:'#ffffee',
    fontSize:12,
    fontWeight:'600',
    marginBottom:10
  },
  text:{
    fontSize:24,
    fontWeight:'800',
    color:'#ffffff',
    marginVertical:5
  }
});
