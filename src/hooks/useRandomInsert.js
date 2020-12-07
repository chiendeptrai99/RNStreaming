import React, { useEffect, useState } from 'react';
import {
     randomObject,
     randomDisPlayName,
     randomInteger,
     randomNumber,
     randomNumberLength,
     randomKeyValue
} from '../randomFunc';
let dataObjectInsert = []

function useRandomInsert() {

     const [randomValueInsert, setRandomOrderValueInsert] = useState([]);
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
          const randomSetInterval = setInterval(() => {
               setRandomOrderValueInsert([
                    {
                         order_id: randomNumberLength(15),
                         displayName: randomDisPlayName(),
                         classSymbol: randomObject(arrayClass),
                         side: randomObject(sideArray),
                         filled_quantity: randomInteger(1000, 1),
                         fill_status: randomObject(fillStatus),
                         order_quantity: randomInteger(100000, 1),
                         action_status: randomObject(actionStatus),
                         order_action: randomObject(orderAction),
                         limit_price: randomNumber(100, 0).toFixed(2),
                         updated: randomNumberLength(9),
                    },]
               );
          }, 5000);
          return () => {
               clearInterval(randomSetInterval, randomOrderIdInterval);

          };

     }, []);
     randomValueInsert.map((item, index, data) => {
          dataObjectInsert.push(item)

     })



     // console.log(dataObjectInsert, 'Fuck')
     return dataObjectInsert
}
export default useRandomInsert;
