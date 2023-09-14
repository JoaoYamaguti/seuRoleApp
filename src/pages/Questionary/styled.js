import { ResponsiveSize } from '../../utilities/dynamicFont.js'
import styled from 'styled-components/native'
import { colors } from '../../utilities/colors.js'

export const ViewQuestionary = styled.View`
  width: 100%;
  padding: 2%;
  flex: 1;
  gap: 5px;

  flex-flow: column nowrap;
  justify-content: space-between;

  background-color: ${colors.fundo};
`

export const TextQuestions = styled.Text`
  font-size: ${ResponsiveSize(19)}px;
  text-align: justify;
  color: ${colors.font};
`

export const ScrollQuestionary = styled.FlatList``

export const ViewTouch = styled.View`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`

export const TouchButtons = styled.TouchableOpacity`
  flex: 1;

  padding: 10px 20px;
  border-radius: 14px;

  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${colors.buttonFinalizar};
  color: white;
`

export const PressedText = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  color: white;
`
