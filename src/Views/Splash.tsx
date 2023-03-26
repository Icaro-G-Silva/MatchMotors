import React, { Dispatch, SetStateAction } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';

interface SplashProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export default function Splash({ setIsLoading }: SplashProps): JSX.Element {
    return (
        <View style={styles.container}>
            <LottieView
                source={require('../../assets/animations/carAnimation.json')}
                speed={3.5}
                autoPlay
                loop={false}
                resizeMode='contain'
                onAnimationFinish={() => {setIsLoading(false)}}
            />
            <StatusBar animated translucent />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f76d43',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

