import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Font from "../../components/Font";


const PageOne = () => {
    return (
        <View>
            <Font style={styles.title}>Welcome To Shh!</Font>
            <Font style={styles.textTitle}>A Hub Where Whispers Echo Loudest</Font>
            
                <TouchableOpacity style={styles.button}>
                    <Font style={styles.textButton}>Sign up</Font>
                </TouchableOpacity>
                <View style={styles.buttonContainer}>

                    <Font style={styles.text}>Already have an account?</Font>
                    <TouchableOpacity>
                        <Font style={styles.textLogin}>Login</Font>
                    </TouchableOpacity>

                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: "bold",
        width: "60%",
        color: "white",
        marginTop: 12,
        marginLeft: 20
    },
    textTitle: {
        fontSize: 20,
        fontWeight: "bold",
        width: "80%",
        marginTop: 10,
        marginLeft: 20,
        marginBottom: 320
    },
    button: {
        backgroundColor: "#000000",
        alignItems: "center",
        marginHorizontal: 60,
        padding: 20,
        borderRadius: 24
    },
    textButton: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        marginTop: 8
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
    },
    textLogin: {
        fontWeight: "bold",
        fontSize: 15
    }
})

export default PageOne;
