/* eslint-disable react/prop-types */
import { React, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { RadioButton, Text } from 'react-native-paper'

export function Options(props) {
  console.log(props)
  const [value, setValue] = useState('first')

  return (
    <RadioButton.Group
      onValueChange={(newValue) => setValue(newValue)}
      value={value}
    >
      {props.ops.map((op, index) => {
        return (
          <View key={index} style={styles.container}>
            <RadioButton value={op} />
            <Text>{op}</Text>
          </View>
        )
      })}
    </RadioButton.Group>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  texts: {
    fontSize: 40
  }
})
