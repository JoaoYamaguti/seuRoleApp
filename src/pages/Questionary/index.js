/* eslint-disable no-unused-expressions */
/* eslint-disable multiline-ternary */
import { React, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { questions } from '../../data/questions'

import { FrameTopBar } from '../../components/FrameTopBar'
import { Question } from '../../components/Question'
import { TypesforActions } from '../../components/TypesforActions'

import { LogoBar } from '../../components/LogoBar'

import {
  TouchButtons,
  PressedText,
  TextQuestions,
  ViewQuestionary,
  ScrollQuestionary,
  ViewTouch
} from './styled'

import { colors } from '../../utilities/colors'

import FeatherIcon from 'react-native-vector-icons/Feather'
import { ResponsiveSize } from '../../utilities/dynamicFont'

const answers = Array(8).fill('')

export function Questionary() {
  const [roteiro, setRoteiro] = useState(false)
  const [action, setAction] = useState('')

  const navigator = useNavigation()

  const updateAsk = (data) => {
    if (data !== null) {
      const index = data.key - 1
      index < 7 ? (questions[index].answer = data.answer) : null
      answers[index] = data.answer
      if (data.category === 'action') {
        setAction(data.answer)
      }
    }
    console.log(answers)
  }

  useEffect(() => {
    !roteiro ? answers.splice(7, 1) : null
  }, [roteiro])

  return (
    <>
      <FrameTopBar color={colors.darkblue}></FrameTopBar>
      <LogoBar></LogoBar>

      <ViewQuestionary>
        <TextQuestions>
          Hora de responder algumas perguntas para criarmos um roteiro para seu
          próximo rolê.
        </TextQuestions>

        {!roteiro ? (
          <ScrollQuestionary
            showsVerticalScrollIndicator={false}
            data={questions}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <Question ask={item} handleAsks={updateAsk} />
            )}
          />
        ) : (
          <TypesforActions action={action} handleAsks={updateAsk} />
        )}
        <ViewTouch>
          <TouchButtons
            onPress={() => {
              action || action === 'indiferente'
                ? setRoteiro(!roteiro)
                : alert('Preencha o que você gostaria de fazer no seu rolê...')
            }}
          >
            {!roteiro ? (
              <PressedText>Me Surpreenda!</PressedText>
            ) : (
              <>
                <PressedText>
                  <FeatherIcon name='chevrons-left' size={ResponsiveSize(22)} />
                </PressedText>
                <PressedText>Voltar</PressedText>
              </>
            )}
          </TouchButtons>
          <TouchButtons
            onPress={() =>
              navigator.navigate('Itinerary', {
                answer: answers
              })
            }
          >
            <PressedText>Finalizar </PressedText>
            <PressedText>
              <FeatherIcon name='chevrons-right' size={ResponsiveSize(22)} />
            </PressedText>
          </TouchButtons>
        </ViewTouch>
      </ViewQuestionary>
    </>
  )
}
