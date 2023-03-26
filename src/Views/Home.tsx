import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home(): JSX.Element {
    return (
        <View style={styles.mainHeader}>
            <Text style={styles.homeTitle}>Home</Text>
            <StatusBar animated translucent />
        </View>
    )
}

const styles = StyleSheet.create({
    mainHeader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    homeTitle: {
        fontSize: 36,
        fontWeight: '700'
    }
});

