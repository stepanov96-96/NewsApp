import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { gStyle } from './stules/stule';
import * as Fonts from 'expo-fonts';

const fonts = () => Font.loadAsunc({
  'mt-bold': require('./assets/Fonts/Montserrat-Bold.ttf'),
  'mt-regular': require('./assets/Fonts/Montserrat-Regular.ttf')
})

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
