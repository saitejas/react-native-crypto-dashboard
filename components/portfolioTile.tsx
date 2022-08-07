import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function PortfolioTile({token}: any) {
    return (
        <View style={styles.container}>
            <View style={styles.tokenInfo}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: token.logo_url}}></Image>
                </View>
                <View>
                    <Text style={styles.tokenName}>{token.name}</Text>
                    <Text style={styles.tokenSymbol}>{token.symbol}</Text>
                </View>
            </View>
            <View style={styles.tokenValueContainer}>
                <Text style={styles.tokenPrice}>${token.total_value}</Text>
                <Text style={styles.tokenTotalValue}>{token.price.toFixed(4)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "12px",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1
    },

    tokenInfo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start"
    },

    imageContainer: {
        marginRight: "18px",
        marginBottom: "12px"
    },

    image: {
        height: "50px",
        width: "50px",
        borderRadius: 50
    },

    tokenValueContainer: {
        paddingRight: "18px",
        textAlign: "right"
    },

    tokenName: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 3,
        color: "#666666"
    },

    tokenSymbol: {
        fontSize: 11,
        color: "#b1b1b1",
        fontWeight: "bold",
    },

    tokenPrice: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 2,
        color: "#666666"
    },

    tokenTotalValue: {
        textAlign: "right",
        fontSize: 13,
        color: "#b1b1b1",
        fontWeight: "bold"
    }
})