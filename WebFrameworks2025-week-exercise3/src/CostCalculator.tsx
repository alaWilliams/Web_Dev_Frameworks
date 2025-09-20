import React from "react";
import { useState } from "react";

type CostCalculatorProps = {
  priceOfSingleVMPerHour: number;
};
export default function CostCalculator( { priceOfSingleVMPerHour} : CostCalculatorProps){
  const[vmCount, setVmCount] = useState(0)
  
  function displayTotalCost(hours : number) : number{
    return priceOfSingleVMPerHour * hours * vmCount;
  }

  function handleInputChange(event : React.ChangeEvent<HTMLInputElement>){
    setVmCount(Number(event.target.value))
  
  }
  return (
    <> 
      <h1>VM Cost Calculator</h1>
      <label htmlFor="vmNumber">Number of VMs</label>
      <input type="text" id="vmNumber" placeholder="Number of VMs" onChange={handleInputChange} value={vmCount}/>
      

      <div>
        <p>Cost per hour: {priceOfSingleVMPerHour * vmCount}</p>
        <p>Cost per day: {displayTotalCost(24)}</p>
        <p>Cost per month: {displayTotalCost(720)}</p>
        <p>Cost per year: {displayTotalCost(8760)}</p>
      </div>
    </>
    
  )
}
