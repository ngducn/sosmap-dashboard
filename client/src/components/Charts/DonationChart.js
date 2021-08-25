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
      name: "Not-done",
      Month: "Mon.",
      Quantity: 40,
    },
    {
      name: "Not-done",
      Month: "Tues.",
      Quantity: 56,
    },
    {
      name: "Not-done",
      Month: "Wed.",
      Quantity: 12,
    },
    {
      name: "Not-done",
      Month: "Thurs.",
      Quantity: 36,
    },
    {
      name: "Not-done",
      Month: "Friday",
      Quantity: 120,
    },
    {
      name: "Not-done",
      Month: "Sat.",
      Quantity: 23,
    },
    {
      name: "Not-done",
      Month: "Sun.",
      Quantity: 3,
    },

    {
      name: "Done",
      Month: "Mon.",
      Quantity: 15,
    },
    {
      name: "Done",
      Month: "Tues.",
      Quantity: 22,
    },
    {
      name: "Done",
      Month: "Wed.",
      Quantity: 45,
    },
    {
      name: "Done",
      Month: "Thurs.",
      Quantity: 10,
    },
    {
      name: "Done",
      Month: "Friday",
      Quantity: 21,
    },
    {
      name: "Done",
      Month: "Sat.",
      Quantity: 32,
    },
    {
      name: "Done",
      Month: "Sun.",
      Quantity: 52,
    },
    {
      name: "Pending",
      Month: "Mon.",
      Quantity: 19,
    },
    {
      name: "Pending",
      Month: "Tues.",
      Quantity: 20,
    },
    {
      name: "Pending",
      Month: "Wed.",
      Quantity: 12,
    },
    {
      name: "Pending",
      Month: "Thurs.",
      Quantity: 32,
    },
    {
      name: "Pending",
      Month: "Friday",
      Quantity: 20,
    },
    {
      name: "Pending",
      Month: "Sat.",
      Quantity: 58,
    },
    {
      name: "Pending",
      Month: "Sun.",
      Quantity: 52,
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
