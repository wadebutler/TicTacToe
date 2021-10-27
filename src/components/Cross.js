import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { $Red } from '../utilities/StyleVariables';

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