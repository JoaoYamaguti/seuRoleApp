import styled from 'styled-components/native'
import { colors } from '../../utilities/colors'

import { ResponsiveSize } from '../../utilities/dynamicFont'

export const ScrollItinerary = styled.ScrollView`
  margin: 15px;
`

export const TextIntroduction = styled.Text`
  padding: 0 15px 15px;

  font-size: ${ResponsiveSize(22)}px;
  text-align: justify;
`

export const TextItinerary = styled.Text`
  padding: 0 15px;

  font-size: ${ResponsiveSize(20)}px;
`

export const ViewStablishments = styled.View`
  border: solid 1px black;
  border-radius: 14px;
`
export const ViewStablishment = styled.View``
export const TextStablishment = styled.Text`
  padding: 15px;

  font-size: ${ResponsiveSize(18)}px;
  text-transform: capitalize;
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
export const TextDetails = styled.Text`
  font-size: ${ResponsiveSize(15)}px;
`
export const Line = styled.View`
  height: 1px;
  width: 90%;

  margin: 15px auto;

  background-color: #2a3e59;
`
