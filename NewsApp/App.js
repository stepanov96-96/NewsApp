import React, {useState} from 'react';
import { Text, View} from 'react-native';
import { gStyle } from './styles/style';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Main from './components/Main';
import Contacts from './components/Contacts';

const fethcFonts = () =>{
  return Font.loadAsync({ 
  'mt-bold': require('./assets/Fonts/Montserrat-Bold.ttf'),
  'mt-regular': require('./assets/Fonts/Montserrat-Regular.ttf'),
  });
};

export default function App() {
  const [font, setDataFont] = useState(false);

  if(font){
    return (
      <Main/>
    );
  } else {
    return(
      
      <AppLoading 
      
      startAsync = {fethcFonts} 
      onFinish ={() => setDataFont(true)}
      onError={(err) => console.log(err)}
       />
    );
    
  }
}


