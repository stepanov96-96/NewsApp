import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import { gStyle } from '../styles/style';

export default function Main({navigation}) {


    const [news, setNews] = useState([
        {name:'Title News', anons: 'short text news', full: ' loooooong text news is app'},
        {name:'Title News Google', anons: 'short text news Google ', full: ' loooooong text news is app Google'},
        {name:'Title News VK', anons: 'short text news VK', full: ' loooooong text news is app VK'},
    ]);

    return (
      <View style={gStyle.main}>
        <Text style = {gStyle.title}>Main page</Text>
        <FlatList data ={news} renderItem ={({item}) =>(
            <TouchableOpacity onPress={() => navigation.navigate('FullInfo', item) }>
                <Text>{item.name}</Text>
                <Text>{item.anons}</Text>
            </TouchableOpacity>
        )}
        />
      </View>
    );
} 

