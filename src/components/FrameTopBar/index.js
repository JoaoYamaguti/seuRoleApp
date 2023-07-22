/* eslint-disable react/prop-types */
import React from 'react'
import { StatusBar, View } from 'react-native'

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 5
  : 64

export function FrameTopBar({ color }) {
  return (
    <View
      style={{
        paddingTop: statusBarHeight,
        backgroundColor: color
      }}
    ></View>
  )
}
