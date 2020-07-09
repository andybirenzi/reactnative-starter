import React from 'react';
import {Text, Image,View} from 'react-native';

const ImageDetails = (props) =>{
    // console.log(props);
return (

    <View>
      <Image source={props.imageSrc}/>
      <Text>{props.title}</Text>
      <Text>{props.imageScore}</Text>
    </View>
    

);
}

export default ImageDetails;