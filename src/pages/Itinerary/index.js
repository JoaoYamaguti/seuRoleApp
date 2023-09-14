/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
/* eslint-disable multiline-ternary */
import React, { useEffect, useState, useContext } from 'react'
import { FlatList, Text } from 'react-native'
import { ViewEtinerary, TextIntroduction, ButtonSugest } from './style'

import { EstablishmentsContext } from '../../contexts/establishments'

import { FrameTopBar } from '../../components/FrameTopBar'
import { LogoBar } from '../../components/LogoBar'
import { Establishment } from '../../components/Establishment'

import { colors } from '../../utilities/colors'

export function Itinerary(props) {
  const { answer } = props.route.params
  const { establishments } = useContext(EstablishmentsContext)

  const [estabsToRender, setEstabsToRender] = useState([])
  const [quantyToRender, setQuantyToRender] = useState(0)
  const [helper, setHelper] = useState([])

  function rankingEstablishments() {
    establishments.forEach((e) => {
      const categoryList = []
      e.categories.forEach((cats) => {
        categoryList.push(cats.options)
      })
      const recomendation = categoryList.filter((cat) =>
        answer.includes(cat)
      ).length
      const newEstab = { ...e, recomendation }
      const novoArray = [...helper, newEstab]
      setHelper(novoArray)
    //   e.recomendation = recomendation
    //   establishments.sort((a, b) => b.recomendation - a.recomendation)
    })
    helper.sort((a, b) => b.recomendation - a.recomendation)
    setQuantyToRender(3)
  }

  useEffect(() => {
    establishments && rankingEstablishments()
  }, [establishments])
  useEffect(() => {
    establishments && setEstabsToRender(establishments.slice(0, quantyToRender))
  }, [quantyToRender])

  return (
    <ViewEtinerary>
      <FrameTopBar />
      <LogoBar />
      <TextIntroduction>Que tal essas opções?</TextIntroduction>

      {helper.length > 0 ? (
        <FlatList
          data={estabsToRender}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Establishment data={item} />}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <TextIntroduction>Carregando...</TextIntroduction>
      )}

      {console.log(helper)}
      {quantyToRender < helper.length ? (
        <ButtonSugest onPress={() => setQuantyToRender(quantyToRender + 1)}>
          <Text>Sugerir Mais</Text>
        </ButtonSugest>
      ) : null}
    </ViewEtinerary>
  )
}
