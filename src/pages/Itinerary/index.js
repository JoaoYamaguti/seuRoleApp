/* eslint-disable no-unused-expressions */
/* eslint-disable multiline-ternary */
import { React, useState } from 'react'
import { companies } from '../../data/companies'
import Star from 'react-native-vector-icons/FontAwesome5'
import {
  PressableMoreDetails,
  ScrollItinerary,
  TextIntroduction,
  TextMoreDetails,
  TextStablishment,
  ViewStablishments,
  ViewStablishment,
  Line,
  TextDetails,
  ViewMoreDetails
} from './style'

import { FrameTopBar } from '../../components/FrameTopBar'
import { LogoBar } from '../../components/LogoBar'
import { HorizontalScroll } from '../../components/HorizontalScroll'

import { colors } from '../../utilities/colors'

export function Itinerary() {
  const stablishment = companies
  console.log(stablishment)

  return (
    <>
      <FrameTopBar color={colors.darkblue}></FrameTopBar>

      <LogoBar></LogoBar>

      <ScrollItinerary showsVerticalScrollIndicator={false}>
        <TextIntroduction>
          Alguns estabelecimentos para o seu Rolê...
        </TextIntroduction>

        {/* <TextItinerary>Primerio Vamos </TextItinerary> */}

        <ViewStablishments>
          {stablishment.map((item) => {
            const [showDetails, setShowDetails] = useState(false)
            return (
              <ViewStablishment key={item.key}>
                <TextStablishment>{item.name}</TextStablishment>
                <TextStablishment>
                  <Star name='star'></Star>
                  <Star name='star-half-alt'></Star>
                </TextStablishment>

                <HorizontalScroll
                  key={item.key}
                  nofimg={item.imgs}
                ></HorizontalScroll>

                <PressableMoreDetails
                  onPress={() => setShowDetails(!showDetails)}
                >
                  <TextMoreDetails>Mais Detalhes</TextMoreDetails>
                </PressableMoreDetails>
                {showDetails ? (
                  <ViewMoreDetails>
                    <TextDetails>Custo: {item.custo}</TextDetails>
                    <TextDetails>Address: {item.address}</TextDetails>
                    <TextDetails>Hours: {item.hours}</TextDetails>
                  </ViewMoreDetails>
                ) : null}
                {stablishment.indexOf(item) < stablishment.length - 1 ? (
                  <Line></Line>
                ) : null}
              </ViewStablishment>
            )
          })}
        </ViewStablishments>
      </ScrollItinerary>
    </>
  )
}
