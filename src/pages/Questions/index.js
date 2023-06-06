import { React, Fragment } from 'react'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { questions } from '../../data/questions'

import { FrameTopBar } from '../../components/FrameTopBar'
import { Options } from '../../components/RadioButton'

import { LogoBar } from '../../components/LogoBar'

import {
  ViewQuestions,
  PressedNext,
  PressedText,
  ViewButtons,
  TextQuestions,
  Question,
  ViewQuestion,
  ContainerQuestion,
  ViewArticle,
  Line
} from './styled'
import { colors } from '../../utilities/colors'

import Icon from 'react-native-vector-icons/Feather'

export function Questions () {
  const asks = questions

  const navigator = useNavigation()

  const counter = 0

  return (
    <>
      <FrameTopBar color={colors.darkblue}></FrameTopBar>
      <LogoBar></LogoBar>

      <ViewQuestions>
        <ViewArticle>
          <TextQuestions>
            Hora de responder algumas perguntas para criarmos um roteiro para
            seu próximo rolê.
          </TextQuestions>
        </ViewArticle>

        <ContainerQuestion
          style={{
            shadowOpacity: 0.75,
            shadowRadius: 5,
            shadowColor: 'black',
            shadowOffset: { height: 0, width: 0 }
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {asks.map((item) => {
              return (
                <Fragment key={item.key}>
                  <ViewQuestion>
                    <Question>{item.question}</Question>
                    <Options op1={item.options[0]} op2={item.options[1]} />
                  </ViewQuestion>
                  {item.key !== questions.length ? <Line></Line> : ''}
                </Fragment>
              )
            })}

            <ViewButtons>
              <PressedNext onPress={() => navigator.navigate('Itinerary')}>
                <PressedText>
                  {counter === questions.length - 1 ? 'Finalizar' : 'Finalizar'}
                  <Icon name='chevron-right' size={20} />
                </PressedText>
              </PressedNext>
            </ViewButtons>
          </ScrollView>
        </ContainerQuestion>

        {/* <ContainerQuestion>
          <ViewQuestion key={questions[counter].key} >
            <Question>{questions[counter].question}</Question>
            <Options op1={questions[counter].options[0]} op2={questions[counter].options[1]}/>
            </ViewQuestion>

            <ViewButtons>
              <PressedBack
              onPress={() => {
                if (counter<questions.length && counter>+0) {
                  setCounter(Number(counter - 1))
                } else {

                }
              }}>
                <PressedText><Icon name='chevron-left' size={20}/></PressedText>
              </PressedBack>
              <PressedNext
                onPress={() => {
                  if (counter < questions.length - 1) {
                    setCounter(Number(counter + 1))
                  } else {

                  }
              }}>
                <PressedText>{counter === questions.length-1 ? 'Finalizar': 'Next' }<Icon name="chevron-right" size={30} /></PressedText>
              </PressedNext>
            </ViewButtons>
        </ContainerQuestion> */}
      </ViewQuestions>
    </>
  )
}
