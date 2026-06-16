import { useState } from "react";

import Header from "../../components/Header";
import ProductsGrid from "./ProductsGrid";
import Footer from "../../components/Footer";
import "./ProductPage.css";

export default function ProductPage() {

  const [search, setSearch] = useState("");

  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
      />

      <ProductsGrid
        search={search}
      />

      <Footer />
    </>
  );
}