import styled from 'styled-components/native'
import { colors } from '../../utilities/colors'

import { ResponsiveSize } from '../../utilities/dynamicFont'

export const ViewEtinerary = styled.View`
  background-color: ${colors.fundo};
  flex: 1;
`

export const ScrollItinerary = styled.ScrollView`
  margin: 15px;
`

export const TextIntroduction = styled.Text`
  padding: 15px 15px;
  color: white;

  font-size: ${ResponsiveSize(22)}px;
  text-align: center;
`

export const TextItinerary = styled.Text`
  padding: 0 15px;

  font-size: ${ResponsiveSize(20)}px;
`
export const ButtonSugest = styled.TouchableOpacity`
  flex: 1;
  background-color: ${colors.buttonFinalizar};
  width: 150px;
  height: 40px;
  margin-bottom: 15px;
  margin-top: 10px;
  margin: auto;
  text-align: center;
`
