import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
const Search = () => {
    return (
        <View style={styles.container}>
            <Ionicons name={'search-outline'} size={18} color={'#A0A2B0'} />
            <TextInput style={{ marginVertical: 8 }}
                // selectionColor={}
                placeholder="Search"
                placeholderTextColor={'rgba(255,255,255,0.3)'}
                returnKeyType="search"
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center', marginHorizontal: 8,
        backgroundColor: '#2C324C',
        borderRadius: 8,
    }
})
