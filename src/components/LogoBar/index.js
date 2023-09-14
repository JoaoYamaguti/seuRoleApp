import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { ViewBar, BackHome, PressedText, ImageLogo } from './style'

import Icon from 'react-native-vector-icons/Feather'

export function LogoBar() {
  const navigator = useNavigation()

  return (
    <ViewBar>
      <BackHome onPress={() => navigator.goBack()}>
        <PressedText>
          <Icon name='chevron-left' size={40} />
        </PressedText>
      </BackHome>

        <ImageLogo source={require('../../imgs/logoLinha.png')}></ImageLogo>

    </ViewBar>
  )
}
