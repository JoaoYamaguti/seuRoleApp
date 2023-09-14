import { styled } from 'styled-components'

import { colors } from '../../utilities/colors'
import { ResponsiveSize } from '../../utilities/dynamicFont'

export const ViewBar = styled.View`
  flex-flow: row;
  justify-content: flex-start;

  padding: 1%;

  background-color: ${colors.header};
`

export const BackHome = styled.Pressable`

z-index: 4;
`
export const TextLogo = styled.Text`
  font-size: ${ResponsiveSize(30)}px;
  color: white;
`

export const ImageLogo = styled.Image`
  position: absolute;
  left: 0;
  top: 5px;
  z-index: 0;
  width: 100%;
  height: 35px;
  resizeMode: center;
`

export const PressedText = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  color: ${colors.optionsRing};
`
