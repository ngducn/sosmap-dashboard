import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';
const DonationChart = () => {
  var data = [
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
  
  ];
  var config = {
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

export default DonationChart
