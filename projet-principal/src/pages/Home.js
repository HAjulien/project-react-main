import React from 'react';
import { useNavigate} from "react-router-dom"
import Avantages from '../components/Avantages';


function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <Avantages />
  
    </div>
  )
}

export default Home