import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";


const HomeScreen = ({ navigation }) => {
  // console.log(props);
  return (
    <View>
      {/* <Text style={styles.text}>Hey Andy !</Text> */}
      <Button title="Go to component Demo"
        onPress={() => navigation.navigate('Components')} />
      <Button title="Go List Demo"
        onPress={() => navigation.navigate('List')} />
        <Button title="Go to Image Demo"
    onPress={() => navigation.navigate('Image')} />
      {/* <TouchableOpacity onPress={()=> navigation.navigate('Components')}>
        <Text>Go to list demo</Text>
      </TouchableOpacity> */}
       <Button title="Go to Counter Screen"
    onPress={() => navigation.navigate('Counter')} />
     
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
