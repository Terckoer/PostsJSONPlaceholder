import React from "react";
import { View, Button, StyleSheet, Text, Dimensions } from "react-native";
import MapView,{ Marker} from "react-native-maps";

export default ({navigation}) => {
    const coords = navigation.getParam('geo', 'Default');
  return (
    <View style={styles.container}>
      <MapView style={styles.mapa} 
        initialRegion={{
            latitude:parseFloat(coords.lat), 
            longitude:parseFloat(coords.lng),
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{latitude:parseFloat(coords.lat), longitude:parseFloat(coords.lng)}}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapa: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
