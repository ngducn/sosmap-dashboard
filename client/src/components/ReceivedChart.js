import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';
import { useSelector, useDispatch } from "react-redux";
import ticketActions from '../redux/actions/ticket.action';
const ReceivedChart = () => {
 const tickets = useSelector(state => state.ticket.tickets)
 console.log("ticket", tickets)
 const dispatch = useDispatch()
 useEffect(() => {
  dispatch(ticketActions.getTickets())
 }, [])
  const [data, setData] = useState( [
    
      {
        type: 'Jan',
        quantity: 38,
      },
      {
        type: 'Feb',
        quantity: 52,
      },
      {
        type: 'March',
        quantity: 61,
      },
  ])
  let config = {
    data: data,
    xField: 'type',
    yField: 'quantity',
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: { alias: '类别' },
      quantity: { alias: '销售额' },
    },
    minColumnWidth: 20,
    maxColumnWidth: 20,
  };
  return <Column {...config} />;
};



export default ReceivedChart
