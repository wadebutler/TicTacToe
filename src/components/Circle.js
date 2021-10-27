import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { $Green } from '../utilities/StyleVariables';

export default function Circle({size}) {
    return (
        <View style={size === 95 ? null : styles.container}>
            <Entypo name="circle" size={size} color={$Green} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative', 
        bottom: -2,
    }
});