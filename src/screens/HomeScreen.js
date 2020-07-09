import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props);
  return (
    <View>
      <Text style={styles.text}>Hey Andy !</Text>
      <Button title="Go to component Demo" 
      onPress={()=>props.navigation.navigate('Components')}/>
      <TouchableOpacity onPress={()=> props.navigation.navigate('Components')}>
        <Text>Go to list demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
