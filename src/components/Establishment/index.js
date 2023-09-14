/* eslint-disable multiline-ternary */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {
  ViewEstablishment,
  Line,
  TextEstablishment,
  ScrollImgs,
  ImageEstablishment,
  PressableMoreDetails,
  TextMoreDetails,
  ViewMoreDetails,
  TextDetail,
  ViewDetail,
  ViewDetailValue,
  TextDetailLabel,
  ViewStars,
  TextColorStars
} from './style'
import FontAwesome5Icon from 'react-native-vector-icons/Fontisto'

export function Establishment({ data }) {
  const listStar = []
  const [showDetails, setShowDetails] = useState(false)

  for (let index = data.rate; index > 0; index--) {
    if (index >= 1) {
      listStar.push(
        <TextColorStars key={index}>
          <FontAwesome5Icon name='star'/>
        </TextColorStars>
      )
    } else {
      listStar.push(
        <TextColorStars key={index}>
          <FontAwesome5Icon name='star-half'/>
        </TextColorStars>
      )
    }
  }

  return (
    <ViewEstablishment>
      <Line />

      <TextEstablishment>{data.name}</TextEstablishment>

      <ViewStars>
        {listStar.map((e) => {
          return e
        })}
      </ViewStars>

      <ScrollImgs horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.images.map(({ path }, index) => {
          return <ImageEstablishment key={index} source={{ uri: path }} />
        })}
      </ScrollImgs>

      <PressableMoreDetails onPress={() => setShowDetails(!showDetails)}>
        <TextMoreDetails>Mais Detalhes</TextMoreDetails>
      </PressableMoreDetails>
      {showDetails ? (
        <ViewMoreDetails>
          <ViewDetail>
            <TextDetailLabel>Descrição:</TextDetailLabel>
            <TextDetail>{data.description}</TextDetail>
          </ViewDetail>
          <ViewDetail>
            <TextDetailLabel>Address:</TextDetailLabel>
            <TextDetail>{data.address}</TextDetail>
          </ViewDetail>
          <ViewDetail>
            <TextDetailLabel>Hours: </TextDetailLabel>
            <ViewDetailValue>
              {data.hours.map((item, index) => (
                <TextDetail key={index}>
                  {item.weekDay}: {item.open} - {item.close}
                </TextDetail>
              ))}
            </ViewDetailValue>
          </ViewDetail>
        </ViewMoreDetails>
      ) : null}
    </ViewEstablishment>
  )
}
