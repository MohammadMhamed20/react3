import React, { useEffect, useState } from "react";
import { getAllProductByCategory } from "../firebase_handlers/handleGetProduct";
import Card from "./Card";
function Categorys() {
  const [objData, setObjData] = useState([]);
  useEffect(() => {
    const data = getAllProductByCategory(null, { category: "category3" });
    data.then((obj) => {
      setObjData([...obj]);
    });
  });
  return (
    <div>
      {objData.map((item, index) => {
         return (
            <div key={index}>
              <Card data={item} />
            </div>
          );
      })}
    </div>
  );
}

export default Categorys;