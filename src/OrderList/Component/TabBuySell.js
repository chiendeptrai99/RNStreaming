import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
const TabBuySell = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={styles.btnBuySell}>
                    <Text style={styles.txtBuySell}>Buy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnBuySell, { marginLeft: 4 }]}>
                    <Text style={styles.txtBuySell}>Buy</Text>
                </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 16, color: '#989AA0', }}>Vol</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                <Text style={{ fontSize: 16, paddingLeft: 4, color: '#4CDBEE', }}>Time</Text>
                <Ionicons name={'arrow-up'} size={18} color='green' />
            </View>
        </View>
    )
}

export default TabBuySell

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: '#11141E',
        justifyContent: 'space-between',
        paddingVertical: 8
    },
    btnBuySell: {
        borderWidth: 1,
        borderColor: '#989AA0',
        borderRadius: 5,
        marginLeft: 8,
    },
    txtBuySell: {
        color: '#A4A6AB',
        paddingHorizontal: 20,
        fontSize: 16

    }
})
