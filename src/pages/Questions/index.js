import { React, useState, useEffect, Fragment } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";


import { FrameTopBar } from "../../components/FrameTopBar";
import { Options } from "../../components/RadioButton";

import { ViewQuestions, ViewLogo, PressedNext, PressedText, PressedBack, ViewButtons, TextQuestions, Question, ViewQuestion, ContainerQuestion, TextLogo, BackHome, ViewArticle, Line } from './styled';
import { colors } from "../../utilities/colors";

import Icon from "react-native-vector-icons/Feather";

export function Questions() {
  const [questions, setQuestions] = useState([
    {
      key : 1,
      category: 'outdoor',
      question : 'Você prefere atividades:',
      options: ['Ar Livre', 'Indoor'],
      answer : 'fdasdf',
    },
    {
      key : 2,
      category: 'calmdown',
      question : 'Atividades tranquilas ou agitadas?',
      options: ['Ar ', 'Indgfgfdgdhdfoor'],
      answer : '',
    },
    {
      key : 3,
      category: 'nature',
      question: 'Atividades em meio à natureza ou urbana?',
      options: ['Natureba', 'Rua'],
      answer : '',
    },
    { 
      key : 4,
      category: 'groupSize', 
      question: 'Atividades individuais ou em grupo?',
      options: ['Ar Livre', 'Indoor'],
      answer : '', 
    },
    {
      key : 5,
      category: 'timeOfDay',
      question: 'Atividades diurnas ou noturnas?',
      options: ['Ar Livsdfdsfre', 'Inggsdoor'],
      answer : '',
      },
      {
      key : 6,
      category: 'crowdedness',
      question: 'Quantidades de pessoas?',
      options: ['Muitas pessoas', 'Poucas Pessoas'],
      answer : ''
    },
    {
      key : 7,
      category: 'budget',
      question: 'Quanto você pretende gastar?',
      options: ['Alto Orçamento', 'Baixo Orçamento'],
      answer : ''
    },
  ])

  const navigator = useNavigation()

  const [counter, setCounter] = useState(0)

  return (
    <>
      <FrameTopBar color={colors.darkblue}></FrameTopBar>
      <ViewLogo>
        <BackHome onPress={() => navigator.navigate('Home')}>
          <PressedText><Icon name="chevron-left" size={40}/></PressedText>
        </BackHome>
        <TextLogo>
          Seu Rolê
        </TextLogo>
      </ViewLogo>

      <ViewQuestions>

        <ViewArticle>
          <TextQuestions>
            Hora de responder algumas perguntas para criarmos um roteiro para seu próximo rolê.
          </TextQuestions>
        </ViewArticle>

        <ContainerQuestion
          style={{
            shadowOpacity: 0.75,
            shadowRadius: 5,
            shadowColor: 'black',
            shadowOffset: { height: 0, width: 0 },
        }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>

            {questions.map(item => {
              
              return (
                <Fragment key={item.key}>
                  <ViewQuestion  >
                    <Question>{item.question}</Question>
                    <Options op1={item.options[0]} op2={item.options[1]}/>
                  </ViewQuestion>
                  {item.key != questions.length ? <Line></Line> : '' }
                </Fragment>
              )
            })}

              <ViewButtons>
                <PressedNext>
                  <PressedText>{counter === questions.length-1 ? 'Finalizar': 'Finalizar' }<Icon name="chevron-right" size={20} /></PressedText>
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