import ReceivedChart from "./components/ReceivedChart";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import DonationChart from "./components/DonationChart";
import { Container, Card } from "react-bootstrap";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const DasBoardPage = () => {
  return (
    <Container>
      <Card>
        <Container>
          {" "}
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Received" key="1">
              <ReceivedChart />
            </TabPane>
            <TabPane tab="Donation" key="2">
              <DonationChart />
            </TabPane>
          </Tabs>
        </Container>
      </Card>
    </Container>
  );
};

export default DasBoardPage;
