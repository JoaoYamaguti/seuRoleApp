/* eslint-disable react/prop-types */
import React from 'react'

import Icon from 'react-native-vector-icons/Feather'

import { ScrollImgs } from './styled'

export function HorizontalScroll (props) {
  return (
    <ScrollImgs horizontal={true} showsHorizontalScrollIndicator={false}>
      {props.nofimg.map((item, index) => {
        return (
          <Icon
            key={index}
            name='slack'
            size={150}
          ></Icon>
        )
      })}
    </ScrollImgs>
  )
}
