import React, { useEffect, useState } from "react";
import { getAllProduct } from "../firebase_functions/handleGetProduct";
import Item from "./Item.js";

function AllProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllProduct().then((obj) => {
      setData([...obj]);
    });
  }, []);
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <Item data={item} />
          </div>
        );
      })}
    </div>
  );
}

export default AllProducts;
