import { React, useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";


import { FrameTopBar } from "../../components/FrameTopBar";
import { Options } from "../../components/RadioButton";

import { ViewLogo, TextHome } from "../Home/styled.js";
import { ViewQuestions, PressedNext, PressedText, PressedBack, ViewButtons, TextQuestions, Question, ViewQuestion } from './styled';

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
    <ViewQuestions>
      <FrameTopBar></FrameTopBar>
      
      <View style={{justifyContent: 'flex-start'}}>
        <PressedBack onPress={() => navigator.navigate('Home')}>
          <PressedText><Icon name="chevron-left" size={20}/></PressedText>
        </PressedBack>
      </View>

      <ViewLogo>
        <TextHome>
          Seu Rolê
        </TextHome>
        <TextQuestions>
          Hora de responder algumas perguntas para criarmos um roteiro para seu próximo rolê.
        </TextQuestions>
      </ViewLogo>

      <View style={{flex:2, justifyContent:'space-between', alignItems:'center', width:'100%', gap:20}}>
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
            <PressedText><Icon name="chevron-left" size={20}/></PressedText>
          </PressedBack>
          <PressedNext 
            onPress={() => {
              if (counter < questions.length - 1) {
                setCounter(Number(counter + 1))
              } else {
              
              }
          }}>
            <PressedText>{counter === questions.length-1 ? 'Finalizar': 'Next' }<Icon name="chevron-right" size={30}/></PressedText>
          </PressedNext>
        </ViewButtons>
      </View>
    </ViewQuestions>
  )
}

