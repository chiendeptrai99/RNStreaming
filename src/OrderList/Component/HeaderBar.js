import React from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const HeaderBar = ({title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        with: '100%',
        backgroundColor: '#12141F',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'black',
      }}>
      <Ionicons name={'menu-outline'} size={32} color="white" />
      <Text
        style={{fontSize: 24, color: 'white', fontWeight: 'bold', margin: 16}}>
        {title}
      </Text>
    </View>
  );
};

export default HeaderBar;
