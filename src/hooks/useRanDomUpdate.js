import React, { useEffect, useState } from 'react';
import {
     randomObject,
     randomDisPlayName,
     randomInteger,
     randomNumber,
     randomNumberLength,
     randomKeyValue
} from '../randomFunc';
let objectUpdate = {}
function onChangeDataUpdate(objectRealtime, setListData, dic) {
     const newListData = dic.current.listData.map(el => {
          if (el.order_id === objectRealtime.order_id) {
               return objectRealtime
          } else {
               return el
          }
     })
     dic.current.listData = newListData
     setListData(newListData)
}
function useRandomUpdate({ dic, setListData }) {
     useEffect(() => {
          const sideArray = ['buy', 'sell'];
          const arrayClass = ['EQT', 'MF', 'ETF', 'WAR', 'FUT', 'OPT', 'IND', 'FX'];
          const fillStatus = ['Unfilled', 'Partially Filled', 'Filled'];
          const actionStatus = ['Create', 'Amend', 'Cancel', 'Purge'];
          const orderAction = ['OK', 'AUTHORISING', 'PENDING', 'QUEUED', 'DENIED', 'FAILED',];
          const orderTag = ['active', 'executed', 'inactive']
          setTimeout(() => {
               const randomSetInterval = setInterval(() => {
                    const itemRandom = dic.current.listData[Math.floor(Math.random() * dic.current.listData.length)];
                    const newObject = {
                         ...itemRandom, side: randomObject(sideArray),
                         filled_quantity: randomInteger(1000, 1),
                         fill_status: randomObject(fillStatus),
                         order_quantity: randomInteger(100000, 1),
                         action_status: randomObject(actionStatus),
                         order_action: randomObject(orderAction),
                         limit_price: randomNumber(100, 0).toFixed(2),
                         updated: randomNumberLength(9),
                         order_tag: randomObject(orderTag)
                    }
                    objectUpdate = { ...newObject }
                    onChangeDataUpdate(objectUpdate, setListData, dic)
               }, 10000);
          }, 2 * 1000);
          return () => {
          };
     }, []);
}
export default useRandomUpdate;
