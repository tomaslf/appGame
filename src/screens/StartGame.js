import { Button, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import React from 'react'
import Card from '../components/Card'
import Colors from '../constants/Colors'
import Input from '../components/Input'

const StartGame = () => {

  const [value, setValue]= useState("")

  const handleText  = (text) =>{
    console.log(text)
    setValue(text.replace(/[^0-9]/g, ""))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start Game</Text>
      <Card>
        <View>
          <Text style={styles.subTitle}>Choose a number</Text>
          <Input blurOnSubmit autoCapitalize={'none'} maxLength={2} keyboardType={'numeric'} autoCorrect={false} onChangeText={handleText } value={value } />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.cleanButton}>
            <Button color={Colors.disableColor} title='Clean' />
          </View>
          <View style={styles.confirmButton}>
            <Button color={Colors.actionColor} title='Confirm' />
          </View>
        </View>
      </Card>
    </View>
  )
}

export default StartGame

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: 'white'
  },
  subTitle: {
    color: 'white'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {

  },
  cleanButton: {
    backgroundColor: Colors.disableColor,
    width: 100,
    borderRadius: 50,
  },
  confirmButton: {
    width: 100,
    backgroundColor: Colors.actionColor,
  }

})