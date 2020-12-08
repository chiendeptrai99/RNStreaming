import React, { useEffect, useState } from 'react';
import {
     randomObject,
     randomDisPlayName,
     randomInteger,
     randomNumber,
     randomNumberLength,
     randomKeyValue
} from '../randomFunc';
function onChangeDataInsett(objectRealtime, setListData, dic) {
     if (dic.current.init) {
          dic.current.init = false
     } else {
          dic.current.listData.push(objectRealtime)
          setListData([...dic.current.listData])
     }
}
function useRandomInsert({ dic, setListData }) {
     useEffect(() => {
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
               const randomSetInterval = setInterval(() => {
                    const objDataInsert = {}
                    objDataInsert.order_id = randomNumberLength(15);
                    objDataInsert.symbol = randomDisPlayName();
                    objDataInsert.classSymbol = randomObject(arrayClass);
                    objDataInsert.side = randomObject(sideArray);
                    objDataInsert.filled_quantity = randomInteger(1000, 1);
                    objDataInsert.fill_status = randomObject(fillStatus);
                    objDataInsert.order_quantity = randomInteger(100000, 1);
                    objDataInsert.action_status = randomObject(actionStatus);
                    objDataInsert.order_action = randomObject(orderAction);
                    objDataInsert.limit_price = randomNumber(100, 0).toFixed(2);
                    objDataInsert.updated = randomNumberLength(9);
                    onChangeDataInsett(objDataInsert, setListData, dic);
               }, 5 * 1000);
          }, 2 * 1000);
          return () => {
               clearInterval(randomSetInterval);
          };

     }, []);
}
export default useRandomInsert;
