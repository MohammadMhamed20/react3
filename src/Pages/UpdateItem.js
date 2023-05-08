import React, { useState, useEffect } from "react";
import { updateDocRef } from "../firebase_functions/handleUpdateItem";
import { useLocation } from "react-router-dom";
import "./Additem.css";
function UpdateItem() {
  let location = useLocation();
  const [name, setName] = useState(location.state.data.name);
  const [url, setUrl] = useState(location.state.data.imgUrl);
  const [price, setPrice] = useState(location.state.data.price);
  const [category, setCategory] = useState(location.state.data.category);
  const [isIn, setIsIn] = useState(location.state.data.inventory);
  useEffect(() => {
    console.log(location.state);
  });
  return (
    <div className="additem__container">
      <h1>Update new item page</h1>
      <div className="textitem">
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="item name"
        />
      </div>
      <div className="textitem">
        <input
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          type="text"
          placeholder="Image url"
        />
      </div>
      <div className="textitem">
        <input
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          type="text"
          placeholder="category name"
        />
      </div>
      <div className="textitem">
        <input
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          type="text"
          placeholder="item price"
        />
      </div>
      <div className="textitem">
        <input
          value={isIn}
          onChange={(e) => {
            setIsIn(e.target.value);
          }}
          type="text"
          placeholder="is in true/false"
        />
      </div>
      <button
        disabled={!name || !price || !category || !isIn || !url}
        className={
          !name || !price || !category || !isIn || !url
            ? "button_disabled"
            : "add_new_item"
        }
        onClick={() => {
          const data = {
            name: name,
            imgUrl: url,
            category: category,
            price: price,
            inventory: isIn,
          };
          updateDocRef(location.state.id, data);
          setPrice("");
          setName("");
          setUrl("");
          setIsIn("");
          setCategory("");
        }}
      >
        Update item
      </button>
    </div>
  );
}

export default UpdateItem;
