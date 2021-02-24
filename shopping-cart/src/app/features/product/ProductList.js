import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  selectProducts,
  fetchProducts,
  selectCount,
} from "./productSlice";

export function ProductList() {
  const count = useSelector(selectCount);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return <div></div>;
}
