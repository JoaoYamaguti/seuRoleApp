import { ResponsiveSize } from "../../utilities/dynamicFont.js";
import styled from 'styled-components/native';
import { colors } from "../../utilities/colors.js";


export const ViewQuestions = styled.View`
    height: 100%;
    
    padding: 0px 15px 0px 15px;
    
    background-color: white;
`

export const ViewLogo = styled.View`
    flex-flow: row nowrap;
    justify-content: flex-start;
    gap: 20px;

    padding: 2%;

    background-color: ${colors.darkblue};
`

export const BackHome = styled.Pressable`

border-radius: 14px;

background-color: #2A3E59;

`
export const TextLogo = styled.Text`

    font-size: ${ResponsiveSize(30)}px;
    color: white;

`
export const ViewArticle = styled.View`
    
    flex-flow: row nowrap;
    justify-content: flex-start;
    
    margin-top: 8%;
`

export const TextQuestions = styled.Text`
    font-size: ${ResponsiveSize(20)}px;
    text-align: justify;
`

export const Questionary = styled.View`
`

export const ContainerQuestion = styled.View`
    border-radius: 14px;
    border: solid 2px black;
    padding: 0px 15px 15px 15px;

    height: 75%;
    /* flex:2; */
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: white;
`
export const ViewQuestion = styled.View`
    width: 100%;
    margin-top: 15px;
    margin-bottom: 25px;

    flex: 3;
    gap: 20px;
`
export const Question = styled.Text`
    font-size: ${ResponsiveSize(20)}px;
    text-align: justify;

`

export const Line = styled.View`

    height: 1px;
    width: 100%;

    background-color: #2A3E59;
`

export const ViewButtons = styled.View`
    height: 6%;

    flex: 1;
    flex-flow: row nowrap;
    justify-content: flex-end;
    gap: 2px;
    
`
export const PressedNext = styled.Pressable`
    width: 100%;

    padding: 10px 20px;
    border-radius: 14px;
    
    align-items: center;
    justify-content: center;

    background-color: #2A3E59;
`
export const PressedBack = styled.Pressable`
    width: 30%;

    border-radius: 14px;

    align-items: center;
    justify-content: center;
    
    background-color: ${colors.darkblue};
`
export const PressedText = styled.Text`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    color: white;
`
