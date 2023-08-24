import styled from 'styled-components'

import { ResponsiveSize } from '../../utilities/dynamicFont'
import { colors } from '../../utilities/colors'

export const ViewEstablishment = styled.View`
  padding: 15px;

  border-bottom: solid 1px black;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: space-evenly;
  gap: 10px;
`

export const Line = styled.View`
  height: 1px;
  width: 100%;

  margin: auto;

  background-color: #2a3e59;
`

export const TextEstablishment = styled.Text`
  font-size: ${ResponsiveSize(18)}px;
  text-transform: capitalize;
`

export const ViewStars = styled.View`
  display: flex;
  flex-flow: row;
`

export const ScrollImgs = styled.ScrollView`
  margin: 0 -15px;

  height: 250px;

  font-size: larger;
`

export const ImageEstablishment = styled.Image`
  width: 400px;
  height: 250px;
  /* border: solid 1px ${colors.lightblue}; */
`

export const PressableMoreDetails = styled.Pressable`
  border-radius: 14px;
  justify-content: center;
  align-items: center;
`
export const TextMoreDetails = styled.Text`
  color: ${colors.darkblue};
  text-decoration: underline;
  font-size: ${ResponsiveSize(15)}px;
`
export const ViewMoreDetails = styled.View`
  flex-flow: column nowrap;
  align-items: stretch;
`
export const TextDetailLabel = styled.Text`
  flex: 1;
  width: 100px;
  overflow: scroll;
`
export const TextDetail = styled.Text`
  flex: 3;
  text-transform: none;
  text-align: justify;
`
export const ViewDetail = styled.View`
  font-size: ${ResponsiveSize(15)}px;
  flex-flow: row;
  justify-content: space-between;
  text-transform: capitalize;
`
export const ViewDetailValue = styled.View`
  flex: 3;
`
