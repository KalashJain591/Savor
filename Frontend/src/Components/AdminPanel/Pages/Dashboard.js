import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders, getRevenue } from "../API";
import "./Dashboard.css"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from "chart.js";
import { Bar } from "react-chartjs-2";
import Header from '../AdminPanelComponents/Header'
import SideBar from '../AdminPanelComponents/SideBar'
import "../HomePage/Index.css"
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then((res) => {
      setInventory(res.total);
    });
    getCustomers().then((res) => {
      setCustomers(res.total);
    });
  }, []);
  return (
    <div className='admin-section'>
      <div className="admin-section-grid-2">
        {/* <SideBar /> */}
        <div className="SideMenuAndPageContent">
          <Header />
          <div className="dashboard-section">
            <div className="dashboard-heading">
              <h4>Dashboard</h4>
            </div>
            <div className="dashboard-info">
              <div className="dashboard-child-info">
                <div className="dashboard-card-info" style={{ background: "#17a2b8" }}>
                  <div className="dashboard-card-num ">
                    <h3>150</h3>
                    <p>Orders</p>
                  </div>
                  <ShoppingCartOutlined style={{ fontSize: 50, color: "#148a9d" }} />
                </div>
                <div className="dashboard-card-info" style={{ background: "#28a745" }}>
                  <div className="dashboard-card-num">
                    <h3>150</h3>
                    <p>Inventory</p>
                  </div>
                  <ShoppingOutlined style={{ fontSize: 50, color: "#228e3b" }} />
                </div>
                <div className="dashboard-card-info" style={{ background: "#ffc107" }}>
                  <div className="dashboard-card-num">
                    <h3>150</h3>
                    <p>Customer</p>
                  </div>
                  <UserOutlined style={{ fontSize: 50, color: "#d9a406" }} />
                </div>
                <div className="dashboard-card-info" style={{ background: "#dc3545" }}>
                  <div className="dashboard-card-num">
                    <h3>150</h3>
                    <p>Revenue</p>
                  </div>
                  <DollarCircleOutlined style={{ fontSize: 50, color: "#bb2d3b" }} />
                </div>
              </div>
            </div>
            <div className="data-analysis">
              <RecentOrders />
              <DashboardChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <div className="recent-orders">
      <h3>Recent Orders</h3>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "discountedPrice",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </div>
  );
}

function DashboardChart() {
  const [reveneuData, setReveneuData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`;
      });
      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Revenue",
            data: data,
            backgroundColor: "rgba(255, 0, 0, 1)",
          },
        ],
      };
      setReveneuData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Order Revenue",
      },
    },
  };

  return (
    <div className="Revenue-Analysis">
      <h3>Revenue Analysis</h3>
      <Card style={{ width: 500, height: 250 }} className="revenue-graph">
        <Bar options={options} data={reveneuData} />
      </Card>
    </div>
  );
}
export default Dashboard
