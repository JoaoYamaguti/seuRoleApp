import React from "react";
import { StatusBar, View } from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export function FrameTopBar() {
    return (
        <View style={{
            paddingTop: statusBarHeight,
        }}>
        </View>
    )
}