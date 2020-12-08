import React, { useEffect, useState } from 'react';
import {
     randomObject,
     randomDisPlayName,
     randomInteger,
     randomNumber,
     randomNumberLength,
     randomKeyValue
} from '../randomFunc';
let objDataUpdate = {}
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
function funcRandomUpdate({dic,}) {
          const sideArray = ['buy', 'sell'];
          const arrayClass = ['EQT', 'MF', 'ETF', 'WAR', 'FUT', 'OPT', 'IND', 'FX'];
          const fillStatus = ['Unfilled', 'Partially Filled', 'Filled'];
          const actionStatus = ['Create', 'Amend', 'Cancel', 'Purge'];
          const orderAction = [
               'OK',
               'AUTHORISING',
               'PENDING',
               'QUEUED',
               'DENIED',
               'FAILED',
          ];
          setTimeout(() => {
                setInterval(() => {
                    const itemRandom = dic.current.listData[Math.floor(Math.random() * dic.current.listData.length)];
                    // console.log('DCM newObject1', itemRandom)
                    const newObject = {
                         ...itemRandom, side: randomObject(sideArray),
                         filled_quantity: randomInteger(1000, 1),
                         fill_status: randomObject(fillStatus),
                         order_quantity: randomInteger(100000, 1),
                         action_status: randomObject(actionStatus),
                         order_action: randomObject(orderAction),
                         limit_price: randomNumber(100, 0).toFixed(2),
                         updated: randomNumberLength(9),
                    }
                    // console.log('DCM newObject', newObject)
                    setRandomOrderValueUpdate(newObject);
               }, 10000);
          }, 5000);
          return () => {
          };
     return randomValueUpdate
}
export default funcRandomUpdate;
