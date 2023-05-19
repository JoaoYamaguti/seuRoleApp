import React from "react";
import { StatusBar, View } from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 64

export function FrameTopBar({color}) {
    return (
        <View style={{
            paddingTop: statusBarHeight,
            backgroundColor: color,
        }}>
        </View>
    )
}