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
      Month: "Jan.",
      Quantity: 18.9,
    },
    {
      name: "Receive",
      Month: "Feb.",
      Quantity: 28.8,
    },
    {
      name: "Receive",
      Month: "Mar.",
      Quantity: 39.3,
    },
    {
      name: "Receive",
      Month: "Apr.",
      Quantity: 81.4,
    },
    {
      name: "Receive",
      Month: "May",
      Quantity: 47,
    },
    {
      name: "Receive",
      Month: "Jun.",
      Quantity: 20.3,
    },
    {
      name: "Receive",
      Month: "Jul.",
      Quantity: 24,
    },
    {
      name: "Receive",
      Month: "Aug.",
      Quantity: 35.6,
    },
    {
      name: "Done",
      Month: "Jan.",
      Quantity: 12.4,
    },
    {
      name: "Done",
      Month: "Feb.",
      Quantity: 23.2,
    },
    {
      name: "Done",
      Month: "Mar.",
      Quantity: 34.5,
    },
    {
      name: "Done",
      Month: "Apr.",
      Quantity: 99.7,
    },
    {
      name: "Done",
      Month: "May",
      Quantity: 52.6,
    },
    {
      name: "Done",
      Month: "Jun.",
      Quantity: 35.5,
    },
    {
      name: "Done",
      Month: "Jul.",
      Quantity: 37.4,
    },
    {
      name: "Pending",
      Month: "Jan.",
      Quantity: 42.4,
    },
    {
      name: "Pending",
      Month: "Feb.",
      Quantity: 42.4,
    },
    {
      name: "Pending",
      Month: "March",
      Quantity: 42,
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
