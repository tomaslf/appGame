import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Header from './src/components/Header';
import StartGame from './src/screens/StartGame';
import GameScreen from './src/screens/GameScreen';

export default function App() {

const [userNumber, setUserNumber] = useState()

const handleStartGame = (selected) =>{
  setUserNumber(selected)
}

let content = <StartGame onStartGame={handleStartGame} />

if (userNumber){
  content = <GameScreen/>
}

  return (
    <View style={styles.container}>
      <Header title={'My Game'} />
     {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
