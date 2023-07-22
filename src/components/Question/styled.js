import styled from 'styled-components'
import { ResponsiveSize } from '../../utilities/dynamicFont'
import { colors } from '../../utilities/colors'

export const ViewQuestion = styled.View`
  margin-bottom: 5%;
  padding-top: 8px;
  gap: 10px;
`
export const TextQuestion = styled.Text`
  font-size: ${ResponsiveSize(20)}px;
  text-align: justify;
  text-transform: none;
`

export const TouchRadio = styled.TouchableOpacity`
    width: 50%;
`
export const RadioContent = styled.View`
  padding-left: 5px;
  flex-flow: row;
  align-items: center;
  gap: 20px;

  font-size: ${ResponsiveSize(18)}px;
`
export const Radio = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  border: 3px solid ${colors.darkblue};
  justify-content: center;
  align-items: center;
`
export const RadioFill = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 100px;

  background-color: ${colors.darkblue};
`
export const TextRadio = styled.Text`
    font-size: ${ResponsiveSize(16)}px;
    text-transform: capitalize;
`
