import React from 'react'
import OrderSection1 from './OrderMain/OrderSection1';
import OrderSection2 from './OrderMain/OrderSection2';
import Orderchoose from './OrderMain/Orderchoose';
import Orders from './OrderMain/Orders';
import Ordercarousel from './OrderMain/Ordercarousel';

function OrderMain() {
  return (
    <>
    <Ordercarousel/>
      <OrderSection1/>
      <OrderSection2/>
      <Orders/>
      <Orderchoose/>
    </>
  )
}

export default OrderMain
