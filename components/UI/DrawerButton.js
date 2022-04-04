import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";
const DrawerButton = ({ iconName, text, onPress }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Ionicons name={iconName} size={20} color='#888' style={{paddingRight: 10}}/>
            <Text>{text}</Text>
            
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    buttonContainer: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
});
export default DrawerButton;