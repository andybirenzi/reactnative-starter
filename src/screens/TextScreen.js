import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

const TextScreen = () => {
    const [currentValue, setCurrentValue] = useState("");
    return <View>
        <Text>Please under your name below:</Text>
        <TextInput style={styles.input}
            autoCapitalize="none" autoCorrect={false}
            value={currentValue}
            onChangeText={(newText) => setCurrentValue(newText)}
        />

        <Text>{currentValue}</Text>
    </View>
}

const styles = StyleSheet.create({
    input: {
        margin: 5,
        borderColor: "black",
        borderWidth: 1
    }
})
export default TextScreen;