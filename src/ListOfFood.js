import { useState } from "react";
import Food from "./Food";
export default function ListOFFood(){
    
   const [foodList, setFoodList] = useState([{
    srcImg: "https://tse3.mm.bing.net/th?id=OIP.zDciTiRjnAWPex2Y6ZN0iwHaE7&pid=Api&P=0&h=220",
    foodName: "Focaccia",
    description: "Bread with Italian olive oil and rosemary",
    remaining : 6
   },
   {
      srcImg: "https://tse1.mm.bing.net/th?id=OIP.ypRcfrARiyl_2DACJDR4YwHaFk&pid=Api&P=0&h=220",
      foodName: "Pizza Spinacci",
      description: "Tomato, mozarella, spinach, and ricotta cheese",
      remaining : 10
   },
   {
      srcImg: "https://tse1.mm.bing.net/th?id=OIP.MRRMld0_GcOZZbBzeFzjywHaFj&pid=Api&P=0&h=220",
      foodName: "Pizza Funghi",
      description: "Tomato, mozarella, mushrooms, and onion",
      remaining : 12
   },
   {
      srcImg: "https://www.toprecepty.cz/fotky/recepty/0370/pizza-salamino-213713-1920-1080-nwo.jpg",
      foodName: "Pizza Salamino",
      description: "Tomato, mozerrella, and pepperoni",
      remaining : 12
   },
   {
      srcImg: "https://www.bella-cucina.de/wp-content/uploads/2016/11/pizza-prosciuto.jpg",
      foodName: "Pizza Prosciutto",
      description: "Tomato, mozerrella, ham, aragula, and burrata cheese",
      remaining : 0
   },
      {
    srcImg: "https://tse3.mm.bing.net/th?id=OIP.oWI38yAzSDcjDvT8xVFlcwEjDW&pid=Api&P=0&h=220",
    foodName: "Pizza Margherita",
    description: "Tomato and mozarella",
    remaining : 18
   }]);
   return (
      <>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"center" }}>
                {foodList.map((food) => (
                    <div style={{width:"34%", display:"flex", justifyContent:"center"}}>
                        <Food foodDetail={food} />
                    </div>
                ))}
            </div>
            <div style={{textAlign:"center"}}>
               <p>We're open until 22:00. Come visit us or order online.</p>
               <button style={{padding:"8px 14px",border:"none", backgroundColor:"#efcc00 ", fontFamily:"sans-serif"}}>Order now</button>
               <br/>
               <br/>
            </div>
      </>
   )
}