import { Button, StyleSheet, Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from 'react'
import React from 'react'
import Card from '../components/Card'
import Colors from '../constants/Colors'
import Input from '../components/Input'

const StartGame = ({onStartGame}) => {

  const [value, setValue] = useState("")
  const [confirmed, setConfirmed] = useState(false)
  const [selected, setSelected] = useState("")

  const handleText = (text) => {
    console.log(text)
    setValue(text.replace(/[^0-9]/g, ""))
  }

  const handleConfirmation = () => {
    const newValue = parseInt(value)
    if (newValue === NaN || newValue <= 0 || newValue >= 99) return
    setConfirmed(true)
    setSelected(newValue)
    setValue("")
  }



  const handleTextInput = () => {
    setValue("");
    setConfirmed(false)
  }

  return (
    <KeyboardAvoidingView style={{flex:1}}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Text style={styles.title}>Start Game</Text>
          <Card>
            <View>
              <Text style={styles.subTitle}>Choose a number</Text>
              <Input blurOnSubmit autoCapitalize={'none'} maxLength={2} keyboardType={'numeric'} autoCorrect={false} onChangeText={handleText} value={value} />
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.cleanButton}>
                <Button color={Colors.disableColor} onPress={handleTextInput} title='Clean' />
              </View>
              <View style={styles.confirmButton}>
                <Button color={Colors.actionColor} onPress={handleConfirmation} title='Confirm' />
              </View>
            </View>
          </Card>
          {confirmed && (
            <Card newStyles={styles.confirmedCard}>
              <Text >Your number is: {selected}</Text>
              <View>
                <Button color={Colors.actionColor} onPress={()=> onStartGame(selected)} title='Start Game' />
              </View>

            </Card>

          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

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
    marginTop:25,
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
  },
  confirmedCard: {
    marginTop: 25,
    backgroundColor: 'white'
  }

})