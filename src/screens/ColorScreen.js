import React, {useState} from 'react';
import {Text, View, StyleSheet,Button, FlatList} from 'react-native';

const ColorScreen= () =>{
    const [colors,setColors]=useState([]);
    console.log(colors);
    return (
        <View>
            <Button title="Add color" onPress={()=>{
                setColors([...colors,getRondom()]);
               
            }} />
            <FlatList
              keyExtractor= {item => item}
             data={colors}
            renderItem={({item})=>{
            return  <View style={{height:100, width:200, backgroundColor:item}}/>;
             }} />
           {/* <View style={{height:100, width:200, backgroundColor:getRondom()}}/> */}
           
        </View>
 
    );
    
};

const getRondom = () =>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
   
    return `rgb(${red},${green},${blue})`;
}
export default ColorScreen;