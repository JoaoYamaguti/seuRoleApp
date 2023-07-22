import styled from 'styled-components'

import { ResponsiveSize } from '../../utilities/dynamicFont'
import { colors } from '../../utilities/colors'

export const ViewEstablishment = styled.View`
  border-bottom: solid 1px black;
`

export const Line = styled.View`
  height: 1px;
  width: 90%;

  margin: 5px auto;

  background-color: #2a3e59;
`

export const TextEstablishment = styled.Text`
  padding: 15px;

  font-size: ${ResponsiveSize(18)}px;
  text-transform: capitalize;
`
export const ScrollImgs = styled.ScrollView`
  height: 250px;
  /* margin: 0 15px; */

  font-size: larger;
`

export const ImageEstablishment = styled.Image`
  width: 400px;
  height: 250px;
  /* border: solid 1px ${colors.lightblue}; */
`

export const PressableMoreDetails = styled.Pressable`
  padding: 10px;

  border-radius: 14px;
  justify-content: center;
  align-items: center;
`
export const TextMoreDetails = styled.Text`
  color: ${colors.darkblue};
  text-decoration: underline;
  font-size: ${ResponsiveSize(15)}px;
`
export const ViewMoreDetails = styled.View`
  /* display: none; */
  padding: 15px;
`
export const TextDetailLabel = styled.Text`
  width: 100px;
`
export const TextDetail = styled.Text`
  text-transform: capitalize;
`
export const ViewDetail = styled.View`
  font-size: ${ResponsiveSize(15)}px;
  flex-flow: row;
  justify-content: space-between;
  box-sizing: border-box;

  text-transform: capitalize;
`
export const ViewDetailValue = styled.View`
  flex-grow: 1;
`
