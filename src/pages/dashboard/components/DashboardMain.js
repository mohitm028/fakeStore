import React, { useEffect } from "react";
import "./DashboardMain.scss";
import Navbar from "../../../shared/commonComponent/Navbar";
import { useHistory } from "react-router-dom";

function DashboardMain(props) {
  const { fetchAllProducts, productsData } = props;
  const history = useHistory();

  useEffect(() => {
    fetchAllProducts();
  }, []);
  const handeClick = (id) => {
    history.push(`/${id}/details`);
  };

  return (
    <div className="dashboardMain">
      <Navbar />
      {productsData.map((values) => {
        return (
          <div
            className="dashboardMain__container"
            onClick={() => handeClick(values.id)}
          >
            <img src={values.image} />
            <p>{values.title}</p>
            <p>${values.price}</p>
            <p>{values.description.slice(0, 70)}...</p>
          </div>
        );
      })}
    </div>
  );
}

export default DashboardMain;
