import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ViewLogo, BackHome, PressedText, TextLogo } from "./style";

import Icon from "react-native-vector-icons/Feather";

export function LogoBar() {

    const navigator = useNavigation()

    return (
        <ViewLogo>
            <BackHome onPress={() => navigator.navigate('Home')}>
                <PressedText><Icon name="chevron-left" size={40}/></PressedText>
            </BackHome>
            <TextLogo>
                Seu Rolê
            </TextLogo>
        </ViewLogo>
    ) 
}