import React, { useEffect, useState } from 'react';
import {
     randomObject,
     randomDisPlayName,
     randomInteger,
     randomNumber,
     randomNumberLength,
     randomKeyValue
} from '../randomFunc';
const objDataInsert = {}
function useRandomInsert() {
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
          }, 3000);
     }, 2000);
     clearInterval(randomSetInterval);

     return objDataInsert
}
export default useRandomInsert;
