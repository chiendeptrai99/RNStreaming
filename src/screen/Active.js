import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView } from 'react-native';
import RowOrderList from '../OrderList/Component/RowOrderList';
import Search from '../OrderList/Component/Search';
import TabBuySell from '../OrderList/Component/TabBuySell';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import useRandomInsert from '../hooks/useRandomInsert';
import useUpdate from '../hooks/useUpdate'
import useRandomUpdate from '../hooks/useRanDomUpdate';
import {
     randomObject,
     randomDisPlayName,
     randomInteger,
     randomNumber,
     randomNumberLength,
     randomKeyValue
} from '../randomFunc';
const { width: deviceWidth, height: deviceHeeigt } = Dimensions.get('window');
const Active = () => {
     const dataObjectInsert = useRandomInsert();
     const { randomValueUpdate } = useRandomUpdate()
     const { orderId } = useUpdate()
     useEffect(() => {
          dataObjectInsert.forEach((item, index, arrayObj) => {
               if (item.order_id == orderId) {
                    randomValueUpdate.order_id = orderId;
                    randomValueUpdate.displayName = item.displayName;
                    randomValueUpdate.classSymbol = item.classSymbol;
                    randomValueUpdate.side = randomObject(sideArray);
                    randomValueUpdate.filled_quantity = randomInteger(1000, 1);
                    randomValueUpdate.fill_status = randomObject(fillStatus);
                    randomValueUpdate.order_quantity = randomInteger(100000, 1);
                    randomValueUpdate.action_status = randomObject(actionStatus);
                    randomValueUpdate.order_action = randomObject(orderAction);
                    randomValueUpdate.limit_price = randomNumber(100, 0).toFixed(2);
                    randomValueUpdate.updated = randomNumberLength(9);
               }
          });
     }, [])
     console.log('data', dataObjectInsert)
     return (
          <View
               style={{
                    flex: 1,
                    backgroundColor: '#12141F',
                    borderTopColor: 'black',
                    borderTopWidth: 2,
               }}>
               <Search />
               <TabBuySell />
               <View style={{ flex: 1, backgroundColor: '#1C1F2E' }}>
                    {!randomValueUpdate.order_id === '' ? null :
                         < ScrollView >
                              {
                                   randomValueUpdate.map((item, index) => {
                                        return (
                                             <RowOrderList item={item} index={index} />
                                        );
                                   })
                              }
                         </ScrollView>
                    }


               </View>
          </View >
     );
};

export default Active;

const styles = StyleSheet.create({});
