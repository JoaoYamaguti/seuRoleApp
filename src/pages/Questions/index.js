import { React, useState } from "react";
import { View, Text } from "react-native";

import { FrameTopBar } from "../../components/FrameTopBar";
import { ViewLogo, TextHome } from "../Home/styled.js";
import { Options } from "../../components/RadioButton";
import { ViewQuestions, PressedNext, PressedText, PressedBack, ViewButtons, TextQuestions, Question } from './styled';

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
      question : 'Você prefere atividades tranquilas ou agitadas?',
      answer : '',
    },
    {
      key : 3,
      category: 'nature',
      question: 'Prefere atividades em meio à natureza ou urbana?',
      answer : '',
    },
    { 
      key : 4,
      category: 'groupSize', 
      question: 'Prefere atividades individuais ou em grupo?',
      answer : '', 
    },
    {
      key : 5,
      category: 'timeOfDay',
      question: 'Prefere atividades diurnas ou noturnas?',
      answer : '',
      },
      {
      key : 6,
      category: 'crowdedness',
      question: 'Prefere atividades com muitas ou poucas pessoas?',
      answer : ''
    },
    {
      key : 7,
      category: 'budget',
      question: 'Prefere atividades com alto ou baixo orçamento?',
      answer : ''
    },
  ])

  const [counter, setCounter] = useState(0)

  return (
    <ViewQuestions>
      <FrameTopBar></FrameTopBar>

      <ViewLogo>
        <TextHome>
            Seu Role
        </TextHome>
        <TextQuestions>
            Hora de responder algumas perguntas para criarmos um roteiro para seu próximo rolê.
        </TextQuestions>
      </ViewLogo>

      <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
        <View key={questions[counter].key}>
          <Question>{questions[counter].question}</Question>
          <Options op1={questions[counter].options[0]} op2={questions[counter].options[1]}/>
        </View>

        <ViewButtons>
          <PressedBack >
            <PressedText 
            // onPress={setCounter(counter + 1)}
            ><Icon name="chevron-left" size={20}/></PressedText>
          </PressedBack>
          <PressedNext>
            <PressedText 
            // onPress={setCounter(counter + 1)}
            >Next<Icon name="chevron-right" size={12}/></PressedText>
          </PressedNext>
        </ViewButtons>
      </View>
    </ViewQuestions>
  )
}