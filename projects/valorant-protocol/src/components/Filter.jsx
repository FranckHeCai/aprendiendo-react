import { useState } from "react";
import { useAgentContext } from "../context/AgentsContext";
import useFilter from "../hooks/useFilter";

const Filter = () => {
  const {setRole, role} = useFilter()
  const handleFilter = roleQuery =>{
    
    if(role === roleQuery){
      setRole("All")
    }else{
      setRole(roleQuery)
    }
  }

  return (
    <div className="flex gap-2 items-center">
      <h2 className="text-xl text-red-400 font-[VALORANT]">Filter :</h2>
      <div className="flex gap-2">
        <button onClick={()=>{handleFilter("Duelist")}} className={`w-10 hover:bg-red-400 cursor-pointer transition duration-200 rounded-full p-1 ${role === "Duelist" ? "bg-red-400" : ""}`}><img src="/duelistIcon.png" alt="duelist icon" /></button>
        <button onClick={()=>{handleFilter("Initiator")}} className={`w-10 hover:bg-red-400 cursor-pointer transition duration-200 rounded-full p-1 ${role === "Initiator" ? "bg-red-400" : ""}`}><img src="/initiariorIcon.png" alt="initiator icon" /></button>
        <button onClick={()=>{handleFilter("Controller")}} className={`w-10 hover:bg-red-400 cursor-pointer transition duration-200 rounded-full p-1 ${role === "Controller" ? "bg-red-400" : ""}`}><img src="/controllerIcon.png" alt="controller icon" /></button>
        <button onClick={()=>{handleFilter("Sentinel")}} className={`w-10 hover:bg-red-400 cursor-pointer transition duration-200 rounded-full p-1 ${role === "Sentinel" ? "bg-red-400" : ""}`}><img src="/sentinelIcon.png" alt="sentinel icon" /></button>
      </div>
      
    </div>
  );
};

export default Filter;