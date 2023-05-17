import styled from 'styled-components/native';

export const ViewQuestions = styled.View`
    height: 100%;

    padding: 15px;

    justify-content: center;
    align-items: center;

    background-color: #54728C;
`
export const TextQuestions = styled.Text`
    font-size: 14px;
`


export const Questionary = styled.View`

`

export const ViewQuestion = styled.View`
    width: 100%;

    padding: 20px 30px;
    border-radius: 14px;
    
    flex: 4;
    gap: 20px;

    background-color: white;
`
export const Question = styled.Text`
    font-size: 20px;

`

export const ViewButtons = styled.View`

    flex: 1;
    flex-flow: row nowrap;
    gap: 2px;
    
`
export const PressedNext = styled.Pressable`
    width: 80%;
    height: 100%;

    border-radius: 14px;
    
    align-items: center;
    justify-content: center;

    background-color: #2A3E59;
`
export const PressedBack = styled.Pressable`
    width: 20%;

    border-radius: 14px;

    align-items: center;
    justify-content: center;
    
    background-color: #2A3E59;
`
export const PressedText = styled.Text`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 25px;
    color: white;
`
