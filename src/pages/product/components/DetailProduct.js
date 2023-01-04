import React, { useEffect, useState } from "react";
import Navbar from "../../../shared/commonComponent/Navbar";
import ThreeDot from "../../../images/threeDot.png";
import { useParams } from "react-router-dom";

function DetailProduct(props) {
  const {
    productDetail,
    productDetailData,
    productDetailLoading,
    clearProductData,
  } = props;
  const [dropDown, setDropDown] = useState(false);
  const [count, setCount] = useState(0);
  const params = useParams();
  const id = params.id;
  const handleDropDown = () => {
    setDropDown((prevState) => !prevState);
  };
  useEffect(() => {
    productDetail(id);
    return () => {
      clearProductData();
    };
  }, []);

  return (
    <div className="detailProduct">
      <Navbar />
      {productDetailLoading ? (
        <p className="detailProduct__loading">Loading...</p>
      ) : (
        <div className="detailProduct__container">
          <div>
            <img src={productDetailData.image} className="product" />
          </div>
          <div className="data">
            <div className="dropdown">
              <img
                src={ThreeDot}
                onClick={handleDropDown}
                style={{ width: "4px" }}
              />
              {dropDown && (
                <div className="detailProduct__settings">
                  <div className="edit">Edit</div>
                  <div className="delete">Delete</div>
                </div>
              )}
            </div>
            <h3>{productDetailData.title}</h3>

            <p>${productDetailData.price}</p>

            <p>{productDetailData.description}</p>
            <div className="detailProduct__cart">
              <button
                className="cart__addSubtract"
                onClick={() => setCount(count - 1)}
              >
                -
              </button>
              <input
                type="text"
                name="cart"
                id="cart"
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/\D/g, "");
                }}
              />
              <button
                className="cart__addSubtract"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
              <button className="cart__addtoCart">Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailProduct;
