import React from 'react';
import {Text, View} from 'react-native';
import { gStyle } from '../styles/style';

export default function FullInfo({route}) {
    /*const loadScene = () => {
        navigation.goBack();
    }*/

    return (
      <View style={gStyle.main}>
        <Text style = {gStyle.title}>{route.params.name}</Text>
        <Text style = {gStyle.paragraph}>{route.params.full}</Text>
      </View>
    );
} 