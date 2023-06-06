import { styled } from "styled-components";

import { colors } from "../../utilities/colors";
import { ResponsiveSize } from "../../utilities/dynamicFont";

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

export const PressedText = styled.Text`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    color: white;
`