import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./index.scss";
import Navbar from "../../../shared/commonComponent/Navbar";
import ThreeDot from "../../../images/threeDot.png";
import Cross from "../../../images/cross.png";
import { AddedToCart } from "../../../context";

function DetailProduct(props) {
  const {
    productDetail,
    productDetailData,
    productDetailLoading,
    clearProductData,
    deleteProduct,
    deleteLoading,
  } = props;

  const [deleteKey, setDeleteKey] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [count, setCount] = useState(0);
  const params = useParams();
  const id = params.id;
  const handleDropDown = () => {
    setDropDown((prevState) => !prevState);
  };
  const history = useHistory();
  const handleEdit = () => {
    history.push(`/${id}/edit`);
  };

  const handleDelete = () => {
    setDeleteKey((prevState) => !prevState);
  };

  const handleConfirm = () => {
    deleteProduct(id).then((response) => {
      if (response?.status === 200) {
        history.push("/dashboard");
      }
    });
  };

  const handleCart = (symbol) => {
    if (symbol == "minus") {
      if (count == 0) setCount(0);
      else {
        setCount(count - 1);
      }
    } else {
      setCount(count + 1);
    }
  };

  const { setCartData } = useContext(AddedToCart);
  const handleAddToCart = () => {
    setCartData((prevState) => prevState + count);
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
                  <div className="edit" onClick={handleEdit}>
                    Edit
                  </div>
                  <div className="delete" onClick={handleDelete}>
                    Delete
                  </div>
                </div>
              )}
            </div>
            <h3>{productDetailData.title}</h3>

            <p>${productDetailData.price}</p>

            <p>{productDetailData.description}</p>
            <div className="detailProduct__cart">
              <button
                className="cart__addSubtract"
                onClick={() => handleCart("minus")}
              >
                -
              </button>
              <input
                type="text"
                name="cart"
                id="cart"
                value={count}
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/\D/g, "");
                }}
              />
              <button
                className="cart__addSubtract"
                onClick={() => handleCart("plus")}
              >
                +
              </button>
              <button className="cart__addtoCart" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
          {deleteKey && (
            <div className="deleteConfirmation">
              <img src={Cross} onClick={handleDelete} />
              <p>Are you sure you want to delete the product?</p>
              <div className="confirmation__button">
                <button type="submit" className="cancel" onClick={handleDelete}>
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleConfirm}
                  disabled={deleteLoading}
                >
                  {deleteLoading ? "Confirming" : "CONFIRM"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DetailProduct;
