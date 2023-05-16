import styled from 'styled-components/native';

export const ViewQuestions = styled.View`
    height: 100%;

    padding: 15px;

    justify-content: center;
    align-items: center;

    background-color: #D9AB91;
`
export const TextQuestions = styled.Text`
    font-size: 14px;
`


export const Questionary = styled.View`

`

export const Question = styled.Text`

`

export const ViewButtons = styled.View`
    flex-flow: row nowrap;
    gap: 2px;
    
`
export const PressedNext = styled.Pressable`
    width: 40%;
    background-color: burlywood;
    padding: 10px 14px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
`
export const PressedBack = styled.Pressable`
    width: 20%;
    background-color: burlywood;
    padding: 10px 14px;
    align-items: center;
    justify-content: center;
    
    border-radius: 4px;
`
export const PressedText = styled.Text`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
`
