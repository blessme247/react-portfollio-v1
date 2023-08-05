import { Route, Routes } from "react-router-dom";
import Index from "./Pages/Index/Index"
import { split } from "./animations/text";
import { useEffect } from "react";
scroll()

function App() {

  useEffect(() => {
    split();
});

  return (
    <>
     <Routes> 
       <Route path="/" element={<Index/>}/> 
      
     </Routes> 
    </>
  )
}

export default App
