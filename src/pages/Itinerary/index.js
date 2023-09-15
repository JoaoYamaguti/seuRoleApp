/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
/* eslint-disable multiline-ternary */
import React, { useEffect, useState, useContext } from 'react'
import { Text } from 'react-native'
import {
  ViewEtinerary,
  TextIntroduction,
  ListEstablishments,
  ButtonSugest
} from './style'

import { EstablishmentsContext } from '../../contexts/establishments'

import { FrameTopBar } from '../../components/FrameTopBar'
import { LogoBar } from '../../components/LogoBar'
import { Establishment } from '../../components/Establishment'

import { colors } from '../../utilities/colors'

export function Itinerary(props) {
  const { answer } = props.route.params
  const { establishments } = useContext(EstablishmentsContext)

  const [helper, setHelper] = useState([])
  const [estabsToRender, setEstabsToRender] = useState([])
  const [quantyToRender, setQuantyToRender] = useState(0)

  function rankingEstablishments() {
    establishments.forEach((e) => {
      const categoryList = []
      e.categories.forEach((cats) => {
        categoryList.push(cats.options)
      })
      const recomendation = categoryList.filter((cat) =>
        answer.includes(cat)
      ).length
      e.recomendation = recomendation
      const newEstab = { ...e, recomendation }
      const novoArray = [...helper, newEstab]
      setHelper(novoArray)
      //   setHelper((prevState) => [...prevState, newEstab])
    })
    establishments.sort((a, b) => b.recomendation - a.recomendation)
    helper.sort((a, b) => b.recomendation - a.recomendation)
    setQuantyToRender(3)
  }

  useEffect(() => {
    establishments && rankingEstablishments()
  }, [establishments])
  useEffect(() => {
    setEstabsToRender(establishments.slice(0, quantyToRender))
    console.log(quantyToRender)
    console.log('cheguei')
  }, [quantyToRender])

  return (
    <ViewEtinerary>
      <FrameTopBar />
      <LogoBar />
      <TextIntroduction>Que tal essas opções?</TextIntroduction>
      {console.log(estabsToRender)}
      {establishments.length > 0 ? (
        <ListEstablishments
          data={estabsToRender}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Establishment data={item} />}
        />
      ) : (
        <TextIntroduction>Carregando...</TextIntroduction>
      )}

      {quantyToRender < establishments.length ? (
        <ButtonSugest onPress={() => setQuantyToRender(quantyToRender + 1)}>
          <Text>Sugerir Mais</Text>
        </ButtonSugest>
      ) : null}
    </ViewEtinerary>
  )
}
