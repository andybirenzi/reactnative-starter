import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ImageDetails from '../components/ImageDetails'

const ImageScreen =() => {

return (
    <View>
        <ImageDetails title="Forest"/>
        <ImageDetails title="Tries"/>
        <ImageDetails title="Yard"/>
    </View>


);

}

// const styles= StyleSheet.create({
//   image: {

//   }
// }
// );

export default ImageScreen;