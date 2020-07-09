import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetails from '../components/ImageDetails'

const ImageScreen = () => {

    return (
        <View>
            <ImageDetails title="Forest" 
            imageSrc={require('../../assets/mountain.jpg')} 
            imageScore={5}/>
            <ImageDetails title="Tries" 
            imageSrc={require('../../assets/forest.jpg')} 
            imageScore={25}/>
            <ImageDetails title="Yard" imageSrc={require('../../assets/beach.jpg')}
             imageScore={24} />
        </View>


    );

}

// const styles= StyleSheet.create({
//   image: {

//   }
// }
// );

export default ImageScreen;