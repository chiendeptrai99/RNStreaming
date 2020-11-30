import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import HeaderBar from './Component/HeaderBar'
import Tabs from '../navigation/Tabs'
import Search from './Component/Search'
const OrderList = () => {
    return (
        <SafeAreaView style={styles.constainer}>
            <HeaderBar title='Orders' />
            <Search />
            <Tabs />
            <Text>Order List</Text>
        </SafeAreaView>
    )
}

export default OrderList

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: '#12141F'
    }
})
