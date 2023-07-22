import { ResponsiveSize } from '../../utilities/dynamicFont.js'
import styled from 'styled-components/native'
import { colors } from '../../utilities/colors.js'

export const ViewQuestionary = styled.View`
  width: 100%;
  flex: 1;
  gap: 0;

  flex-flow: column nowrap;
  justify-content: space-between;
`

export const TextQuestions = styled.Text`
  margin: 5% 3% 5% 3%;
  font-size: ${ResponsiveSize(19)}px;
  text-align: justify;
`

export const ScrollQuestionary = styled.ScrollView`
  margin: 0 3% 3% 3%;
  border: 0;
  padding: 0;
`

export const PressedNext = styled.Pressable`
  width: 100%;

  padding: 10px 20px;
  border-radius: 14px;

  align-items: center;
  justify-content: center;

  background-color: ${colors.darkblue};
`

export const PressedText = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  color: white;
`
