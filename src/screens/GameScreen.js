import { StyleSheet, Text, View,Button } from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'
import Card from '../components/Card'

const GameScreen = () => {
  const [currentGuess, setCurrentGuess] = useState()

  useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1 ))
    
  }, [])
  



  return (
    <View style={styles.container}>
      <Text>Opponent Guess</Text>
      <Text>{currentGuess} </Text>
      <Card newStyles={styles.buttonsContainer} >
        <Button title="Menor"  />
        <Button title="Mayor"  />
      </Card>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
    alignItems:'center'

  },
  buttonsContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop: 20,
    width: "80%"
  }
})