import React, { useState, useEffect } from "react";
import { Column } from "@ant-design/charts";

const AntChart = () => {
  const [data, setData] = useState([
    {
      name: "London",
      Month: "Jan.",
      Quantity: 18.9,
    },
    {
      name: "Paris",
      Month: "Feb.",
      Quantity: 28.8,
    },
    {
      name: "London",
      Month: "Mar.",
      Quantity: 39.3,
    },
    {
      name: "Paris",
      Month: "Apr.",
      Quantity: 81.4,
    },
    {
      name: "London",
      Month: "May",
      Quantity: 47,
    },
  ]);
  var config = {
    data: data,
    isGroup: true,
    xField: "Month",
    yField: "Quantity",
    seriesField: "name",
    label: {
      position: "middle",
      layout: [
        { type: "interval-adjust-position" },
        { type: "interval-hide-overlap" },
        { type: "adjust-color" },
      ],
    },
  };
  return <Column {...config} />;
};

export default AntChart;
