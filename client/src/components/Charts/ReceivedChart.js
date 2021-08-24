import React, { useState, useEffect } from "react";
import { Column } from "@ant-design/charts";
import { useSelector, useDispatch } from "react-redux";
import ticketActions from "../../redux/actions/ticket.action";
const ReceivedChart = () => {
  let items = [];
  const tickets = useSelector((state) => state.ticket.receivedTicket);
  console.log("ticketReceiver", tickets);
  const dispatch = useDispatch();

  console.log("item", items);
  useEffect(() => {
    dispatch(ticketActions.getReceivedTickets());
  }, []);

  console.log("item", items);
  const [chartData, setChartData] = useState([
    {
      name: "Receive",
      Month: "Mon.",
      Quantity: 18.9,
    },
    {
      name: "Receive",
      Month: "Tues.",
      Quantity: 28.8,
    },
    {
      name: "Receive",
      Month: "Wed.",
      Quantity: 39.3,
    },
    {
      name: "Receive",
      Month: "Thurs.",
      Quantity: 81.4,
    },
    {
      name: "Receive",
      Month: "Friday",
      Quantity: 47,
    },
    {
      name: "Receive",
      Month: "Sat.",
      Quantity: 20.3,
    },
    {
      name: "Receive",
      Month: "Sun.",
      Quantity: 24,
    },

    {
      name: "Done",
      Month: "Mon.",
      Quantity: 18,
    },
    {
      name: "Done",
      Month: "Tues.",
      Quantity: 21.8,
    },
    {
      name: "Done",
      Month: "Wed.",
      Quantity: 30.3,
    },
    {
      name: "Done",
      Month: "Thurs.",
      Quantity: 90.4,
    },
    {
      name: "Done",
      Month: "Friday",
      Quantity: 30,
    },
    {
      name: "Done",
      Month: "Sat.",
      Quantity: 23,
    },
    {
      name: "Done",
      Month: "Sun.",
      Quantity: 25,
    },
    {
      name: "Pending",
      Month: "Mon.",
      Quantity: 15,
    },
    {
      name: "Pending",
      Month: "Tues.",
      Quantity: 26,
    },
    {
      name: "Pending",
      Month: "Wed.",
      Quantity: 35,
    },
    {
      name: "Pending",
      Month: "Thurs.",
      Quantity: 19,
    },
    {
      name: "Pending",
      Month: "Friday",
      Quantity: 20,
    },
    {
      name: "Pending",
      Month: "Sat.",
      Quantity: 50,
    },
    {
      name: "Pending",
      Month: "Sun.",
      Quantity: 20,
    },
  ]);
  var config = {
    data: chartData,
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

export default ReceivedChart;
