import React from 'react'
import OrderSection1 from './ordermain/ordersection1';
import OrderSection2 from './ordermain/ordersection2';
import Orderchoose from './ordermain/orderchoose';
import Orders from './ordermain/orders';
import Ordercarousel from './ordermain/ordercarousel';

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
