import React, { useEffect } from "react";
import Navbar from "../../../shared/commonComponent/Navbar";
import "./index.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useParams, useHistory } from "react-router-dom";

function AddProductMain(props) {
  const {
    addProduct,
    addProductLoading,
    productDetail,
    productDetailData,
    clearProductData,
    editProduct,
    editProductLoading,
  } = props;
  const params = useParams();
  const id = params.id;
  const history = useHistory();

  useEffect(() => {
    productDetail(id);
    return () => {
      clearProductData();
    };
  }, [id]);

  const formik = useFormik({
    initialValues: {
      title: productDetailData.title || "",
      price: productDetailData.price || "",
      description: productDetailData.description || "",
      image: productDetailData.image || "",
      category: productDetailData.category || "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      price: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      image: Yup.string().required("Required"),
      category: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      let formData = {};
      formData.title = values.title;
      formData.price = values.price;
      formData.description = values.description;
      formData.category = values.category;
      formData.image = values.image;
      {
        id
          ? editProduct(id, formData).then((response) => {
              if (response?.status === 200) {
                history.push("/dashboard");
                toast.success("Product Successfully updated");
              }
            })
          : addProduct(formData).then((response) => {
              if (response?.status === 200) {
                toast.success("Product Successfully added");
                resetForm({ values: "" });
              }
            });
      }
    },
  });
  return (
    <div className="addproductMain ">
      <Navbar />
      <form onSubmit={formik.handleSubmit}>
        <div className="addProductMain__container ">
          {id ? <h3>Edit Product</h3> : <h3>Add Product</h3>}
          <div className="addproductMain__title">
            <p>Title</p>
            <div>
              <input
                type="text"
                name="title"
                id="title"
                placeholder=" Enter a product title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
              />
            </div>
            {formik.touched.title && formik.errors.title ? (
              <span className="error">{formik.errors.title}</span>
            ) : null}
          </div>
          <div className="addproductMain__priceCategory">
            <div className="addproductMain__price">
              <p>Price</p>
              <div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  placeholder=" Price"
                  onBlur={formik.handleBlur}
                  value={formik.values.price}
                  onChange={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, "");
                    formik.handleChange(e);
                  }}
                  // onKeyDown={(e) => handleClick(e)}
                />
              </div>
              {formik.touched.price && formik.errors.price ? (
                <span className="error">{formik.errors.price}</span>
              ) : null}
            </div>
            <div className="addproductMain__category">
              <p>Category</p>
              <div>
                <select
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Category"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.category}
                >
                  <option value="">Category</option>
                  <option value="electronics">Electronics</option>
                  <option value="men's clothing">Men's clothing</option>
                  <option value="jewelery">Jewelery</option>
                  <option value="women's clothing">Women's clothing</option>
                </select>
              </div>
              {formik.touched.category && formik.errors.category ? (
                <span className="error">{formik.errors.category}</span>
              ) : null}
            </div>
          </div>
          <div className="addproductMain__description">
            <p>Description</p>
            <div>
              <textarea
                name="description"
                id="description"
                placeholder=" Enter a product description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                // onKeyDown={(e) => handleClick(e)}
              />
            </div>
            {formik.touched.description && formik.errors.description ? (
              <span className="error">{formik.errors.description}</span>
            ) : null}
          </div>
          <div className="addproductMain__image">
            <p>Image</p>
            <div>
              <input
                type="text"
                name="image"
                id="image"
                placeholder=" Upload a product image"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.image}
                // onKeyDown={(e) => handleClick(e)}
              />
            </div>
            {formik.touched.image && formik.errors.image ? (
              <span className="error">{formik.errors.image}</span>
            ) : null}
          </div>
          {id ? (
            <div className="addproductMain__submit">
              <button type="submit" className="cancel">
                CANCEL
              </button>

              <button type="submit" disabled={editProductLoading}>
                {editProductLoading ? "Updating" : "UPDATE"}
              </button>
            </div>
          ) : (
            <div className="addproductMain__submit">
              <button type="submit" disabled={addProductLoading}>
                {addProductLoading ? "Submitting" : "SUBMIT"}
              </button>
            </div>
          )}

          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            toastStyle={{ backgroundColor: "#38aecc" }}
          />
        </div>
      </form>
    </div>
  );
}

export default AddProductMain;
