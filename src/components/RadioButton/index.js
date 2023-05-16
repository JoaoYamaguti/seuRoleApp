import { React, useState } from "react";
import { View } from "react-native";
import { RadioButton, Text } from 'react-native-paper';

export function Options({op1, op2}) {

    const [value, setValue] = useState('first');

    return (
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
          <View style={{
            flexDirection:'row',
            alignItems:'center',
          }}>
            <Text>{op1}</Text>
            <RadioButton value="first" />
          </View>
          <View style={{
            flexDirection:'row',
            alignItems:'center',
          }}>
            <Text>{op2}</Text>
            <RadioButton value="second" size={1} />
          </View>
        </RadioButton.Group>
    )
}