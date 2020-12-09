import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { getSymbolClass } from '../../getClassSymbol';

const RowOrderList = ({ item, index }) => {
  const {
    side,
    fill_status,
    symbol,
    classSymbol,
    filled_quantity,
    limit_price,
    action_status,
    order_action,
  } = item;
  // console.log('re render row order list', item.symbol)

  const { text, color } = getSymbolClass({ classSymbol });
  const getColorOrder = () => {
    let colorOrder = '';
    if (order_action === 'OK') {
      return (colorOrder = '#3C80F7');
    }
    if (
      order_action == 'AUTHORISING' ||
      order_action == 'PENDING' ||
      order_action == 'QUEUED'
    ) {
      return (colorOrder = 'yellow');
    }
    if (order_action == 'DENIED' || order_action == 'FAILED') {
      return (colorOrder = 'red');
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={{ marginLeft: 8 }}>
        <Text style={{ color: side == 'buy' ? 'green' : 'red', fontSize: 12 }}>
          {side == 'buy' ? 'Buy' : 'Sell'}
        </Text>
      </View>
      <Text style={{ color: 'green', fontSize: 8 }}>{fill_status}</Text>
      <View>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 8 }}>
          <Text style={{ color: 'white', fontSize: 12 }}>{symbol}</Text>
          <View
            style={{
              borderRadius: 70,
              backgroundColor: color,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 4,
            }}>
            <Text
              style={{
                fontSize: 9,
                color: 'black',
                paddingHorizontal: 6,
                paddingVertical: 2,
                fontWeight: 'bold',
              }}>
              {text}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
          }}>
          <Text style={{ color: '#696C74', fontSize: 12 }}>Volume: </Text>
          <Text style={{ color: 'white', fontSize: 12 }}>{filled_quantity}</Text>
          <Text style={{ color: 'white', fontSize: 12 }}>/ 12,300,200</Text>
        </View>
        <View
          style={{
            paddingBottom: 8,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{ color: '#696C74', fontSize: 12 }}>Price: </Text>
          <Text style={{ color: 'white', fontSize: 12 }}>{limit_price}</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: getColorOrder(),
          borderWidth: getColorOrder() ? 0.5 : 0,
          borderTopLeftRadius: 10,
          paddingVertical: 6,
          marginTop: 55,
        }}>
        <Text
          style={{
            color: getColorOrder() || '#12141F',
            fontSize: 8,
            paddingLeft: 8,
          }}>
          {action_status}
        </Text>
        <Text
          style={{
            color: getColorOrder() || '#12141F',
            fontSize: 8,
            paddingRight: 8,
          }}>
          {order_action}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(RowOrderList);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#12141F',
    marginVertical: 8,
    borderRadius: 8,
    marginHorizontal: 8,
  },
});
