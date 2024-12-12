
import Header from "./components/Header/Header"
import './App.scss';
import ProductCard from "./components/ProductCard/ProductCard";
import { useState } from "react";

function App() {
  const [selectedCategori,SetSelectedCategori]=useState("all")
  // const categorychange=(kategori)=>{
  //   SetSelectedCategori(kategori)
  // }
  return (
    <div style={{backgroundColor:"#AEB5BF"}} >
     <Header clickChange={SetSelectedCategori}/>
     <ProductCard kategori={selectedCategori}/>
    </div>
  );
}

export default App;