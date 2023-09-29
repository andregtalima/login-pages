import React from "react";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import { Text, StyleSheet } from "react-native";

export default function Font({ children, style }) {
    let fontsLoaded = useFonts({
        'Inter': Inter_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }
    return(
        <Text style={[style, styles.font]}>{ children }</Text>
    );
}

const styles = StyleSheet.create({
    font: {
        fontFamily: 'Inter'
    }
})