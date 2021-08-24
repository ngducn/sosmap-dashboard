import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { Tabs, Card } from "antd";

import ReceivedChart from "./ReceivedChart";
import DonationChart from "./DonationChart";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Chart = () => {
  return (
    <Card>
      <Tabs defaultActiveKey='1' onChange={callback}>
        <TabPane tab='Received' key='1'>
          <ReceivedChart />
        </TabPane>
        <TabPane tab='Donation' key='2'>
          <DonationChart />
        </TabPane>
      </Tabs>
    </Card>
  );
};

export default Chart;
