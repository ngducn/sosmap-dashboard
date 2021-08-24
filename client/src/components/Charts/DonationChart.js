import React, { useState, useEffect } from "react";
import { Column } from "@ant-design/charts";
import { useSelector, useDispatch } from "react-redux";
import ticketActions from "../../redux/actions/ticket.action";
const DonationChart = () => {
  const tickets = useSelector((state) => state.ticket.donationTicket);
  console.log("ticketDonation", tickets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ticketActions.getDonationTickets());
  }, []);
  const [data, setData] = useState([
    {
      name: "Receive",
      Month: "Mon.",
      Quantity: 20,
    },
    {
      name: "Receive",
      Month: "Tues.",
      Quantity: 29,
    },
    {
      name: "Receive",
      Month: "Wed.",
      Quantity: 39,
    },
    {
      name: "Receive",
      Month: "Thurs.",
      Quantity: 81,
    },
    {
      name: "Receive",
      Month: "Friday",
      Quantity: 47,
    },
    {
      name: "Receive",
      Month: "Sat.",
      Quantity: 20,
    },
    {
      name: "Receive",
      Month: "Sun.",
      Quantity: 24,
    },

    {
      name: "Done",
      Month: "Mon.",
      Quantity: 11,
    },
    {
      name: "Done",
      Month: "Tues.",
      Quantity: 19,
    },
    {
      name: "Done",
      Month: "Wed.",
      Quantity: 30,
    },
    {
      name: "Done",
      Month: "Thurs.",
      Quantity: 90,
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
      Quantity: 9,
    },
    {
      name: "Pending",
      Month: "Tues.",
      Quantity: 10,
    },
    {
      name: "Pending",
      Month: "Wed.",
      Quantity: 10,
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

export default DonationChart;
