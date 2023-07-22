import styled from 'styled-components/native'
import { colors } from '../../utilities/colors'

import { ResponsiveSize } from '../../utilities/dynamicFont'

export const ViewEtinerary = styled.View`

`

export const ScrollItinerary = styled.ScrollView`
  margin: 15px;
`

export const TextIntroduction = styled.Text`
  padding:  15px 15px;

  font-size: ${ResponsiveSize(22)}px;
  text-align: justify;
`

export const TextItinerary = styled.Text`
  padding: 0 15px;

  font-size: ${ResponsiveSize(20)}px;
`

export const ViewEstablishments = styled.View`
  border: solid 1px black;
  border-radius: 14px;
`
