import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { gStyle } from '../styles/style';

export default function FullInfo({route}) {
    /*const loadScene = () => {
        navigation.goBack();
    }*/

    return (
      <View style={gStyle.main}>
        <Image style = {styles.image} source = {{
                uri: route.params.img
        }}/>
        <Text style = {[gStyle.title, styles.header]}>{route.params.name}</Text>
        <Text style = {styles.full}>{route.params.full}</Text>
      </View>
    );
} 
const styles = StyleSheet.create({
  full:{
    fontFamily: 'mt-regular',
    fontSize: 16, 
    textAlign: 'left',
    marginTop: 20,
    color: '#474747'
  },
  header: {
    fontSize: 25,
    marginTop: 25,
  },
  image:{
    height: 350,
    width: '100%'
  },

});