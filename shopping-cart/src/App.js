import React from "react";
import { Counter } from "./features/counter/Counter";
import { ProductList } from "./features/product/ProductList";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <ProductList></ProductList>;
    </div>
  );
}
