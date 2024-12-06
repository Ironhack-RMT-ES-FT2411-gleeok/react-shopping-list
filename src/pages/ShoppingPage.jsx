import { useState } from "react";

import AddForm from "../components/AddForm";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

//* this data is just for testing the initial rendering of data
import testProducts from "../data/testProducts.json";

function ShoppingPage() {

  const [ allProducts, setAllProducts ] = useState(testProducts) 
  //* El estado se queda en ShoppingList porque todos loos componentes hijos de ShoppingList lo necesitan

  const [ searchValue, setSearchValue ] = useState("")

  return (
    <>

      <h1>Shopping List!</h1>

      {/* //* all elements of the shopping list will be here */}

      <AddForm setAllProducts={setAllProducts}/>

      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
      
      <ProductList allProducts={allProducts} searchValue={searchValue} setAllProducts={setAllProducts}/>

    </>
  )
}

export default ShoppingPage