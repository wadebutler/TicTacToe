import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { $White, $Blue } from '../utilities/StyleVariables';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tic-Tac-Toe</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: $Blue,
        width: '80%',
        alignItems: 'center',
        paddingVertical: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    title: {
        color: $White,
        textTransform: 'uppercase',
        fontSize: 20
    }
});