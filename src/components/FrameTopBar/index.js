/* eslint-disable react/prop-types */
import React from 'react'
import { StatusBar, View } from 'react-native'
import { colors } from '../../utilities/colors'

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 5
  : 64

export function FrameTopBar() {
  return (
    <View
      style={{
        paddingTop: statusBarHeight,
        backgroundColor: colors.header
      }}
    ></View>
  )
}
