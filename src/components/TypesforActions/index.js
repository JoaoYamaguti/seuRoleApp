/* eslint-disable react/prop-types */
import { React, useState } from 'react'
import { types } from '../../data/questions'

import {
  ViewQuestion,
  TextQuestion,
  RadioContent,
  Radio,
  RadioFill,
  TextRadio,
  TouchRadio
} from './styled'

export function TypesforActions({ action, handleAsks }) {
  const [value, setValue] = useState('')

  const handleOptions = () => {
    let res = []
    types.types.forEach((item) => {
      if (item.action === action) {
        res = item.options
      }
    })
    return res
  }

  const options = handleOptions()

  return (
    <ViewQuestion>
      <TextQuestion>{types.question}</TextQuestion>

      {options.map((item, index) => {
        return (
          <TouchRadio
            key={index}
            onPress={() => {
              setValue(item)
              types.answer = item
              handleAsks(types)
            }}
          >
            <RadioContent>
              <Radio>{value === item ? <RadioFill></RadioFill> : null}</Radio>
              <TextRadio>{item}</TextRadio>
            </RadioContent>
          </TouchRadio>
        )
      })}
    </ViewQuestion>
  )
}
