import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';

const COLOR_INCREMENT =50;
const reducer= (state, action) =>{
    switch (action.colorToChange){
        case 'red':
            //never going to change the actual value
            return {...state,
                red: (state.red + action.addAmount<=255 &&state.red + action.addAmount >=0?state.red + action.addAmount : state.red)};
        case 'green':
            return {...state,
                //if gree + addMount is out of the 255-0 range return the existing green value otherwise add the amount
                green: (state.green + action.addAmount<=255 &&state.green + action.addAmount >=0?state.green + action.addAmount : state.green)};
           
        case 'blue':
            return {...state,
                blue: (state.blue + action.addAmount<=255 &&state.blue + action.addAmount >=0?state.blue + action.addAmount : state.blue)};

        default:
            return state;
    }
}

const SquareScreen = () => {
    const [state, myReducer] = useReducer(reducer,{red:0, green:0, blue:0});
    const {red,green,blue}= state;
   
    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);
    
    // const changeColor= (color, increment) =>{
    //     // const result =color+increment;
    //     // if(color+increment<=255 && color+increment>=0 ){
    //     //     return color+increment;
    //     // }
    //     // else{
    //     //     return color;
    //     // }


    // }
    // console.log("blue "+blue+"red "+ red +"Green "+green);
    return (
        <View>
            <ColorAdjuster
                onIncrease={() =>  myReducer({colorToChange:'green',addAmount:50})
                    // setGreen(changeColor(green, COLOR_INCREMENT))
                }
                onDecrease={() =>  myReducer({colorToChange:'green',addAmount:-50})
                    // setGreen(changeColor(green,-COLOR_INCREMENT))
                }
                color="Green" />
            <ColorAdjuster
                onIncrease={() =>  myReducer({colorToChange:'red',addAmount:50})
                    // setRed(red + COLOR_INCREMENT)
                }
                onDecrease={() =>  myReducer({colorToChange:'red',addAmount:-50})
                    // setRed(red - COLOR_INCREMENT)
                }
                color="Red" />
            <ColorAdjuster
                onIncrease={() =>  myReducer({colorToChange:'blue',addAmount:50})
                    // setBlue(blue + COLOR_INCREMENT)
                }
                onDecrease={() =>  myReducer({colorToChange:'blue',addAmount:-50})
                    // setBlue(blue - COLOR_INCREMENT)
                }
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