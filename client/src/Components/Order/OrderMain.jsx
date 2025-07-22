import React from 'react'
import OrderSection1 from './ordermain/OrderSection1.jsx';
import OrderSection2 from './ordermain/OrderSection2.jsx';
import Orderchoose from './ordermain/OrderChoose.jsx';
import Orders from './ordermain/Orders.jsx';
import Ordercarousel from './ordermain/OrderCarousel.jsx';

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
