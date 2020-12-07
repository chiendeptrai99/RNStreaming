import React, { useEffect, useState } from 'react';
import useRandomUpdate from '../hooks/useRanDomUpdate'

function funcUpdate() {
     const [orderId, setOrderId] = useState('')
     const { randomValueUpdate } = useRandomUpdate();

     useEffect(() => {
          randomValueUpdate.forEach((item, index, array) => {
               setOrderId(item.order_id)
          })
     }, [randomValueUpdate])
     return { orderId }
}
export default funcUpdate