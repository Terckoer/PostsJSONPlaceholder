import React from 'react';
import {StyleSheet, Text, ScrollView, Button, View} from 'react-native';


export default ({navigation})=>{
    const user = navigation.getParam('usuario', 'Unknown');
    console.log(user);
    return(
        <ScrollView style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>User details</Text>
                <Text style={styles.info}>Name: {user.name} </Text>
                <Text style={styles.info}>User ID: {user.id} </Text>
                <Text style={styles.info}>Email: {user.email}</Text>
                <Text style={styles.info}>Username: {user.username}</Text>
                <Text style={styles.info}>Phone: {user.phone}</Text>
                <Text style={styles.info}>Website: {user.website}</Text>    
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>User address </Text>
                <Text style={styles.info}>City:{user.address.city} </Text>
                <Text style={styles.info}>Street:{user.address.street} </Text>
                <Text style={styles.info}>Suite: {user.address.suite}</Text>
                <Text style={styles.info}>Zipcode: {user.address.zipcode}</Text>
                <Text style={styles.info}>Latitude: {user.address.geo.lat}</Text>
                <Text style={styles.info}>Longitude: {user.address.geo.lng}</Text>
                <Button title='View Ubication' onPress={() => navigation.navigate('Ubications', {geo:user.address.geo})}/>
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>User company</Text>
                <Text style={styles.info}>Company name: {user.company.name}</Text>
                <Text style={styles.info}>Catch Phrase: {user.company.catchPhrase}</Text>
                <Text style={styles.info}>Bs: {user.company.bs}</Text>
            </View>
            {/* <Text>ID de usuario: {detail.id} </Text> */}
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:'#145c87'
    },
    box:{
        padding:20,
        backgroundColor:'#122439',
        margin:10, 
    },
    text:{
        fontWeight:'700',
        fontSize:24,
        color:'#ffffee'
    },
    info:{
        fontSize:18,
        color:'#ffffff',
        fontWeight:'300',
    }
});