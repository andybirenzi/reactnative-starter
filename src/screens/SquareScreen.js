import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';

const COLOR_INCREMENT =50;
const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    
    const changeColor= (color, increment) =>{
        // const result =color+increment;
        if(color+increment<=255 && color+increment>=0 ){
            return color+increment;
        }
        else{
            return color;
        }


    }
    // console.log("blue "+blue+"red "+ red +"Green "+green);
    return (
        <View>
            <ColorAdjuster
                onIncrease={() => setGreen(changeColor(green, COLOR_INCREMENT))}
                onDecrease={() => setGreen(changeColor(green,-COLOR_INCREMENT))}
                color="Green" />
            <ColorAdjuster
                onIncrease={() => setRed(red + COLOR_INCREMENT)}
                onDecrease={() => setRed(red - COLOR_INCREMENT)}
                color="Red" />
            <ColorAdjuster
                onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
                onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
                color="Blue" />

            <View style={{
                 height: 100,
                  width: 200,
                   backgroundColor: `rgb(${red},${green},${blue})` 
                 }} />
        </View>
    );

};


export default SquareScreen;