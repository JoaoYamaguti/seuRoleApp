/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/Feather'

import { FrameTopBar } from '../../components/FrameTopBar'
import { PressStart, ImageHome, ViewHome, ViewLogo, TextStart } from './styled'

export function Home() {
  const navigation = useNavigation()
  return (
    <ViewHome>
      <LinearGradient
        colors={['#54728C', '#2A3E59']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '100%'
        }}
      />

      <FrameTopBar/>

      <ViewLogo>
        <ImageHome source={require('../../imgs/logo.png')}></ImageHome>
        <Text>Duvidas na hora de escolher um lugar para sair?</Text>
        <Text>Nós te ajudamos</Text>
      </ViewLogo>

      <PressStart onPress={() => navigation.navigate('Questions')}>
        <TextStart>
          Let's Go <Icon name='chevron-right' size={30} />
        </TextStart>
      </PressStart>
    </ViewHome>
  )
}
