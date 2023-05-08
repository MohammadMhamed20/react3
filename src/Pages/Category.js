import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByCategory } from "../firebase_functions/handleGetProduct";
import Item from "./Item.js";
function Category() {
  const [data, setData] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getByCategory({ category: type }).then((obj) => {
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

export default Category;
