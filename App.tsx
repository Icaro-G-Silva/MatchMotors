import React from 'react';
import { View } from 'react-native';
import Splash from './src/Views/Splash';
import Home from './src/Views/Home';

export default function App(): JSX.Element {

    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    return isLoading ? <Splash setIsLoading={setIsLoading} /> : <Home/>
}

