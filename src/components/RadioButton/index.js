import { React, useState } from "react";
import { View, StyleSheet } from "react-native";
import { RadioButton, Text } from 'react-native-paper';
import styled from "styled-components/native";

export function Options({op1, op2}) {

    const [value, setValue] = useState('first');

    return (
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
          <View style={styles.container}>
            <RadioButton value="first" />
            <Text style={texts}>{op1}</Text>
          </View>
          <View style={styles.container}>
            <RadioButton value="second" size={1} />
            <Text style={texts}>{op2}</Text>
          </View>
        </RadioButton.Group>
    )
}

const texts = styled.Text`
font-size: 5%;
`

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems:'center'
  },
  texts: {
    fontSize:40
  }
})