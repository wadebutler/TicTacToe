import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { $Black, $White, $Blue, $Red, $Green } from '../utilities/StyleVariables';

export default function Cross({size}) {
    return (
        <View style={size === 130 ? null : styles.container}>
            <Feather name="x" size={size} color={$Red} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative', 
        bottom: -2,
    }
});