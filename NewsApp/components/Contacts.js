import React from 'react';
import {Text, View} from 'react-native';
import { gStyle } from '../styles/style';

export default function Contacts({navigation}) {
    /*const loadScene = () => {
        navigation.goBack();
    }*/

    return (
      <View style={gStyle.main}>
        <Text style = {gStyle.title}> wanderer about us</Text>

      </View>
    );
} 

