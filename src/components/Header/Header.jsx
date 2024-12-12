import { categories } from "../../helper/data";


function Header({clickChange}) {
  return (
   <>
      <div>
        <h1 style={{ color:"#D7F205", backgroundColor:"#AEB5BF", fontFamily:"cursive", fontSize:"3rem", textAlign:"center" }}>Product List</h1>
      </div>
      <ul style={{display:"flex", gap:"1rem",  justifyContent:"center"}} >
        {categories.map((kategori, index) => 
          <button onClick={()=>clickChange(kategori)} style={{color:"gray", backgroundColor:"#D7F205", fontSize:"1rem",  borderRadius:"15px", padding:"10px", border:"none", fontWeight:"bold", cursor:"pointer" }}  key={index}>{kategori.toUpperCase()}
          
          </button>
        )}
      </ul>
    </>
  );
}

export default Header;