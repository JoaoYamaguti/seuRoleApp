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
  TextDetailLabel
} from './style'

export function Establishment({ data }) {
  console.log(data)
  const [showDetails, setShowDetails] = useState(false)

  return (
    <ViewEstablishment>
      <Line />

      <TextEstablishment>{data.name}</TextEstablishment>

      {/* <TextEstablishment>
        <Star name='star'></Star>
        <Star name='star-half-alt'></Star>
      </TextEstablishment> */}
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
            <ViewDetailValue>
              <TextDetail>{data.address}</TextDetail>
            </ViewDetailValue>
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
