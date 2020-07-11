import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

const TextScreen = () => {
    const [currentValue, setCurrentValue] = useState("");
    return (<View>
        <Text>Please enter your password:</Text>
        <TextInput style={styles.input}
            autoCapitalize="none" autoCorrect={false}
            value={currentValue}
            onChangeText={(newText) => setCurrentValue(newText)}
        />
        {
         (currentValue.length <5) ?<Text>the minimum password length must be more than 5 characters</Text>: null
        }
       
    </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 5,
        borderColor: "black",
        borderWidth: 1
    }
})
export default TextScreen;