import React from 'react'
import { useNavigate } from 'react-router-dom'

const CrewCard = ({item}) => {
    const navigate = useNavigate();
  const  handleClick=()=>{
        navigate(`/profile/${item.id}`)
    }
  return (
   <div key= {item.id}
         onClick={handleClick} className="bg-gray-900/70 backdrop-blur border border-gray-800 p-6 rounded-lg hover:scale-105 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-400">Role: {item.role}</p>
            <p className="text-gray-400">Rating: {item.rating}</p>
            <p className="text-gray-400">Location: {item.location}</p>
          </div>
        )
     
}

export default CrewCard