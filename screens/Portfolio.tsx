import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, StyleSheet, Pressable, SafeAreaView, ScrollView } from "react-native";
import { Checkbox } from 'react-native-paper';
import { getData } from "../services/api--service";
import PortfolioTile from "../components/portfolioTile";

function loader() {
    return (
        <View>
            <Text>Loading...</Text>
        </View>
    )
}

function SummaryComponent(walletData: any) {

    let summary: any;
    let total = 0;
    walletData.record.chain_portfolios.forEach((portfolio: any) => {
        total += +(portfolio.total_value);
    });
    summary = total.toString();

    return (
        <View>
            <ImageBackground style={styles.backgroundImage} source={require('../assets/images/wallet_svg_2.svg')}>
                <Text style={styles.totalBalanceText}>Total Balance: </Text>
                <Text style={styles.summary}>${summary}</Text>
                <Pressable style={styles.loadWalletButton}>
                    <Text>Load Wallet</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

const RenderTokenDetails = ({walletData}: any) => {
    let tokens: any;
    tokens = [];
    console.log('Inside render token : ', walletData);
    walletData.record.chain_portfolios.forEach((portfolio: any) => {
        portfolio.token_holdings.forEach((token: any) => {
            tokens.push(token);
        })
    })

    return (
        tokens.map((token: any, index: any) => {
            return (
                <View key={index}>
                    <PortfolioTile token={token} />
                </View>
            )
        })
    )
}

const LastUpdated = ({walletData}: any) => {

    const [checked, setChecked] = React.useState(true);

    return (
        <View style={styles.lastUpdatedContainer}>
            <View style={styles.lastUpdatedSection}>
                <Text>Last Updated: 4 min ago</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                    color={'black'}
                />   
                <Text>Only verified coins</Text>
             </View>
        </View>
        
    )
}

export default function Portfolio() {

    const [walletData, setWalletData] = useState([]);

    const [loading, setDataLoading] = useState(true);

    useEffect(() => {
        getData().then(function(response: any) {
            console.log('response : ', response.data);
            setWalletData(response.data);
            setDataLoading(false);
        })
    }, [])


    return (
        loading ? <View>{loader()}</View> :
        <View>
            <View>
                {SummaryComponent(walletData)}
            </View>
            <View>
                <LastUpdated walletData={walletData} />
            </View>
            <SafeAreaView>
                    <ScrollView style={styles.tokensContainer}>
                        <RenderTokenDetails walletData={walletData} />
                    </ScrollView>
            </SafeAreaView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        height: '190px',
        width: '100%',
        resizeMode: 'stretch'
    },
    loadWalletButton: {
        width: "36%",
        padding: "11px",
        backgroundColor: "#fede58",
        borderColor: "transparent",
        borderRadius: 20,
        fontWeight: "bold",
        color: "#5a5645",
        fontSize: 16,
        textAlign: "center",
        marginLeft: "6%",
        bottom: "26px",
        position: "absolute"
    },

    totalBalanceText: {
        position: "absolute",
        marginLeft: "8%",
        bottom: "110px"
    },

    summary: {
        marginLeft: "8%",
        bottom: "72px",
        position: "absolute",
        fontSize: 33,
        fontWeight: "bold",
    },

    lastUpdatedContainer: {
        paddingLeft: "12px",
        paddingTop: "12px",
        paddingBottom: "12px",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopColor: "lightgrey",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    lastUpdatedSection: {
        paddingLeft: "8px"
    },

    checkboxContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingRight: "16px"
    },
    checkbox: {
        alignSelf: "center",
    },
    backgroundColorWhite: {
        backgroundColor: "white"
    },
    tokensContainer: {
        backgroundColor: "white",
        padding: "14px", 
        height: "69vh"   
    }
})