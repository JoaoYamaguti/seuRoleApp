import { React, useState } from "react";
import { View, StyleSheet } from "react-native";
import { RadioButton, Text } from 'react-native-paper';

export function Options({op1, op2}) {

    const [value, setValue] = useState('first');

    return (
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
          <View style={styles.container}>
            <RadioButton value="first" />
            <Text style={''}>{op1}</Text>
          </View>
          <View style={styles.container}>
            <RadioButton value="second" size={1} />
            <Text style={''}>{op2}</Text>
          </View>
        </RadioButton.Group>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems:'center'
  },
  texts: {
    fontSize:40
  }
})