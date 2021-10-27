import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Cross({size}) {
    return (
        <Feather name="x" size={size} color="black" />
    );
}

const styles = StyleSheet.create({});