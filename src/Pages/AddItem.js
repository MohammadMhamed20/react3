import React, { useState } from "react";
import { addItem } from "../firebase_functions/addItem";
import "./Additem.css";
function AddItem() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [isIn, setIsIn] = useState("");
  const [success, setSuccess] = useState(0);

  return (
    <div className="additem__container">
      <h1>add new item page</h1>
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
          try {
            const data = {
              name: name,
              imgUrl: url,
              category: category,
              price: price,
              inventory: isIn,
            };
            addItem(data);
            setPrice("");
            setName("");
            setUrl("");
            setIsIn("");
            setCategory("");
            setSuccess(1);
          } catch (e) {
            setSuccess(-1);
          }
        }}
      >
        add new item
      </button>
      <div
        className={`add_new_item_status ${
          success === 1 ? "success" : success === -1 ? "failed" : ""
        }`}
      >
        <h6>
          {success === 1
            ? "Add new item success"
            : success === -1
            ? "Add new item failed"
            : "Add new item status"}
        </h6>
      </div>
    </div>
  );
}

export default AddItem;
