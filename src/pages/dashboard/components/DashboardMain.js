import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./DashboardMain.scss";
import Navbar from "../../../shared/commonComponent/Navbar";

function DashboardMain(props) {
  const { fetchAllProducts, fetchCategoryProducts, productsLoading } = props;
  const history = useHistory();

  const [categoryDropdownListValue, setCategoryDropdownListValue] =
    useState("");
  const [products, setProducts] = useState([]);
  const [reloadFetchingUsingCategory, setReloadFetchingCategory] =
    useState(false);

  const handleProductListByCategory = (e) => {
    if (e.target.value == "all") {
      setReloadFetchingCategory((prevState) => !prevState);
    } else {
      {
        fetchCategoryProducts(e.target.value).then((response) => {
          if (response?.status == 200) {
            setProducts(response.data);
          }
        });
      }
    }
    setCategoryDropdownListValue(e.target.value);
  };

  const handeClick = (id) => {
    history.push(`/${id}/details`);
  };

  useEffect(() => {
    fetchAllProducts().then((response) => {
      if (response?.status == 200) {
        setProducts(response.data);
      }
    });
  }, [reloadFetchingUsingCategory]);

  return (
    <>
      <Navbar />
      <div className="dashboardMain">
        <div className="dashboardMain__filter">
          <select
            type="text"
            name="category"
            id="category"
            value={categoryDropdownListValue}
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
