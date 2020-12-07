import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import HeaderBar from './Component/HeaderBar'
import Tabs from '../navigation/Tabs'
const OrderList = () => {
    return (
        <View style={styles.constainer}>
            <HeaderBar title='Orders' />
            <Tabs />
        </View>
    )
}

export default OrderList

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: '#12141F',
        paddingTop: 32
    }
})
