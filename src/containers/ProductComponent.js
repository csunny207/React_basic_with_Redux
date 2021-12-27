import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title,body } = product;
    return (
      <div className="four wide column" key={id}>
        <div className="ui link cards">
            <div className="card">
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta">{body}</div>
              </div>
            </div>
          </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
