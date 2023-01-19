import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#ab9087',
        height:90,
        paddingTop:36,
        alignItems:'center',
        justifyContent:'center'
    },
    headerTitle:{
        fontSize:25,
        color:'white',
    }
})