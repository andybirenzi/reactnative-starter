import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';

const COLOR_INCREMENT =50;
const reducer= (state, action) =>{
    switch (action.type){
        case 'change_red':
            //one way of writing the condition
            return (state.red + action.payLoad<=255 &&state.red + action.payLoad >=0)?{...state,red: state.red  + action.payLoad}: state;
        case 'change_green':
            return {...state,
                //if gree + addMount is out of the 255-0 range return the existing green value otherwise add the amount
                green: (state.green + action.payLoad<=255 &&state.green + action.payLoad >=0?state.green + action.payLoad : state.green)};
           
        case 'change_blue':
            return {...state,
                blue: (state.blue + action.payLoad<=255 &&state.blue + action.payLoad >=0?state.blue + action.payLoad : state.blue)};

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
                onIncrease={() =>  myReducer({type:'change_green',payLoad:50})
                    // setGreen(changeColor(green, COLOR_INCREMENT))
                }
                onDecrease={() =>  myReducer({type:'change_green',payLoad:-50})
                    // setGreen(changeColor(green,-COLOR_INCREMENT))
                }
                color="Green" />
            <ColorAdjuster
                onIncrease={() =>  myReducer({type:'change_red',payLoad:50})
                    // setRed(red + COLOR_INCREMENT)
                }
                onDecrease={() =>  myReducer({type:'change_red',payLoad:-50})
                    // setRed(red - COLOR_INCREMENT)
                }
                color="Red" />
            <ColorAdjuster
                onIncrease={() =>  myReducer({type:'change_blue',payLoad:50})
                    // setBlue(blue + COLOR_INCREMENT)
                }
                onDecrease={() =>  myReducer({type:'change_blue',payLoad:-50})
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