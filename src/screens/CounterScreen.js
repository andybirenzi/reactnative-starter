import React, {useState,useReducer} from 'react';
import {Text, View, StyleSheet,Button} from 'react-native';

const reducer = (state,action)=>{
    switch(action.type){
        case 'Increase':
            return {...state,counter: state.counter+action.payload};
        case 'Decrease':
            return {...state,counter: state.counter-action.payload};
        default:
    }

}

const CounterScreen= () =>{
    // const [counter,setCounter]=useState(0);
    const [state,myReducer]=useReducer(reducer,{counter:0});
    return (
        <View>
            <Button title="Increase" onPress={()=>myReducer({type:"Increase",payload:1})}/>
            <Button title="Decrease" onPress={()=>
            // {
            //   setCounter(counter-1);
            // }
            myReducer({type:"Decrease",payload:1})
            }/>
            <Text>{state.counter}</Text>
        </View>

    );

}
export default CounterScreen;