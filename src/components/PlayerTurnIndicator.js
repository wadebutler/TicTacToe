import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { $Black, $White, $Blue, $Red, $Green } from '../utilities/StyleVariables';

export default function PlayerTurnIndicator({activePlayer}) {
    return (
        <View style={[styles.container, {backgroundColor: activePlayer === 1 ? $Red : $Green}]}>
            {
                activePlayer !== 1 ? null : <Text style={styles.title}>It's Player x's Turn</Text>
            }
            {
                activePlayer !== 2 ? null : <Text style={styles.title}>It's Player o's Turn</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    title: {
        color: $Black,
        textTransform: 'uppercase',
        fontSize: 20
    }
});