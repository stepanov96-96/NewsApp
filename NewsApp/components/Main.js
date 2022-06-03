import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Modal} from 'react-native';
import { gStyle } from '../styles/style';
import { Ionicons } from '@expo/vector-icons';
import Form from './Form';




export default function Main({navigation}) {


    const [news, setNews] = useState([
        {name:'Title News', anons: 'short text news', full: ' loooooong text news is app',key: '1', img: 'https://avatars.mds.yandex.net/get-zen_doc/1245815/pub_5ad4f9fad7bf21db3be335e3_5ad4fa0b5f4967ba45f8213e/scale_1200'},
        {name:'Title News Google', anons: 'short text news Google ', full: ' loooooong text news is app Google',key: '1', img: 'https://fikiwiki.com/uploads/posts/2022-02/1644925836_43-fikiwiki-com-p-prikolnie-kartinki-pro-programmistov-46.jpg'},
        {name:'Title News VK', anons: 'short text news VK', full: ' loooooong text news is app VK',key: '1', img: 'https://pcpro100.info/wp-content/uploads/2019/09/post_5d80b02ac6194.jpeg'},
    ]);

    const [modalWindow, setModalWindow] = useState(false);

    const addArticle = (article) => {
      setNews((list)=> {
        article.key = Math.random().toString();
        return [
          article,
          ...list
        ]
      });
      setModalWindow(false);
    };

    return (
      <View style={gStyle.main}>
        <Modal visible={modalWindow}>      
          <View style={gStyle.main}>
            <Ionicons name="close-circle" size={34} color="black" onPress={() => setModalWindow(false)} />
            <Text style = {[gStyle.title, styles.header]}>Add form</Text>
            <Form addArticle ={addArticle}/>
          </View>
          
        </Modal>
        <Ionicons name="add-circle" size={34} color="black" onPress={() => setModalWindow(true)}/>
        <Text style = {[gStyle.title, styles.header]}>Main page</Text>        
        <FlatList data ={news} renderItem ={({item}) =>(
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item) }>
              <Image style = {styles.image} source = {{
                width: '100%',
                height: 200,
                uri: item.img
              }}/>
                <Text style= {styles.title} >{item.name}</Text>
                <Text style= {styles.anons}>{item.anons}</Text>
            </TouchableOpacity>
        )}
        />
      </View>
    );
} 

const styles = StyleSheet.create({
  header:{
    marginBottom:30
  },
  item:{
    width:'100%',
    marginBottom: 30,
  },
  title:{
    fontFamily: 'mt-bold',
    fontSize: 22, 
    textAlign: 'center',
    marginTop: 20,
    color: '#474747'
  },
  anons:{
    fontFamily: 'mt-regular',
    fontSize: 16, 
    textAlign: 'left',
    marginTop: 5,
    color: '#474747'
  },


});
