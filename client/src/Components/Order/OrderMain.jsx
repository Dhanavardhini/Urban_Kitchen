import React from 'react'
import OrderSection1 from './ordermain/OrderSection1';
import OrderSection2 from './ordermain/OrderSection2';
import Orderchoose from './ordermain/Orderchoose';
import Orders from './ordermain/Orders';
import Ordercarousel from './ordermain/Ordercarousel';

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
