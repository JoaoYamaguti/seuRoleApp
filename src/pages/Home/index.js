/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

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

      <FrameTopBar></FrameTopBar>

      <ViewLogo>
        <Image
          style={{ width: 66, height: 66 }}
          source={{
            uri: 'https://lh5.googleusercontent.com/p/AF1QipPhTqT_oJW2xhBKrQNbjM42tz5VliTL2l2cE4fX=w408-h306-k-no'
          }}
        ></Image>

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
