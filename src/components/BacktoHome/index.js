import { React } from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ChevronLeft from "../Icons";

export function BacktoHome() {
    
    return (
        <Pressable>
            <Text><ChevronLeft size={20}/></Text>
        </Pressable>
    )
}
