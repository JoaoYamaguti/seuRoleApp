import React from "react";
import { View, Text, StatusBar, StyleSheet, Button, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

import { FrameTopBar } from "../../components/FrameTopBar";
import { PressStart, TextHome, ViewHome, ViewLogo, ViewStart} from "./styled";
import { PressedText } from "../Questions/styled";

export function Home() {
    const navigation = useNavigation()
    return (
            <ViewHome >
                <FrameTopBar></FrameTopBar>

                {/* <Questions /> */}
                
                    <ViewLogo>
                        <TextHome>
                            Seu Role
                        </TextHome>
                        <Text>
                            Duvidas na hora de escolher um lugar para sair?
                        </Text>
                        <Text>
                            Nós de ajudamos
                        </Text>
                    </ViewLogo>

                    <PressStart onPress={() => navigation.navigate('Questions')}>
                        <PressedText>Vamos Começar <Icon name="chevron-right" size={15} /></PressedText>
                    </PressStart>
            </ViewHome>
    )
}
  