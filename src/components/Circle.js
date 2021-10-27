import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Circle({size}) {
    return (
        <Entypo name="circle" size={size} color="black" />
    );
}

const styles = StyleSheet.create({});