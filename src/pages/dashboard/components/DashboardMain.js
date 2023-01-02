import React, { useEffect } from "react";
import "./DashboardMain.scss";
import Navbar from "../../../shared/commonComponent/Navbar";

function DashboardMain(props) {
  const { fetchAllProducts, productsData } = props;
  console.log("Product Data ", productsData);
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="dashboardMain">
      <Navbar />
      {productsData.map((values) => {
        return (
          <>
            <div className="dashboardMain__container">
              <img src={values.image} />
              <p>{values.title}</p>
              <p>${values.price}</p>
              <p>{values.description.slice(0, 70)}...</p>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default DashboardMain;
