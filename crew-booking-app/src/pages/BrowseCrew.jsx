import React, { useEffect, useState } from "react";
import crewData from "../data/data.json";
import CrewCard from "../components/CrewCard";
import FilterPanel from "../components/FilterPanel";
import Navbar from "../components/Navbar";
const BrowseCrew = () => {
  const [data, setData] = useState([]);
  const[min,setMin]=useState(0);
  const[max,setMax]=useState(7);
  const[role,setRole]=useState("");
  const[location,setLocation]=useState("");

 
  useEffect(() => {
    setData(crewData);
  }, []);
  
  const filterData= data.filter((item)=>{
    return(
      item.rating >=(Number(min) || 0) && item.rating <=(Number(max) || 7) && 
      (!role || item.role ===role) && 
      (!location || item.location.toLowerCase().includes(location.toLowerCase()))
    )
  })
  
  const handleFilter=(filters)=>{
    setMin(filters.min);
    setMax(filters.max);
    setRole(filters.role);
    setLocation(filters.location);
  }
  const handleReset=()=>{
    setMin(0);
    setMax(7);
    setRole("");
    setLocation("");
  }
  return (
    <>
    
   
    <Navbar />
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">
      <h1 className="text-3xl font-semibold text-center mb-10">Browse Crew</h1>
      <div className="max-w-6xl mx-auto mb-6">
  <FilterPanel onFilter={handleFilter} onReset={handleReset} />
</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        {filterData.length>0 ?(
          filterData?.map((item) => (
        <CrewCard key={item.id} item={item}/>
        )) 
      ):(
         <p className="text-center col-span-full text-gray-400">
            No crew found
          </p>
      )}
      </div>
    </div>
     </>
  );
};
export default BrowseCrew;
