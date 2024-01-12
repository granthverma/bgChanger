import { useState } from "react"


function App() {
  const [color, setColor] = useState("grey")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    
    >

    <div className="fixed  flex flex-wrap  justify-center bottom-12 inset-x-0 px-2">
      
      <div className="flex flex-wrap justify-center bg-white gap-3 shadow-lg px-3 py-2 rounded-3xl">
      <p> Background Color 🎨 Selected Your Color From Color Palettes 🌈</p>
     <button onClick={()=> setColor("red")}
     className="px-4 py-1 rounded-full text-white outline-none shadow-lg" style={{backgroundColor:"red"}}
    
    >Red</button>
    <button onClick={()=> setColor("yellow")}
     className="px-4 py-1 rounded-full text-black outline-none shadow-lg" style={{backgroundColor:"yellow"}}
    
    >Yellow</button>

<button onClick={()=> setColor("blue")}
     className="px-4 py-1 rounded-full text-white outline-none shadow-lg" style={{backgroundColor:"blue"}}
    
    >Blue</button>
    <button onClick={()=> setColor("purple")}
     className="px-4 py-1 rounded-full text-white outline-none shadow-lg" style={{backgroundColor:"purple"}}
    
    >Purple</button>

<button onClick={()=> setColor("green")}
     className="px-4 py-1 rounded-full text-white outline-none shadow-lg" style={{backgroundColor:"green"}}
    
    >Green</button>
    <button onClick={()=> setColor("pink")}
     className="px-4 py-1 rounded-full text-white outline-none shadow-lg" style={{backgroundColor:"pink"}}
    
    >Pink</button>

<button onClick={()=> setColor("brown")}
     className="px-4 py-1 rounded-full text-white outline-none shadow-lg" style={{backgroundColor:"brown"}}
    
    >Brown</button>
    <button onClick={()=> setColor("DeepSkyBlue")}
     className="px-4 py-1 rounded-full text-white outline-none shadow-lg" style={{backgroundColor:"DeepSkyBlue"}}
    
    >DeepSkyBlue</button>


<button onClick={()=> setColor("Indigo")}
     className="px-4 py-1 rounded-full text-white outline-none shadow-lg" style={{backgroundColor:"Indigo"}}
    
    >Indigo</button>
    <button onClick={()=> setColor("DarkGoldenrod")}
     className="px-4 py-1 rounded-full text-white outline-none shadow-lg" style={{backgroundColor:"DarkGoldenrod"}}
    
    >DarkGoldenrod</button>


<button onClick={()=> setColor("MidnightBlue")}
     className="px-4 py-1 rounded-full text-white outline-none shadow-lg" style={{backgroundColor:"MidnightBlue"}}
    
    >MidnightBlue</button>
    <button onClick={()=> setColor("OrangeRed")}
     className="px-4 py-1 rounded-full text-white outline-none shadow-lg" style={{backgroundColor:"OrangeRed"}}
    
    >OrangeRed</button>
    

      </div>


   
    </div>

   
<br/>
          
    </div>
  )
}


export default App
