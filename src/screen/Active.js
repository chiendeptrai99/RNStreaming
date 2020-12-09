import React, { useCallback, useState, useEffect, useMemo, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, ScrollView } from 'react-native';
import RowOrderList from '../OrderList/Component/RowOrderList';
import Search from '../OrderList/Component/Search';
import TabBuySell from '../OrderList/Component/TabBuySell';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import useRandomInsert from '../hooks/useRandomInsert';
import useRandomUpdate from '../hooks/useRanDomUpdate';
import {
     randomObject,
     randomDisPlayName,
     randomInteger,
     randomNumber,
     randomNumberLength,
     randomKeyValue
} from '../randomFunc';
import { TouchableOpacity } from 'react-native';
const { width: deviceWidth, height: deviceHeeigt } = Dimensions.get('window');

const test = {
     "order_id": 123123222222222,
     "symbol": "BHP.ASX",
     "class": 'EQT',
     "side": 'buy',
     "fill_status": 'Unfilled',
     "filled_quantity": 222,
     "order_quantity": 10000,
     "limit_price": 22.33,
     "action_status": 'Create',
     "order_action": 'OK',
     "updated": 987654321,
     "order_tag": 'active'
}

const Active = () => {
     const [listData, setListData] = useState([test])
     const dic = useRef({ listData: [], init: true, checkTag: true })
     dic.current.listData = listData
     useRandomInsert({ dic, setListData });
     useRandomUpdate({ dic, setListData });
     useEffect(() => {
          listData.map((el, index) => {
               if (el.order_tag !== 'active') {
                    listData.splice(index, 1)
               }
          })
          console.log('List', listData)
     }, [listData])
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
                    < ScrollView >
                         {
                              listData.map((item, index) => {
                                   return (
                                        <RowOrderList item={item} index={index} />

                                   );
                              })
                         }
                    </ScrollView>

               </View>
          </View >
     );
};

export default Active;

const styles = StyleSheet.create({});
