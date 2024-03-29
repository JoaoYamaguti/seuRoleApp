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
  const [value, setValue] = useState(ask.answer)

  return (
    <ViewQuestion>
      <TextQuestion>{ask.question}
      </TextQuestion>

      {ask.options.map((item, index) => {
        return (
          <TouchRadio
            key={index}
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
