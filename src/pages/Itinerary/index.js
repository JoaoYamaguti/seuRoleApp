/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { ScrollItinerary, TextIntroduction, ViewEstablishments } from './style'

import API from '../../services/api'
import data from '../../data/companies'

import { FrameTopBar } from '../../components/FrameTopBar'
import { LogoBar } from '../../components/LogoBar'
import { Establishment } from '../../components/Establishment'

import { colors } from '../../utilities/colors'

export function Itinerary(props) {
  const { answer } = props.route.params
  console.log(answer)

  const [establishments, setEstablishments] = useState([])
  const [itinerary, setItinerary] = useState(<TextIntroduction>Carregando...</TextIntroduction>)

  async function getAllEstablishments() {
    const response = await API.get('/establishment/findAll')
    setEstablishments(response.data)
    setItinerary(
      <FlatList
        data={response.data}
        // data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Establishment data={item} />}
      ></FlatList>
    )
    console.log(establishments)
  }

  useEffect(() => {
    getAllEstablishments()
  }, [])

  return (
    <>
      <FrameTopBar color={colors.darkblue}></FrameTopBar>

      <LogoBar></LogoBar>

      <TextIntroduction>
        Alguns estabelecimentos para o seu Rolê...
        {answer}
      </TextIntroduction>

        {itinerary}

      <ViewEstablishments></ViewEstablishments>
    </>
  )
}
