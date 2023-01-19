import { useState } from 'react';
import {useFonts} from 'expo-font'
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import StartGame from './src/screens/StartGame';
import GameScreen from './src/screens/GameScreen';


export default function App() {
const [loaded] = useFonts({
  OswaldRegular: require("./src/assets/fonts/OswaldRegular.ttf"),
})
const [userNumber, setUserNumber] = useState()

const handleStartGame = (selected) =>{
  setUserNumber(selected)
}

let content = <StartGame onStartGame={handleStartGame} />

if (userNumber){
  content = <GameScreen/>
}
if(!loaded){
  return null
}

  return (
    <View style={styles.container}>
      <Header title={'My Game'} newStyles={{fontFamily:'OswaldRegular'}} />
     {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
