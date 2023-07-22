/* eslint-disable react/prop-types */
import { React, useState } from 'react'

import {
  ViewQuestion,
  TextQuestion,
  RadioContent,
  Radio,
  RadioFill,
  TextRadio,
  TouchRadio
} from './styled'

export function Question({ ask, handleAsks }) {
  const [value, setValue] = useState('')

  return (
    <ViewQuestion>
      <TextQuestion>{ask.question}</TextQuestion>

      {ask.options.map((item) => {
        return (
          <TouchRadio
            key={ask.options.indexOf(item)}
            onPress={() => {
              setValue(item)
              ask.answer = item
              handleAsks(ask)
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
