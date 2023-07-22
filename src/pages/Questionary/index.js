import { React, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { questions } from '../../data/questions'

import { FrameTopBar } from '../../components/FrameTopBar'
import { Question } from '../../components/Question'

import { LogoBar } from '../../components/LogoBar'

import {
  PressedNext,
  PressedText,
  TextQuestions,
  ViewQuestionary,
  ScrollQuestionary
} from './styled'

import { colors } from '../../utilities/colors'

import Icon from 'react-native-vector-icons/Feather'

export function Questionary() {
  const asks = questions

  const navigator = useNavigation()

  const [answerOfAsk, setAnswerOfAsk] = useState('')

  const updateAsk = (data) => {
    setAnswerOfAsk(data)
  }

  let answers = []
  useEffect(() => {
    if (answerOfAsk !== null) {
      const index = answerOfAsk.key - 1
      asks[index] = answerOfAsk
      answers = []
      asks.forEach((e) => answers.push(e.answer))
    }
  }, [answerOfAsk])

  return (
    <ViewQuestionary>
      <FrameTopBar color={colors.darkblue}></FrameTopBar>
      <LogoBar></LogoBar>

      <TextQuestions>
        Hora de responder algumas perguntas para criarmos um roteiro para seu
        próximo rolê.
      </TextQuestions>

      <ScrollQuestionary showsVerticalScrollIndicator={false}>

        {asks.map((item) => {
          return (
            <Question
              key={item.key}
              ask={item}
              handleAsks={updateAsk}
            ></Question>
          )
        })}

        <PressedNext
          onPress={() =>
            navigator.navigate('Itinerary', {
              answer: answers
            })
          }
        >
          <PressedText>
            Finalizar
            <Icon name='chevron-right' size={20} />
          </PressedText>
        </PressedNext>
      </ScrollQuestionary>
    </ViewQuestionary>
  )
}
