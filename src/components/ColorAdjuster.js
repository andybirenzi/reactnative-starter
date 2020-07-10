import React from 'react';
import {Text, Button,View} from 'react-native';

const ColorAdjuster = ({color,onIncrease,onDecrease}) =>{
    // console.log(props);
return (

    <View>
      <Text>{color}</Text>
      <Button title={"Increase "+color} onPress={()=>onIncrease()}/>
      <Button title={"Decrease "+ color} onPress={()=>onDecrease()}/>
    </View>
    

);
}

export default ColorAdjuster;