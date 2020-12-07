import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Search = () => {
  return (
    <View style={styles.container}>
      <Ionicons
        style={{marginHorizontal: 8}}
        name={'search-outline'}
        size={18}
        color={'#A0A2B0'}
      />
      <TextInput
        style={{paddingVertical: 8}}
        // selectionColor={}
        placeholder="Search"
        placeholderTextColor={'rgba(255,255,255,0.3)'}
        returnKeyType="search"
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C324C',
    borderRadius: 8,
    margin: 8,
  },
});
