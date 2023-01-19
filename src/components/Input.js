import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default function Input({newStyles, ...restProps}) {
    return (
        <TextInput style={{...styles.input, ...newStyles}} {...restProps} />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        marginVertical: 10,
        width: 90,
    }
})