import React from "react"
import "./styles/Grid.css"


const Grid = ({handleGrid})=>{
const nums = {
  allNums:  [1,2,3,4,5,6,7,8,9,0]
}



return(
    <div>
<ul className="number-grid">{nums.allNums.map((el,i)=>{
 return  <li key={i}>  
 
 <button onClick={() => handleGrid(el)}>  {el}   </button>
 

   
   </li>
})}

</ul>

    </div>
)






}
export default Grid;