import React, { useCallback, useState, useEffect, useMemo, useRef } from 'react';
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
function onChangeDataInsett(objectRealtime, setListData, dic) {
     return useEffect(() => {
          if (dic.current.init) {
               dic.current.init = false
          } else {
               dic.current.listData.push(objectRealtime)
               setListData(dic.current.listData)
          }

     }, [objectRealtime])
}
function onChangeDataUpdate(objectRealtime, setListData, dic) {
     return useEffect(() => {
          console.info('onChangeDataUpdate', dic.current.listData)
          const newListData = dic.current.listData.map(el => {
               if (el.order_id === objectRealtime.order_id) {
                    return objectRealtime
               } else {
                    return el
               }
          })
          dic.current.listData = newListData
          console.info('onChangeDataUpdate', dic.current.listData)
          setListData(newListData)
     }, [objectRealtime])
}
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
     "updated": 987654321
}
const Active = () => {
     const [listData, setListData] = useState([test])
     const dic = useRef({ listData: [], init: true })
     dic.current.listData = listData
     useRandomInsert({ dic, setListData });
     useRandomUpdate({ dic, setListData })
     console.log('re render')

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
