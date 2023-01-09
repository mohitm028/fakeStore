import React, { useEffect, useState } from "react";
import "./DashboardMain.scss";
import Navbar from "../../../shared/commonComponent/Navbar";
import { useHistory } from "react-router-dom";

function DashboardMain(props) {
  const { fetchAllProducts, fetchCategoryProducts, productsLoading } = props;
  const history = useHistory();

  const [value, setValue] = useState("");
  const [products, setProducts] = useState([]);
  const [fetchAll, setFetchAll] = useState(false);

  const handleProductListByCategory = (e) => {
    if (e.target.value == "all") {
      setFetchAll((prevState) => !prevState);
    } else {
      {
        fetchCategoryProducts(e.target.value).then((response) => {
          if (response?.status == 200) {
            setProducts(response.data);
          }
        });
      }
    }
    setValue(e.target.value);
  };

  useEffect(() => {
    fetchAllProducts().then((response) => {
      if (response?.status == 200) {
        setProducts(response.data);
      }
    });
  }, [fetchAll]);
  const handeClick = (id) => {
    history.push(`/${id}/details`);
  };

  return (
    <>
      <Navbar />

      <div className="dashboardMain">
        <div className="dashboardMain__filter">
          <select
            type="text"
            name="category"
            id="category"
            value={value}
            onChange={(e) => handleProductListByCategory(e)}
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
        </div>
        {productsLoading ? (
          <p className="dashboardMain__loading">Loading...</p>
        ) : (
          <div className="dashboardMain__dashboard">
            {products.map((values) => {
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
        )}
      </div>
    </>
  );
}

export default DashboardMain;
