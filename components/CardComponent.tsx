import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function CardComponent(props) {
    return(
        <View style={styles.card}>
            <Text style={styles.text}>This is a card </Text>
            <View style={StyleSheet.cardComponent}>
            { props.children }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 250,
        height: 250,
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
        boarderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
        },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20
        },
    test: {
        position: "absolute",
        width: 250,
        height: 30,
        bottom:0,
        padding: 5,
        backgroundColor: "rgba(0,0,0, 0.3)",
        borderBottomLeftRadius : 10,
        borderBottomRightRadius: 10
        }
    })