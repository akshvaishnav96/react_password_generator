import { useEffect, useState,useRef } from "react";

import "./App.css";

function App() {
  const [pass, setpass] = useState(0);
  const [length, setLength] = useState(8);
  const [number, setNumAllow] = useState(false);
  const [character, setCharAllow] = useState(false);




useEffect(()=>{
let pass = "";
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
if(number)  str += "0123456789";
if(character) str +="!@#$%^&*";

for(let i = 0;i<length;i++){
  let char = Math.floor(Math.random()*str.length);
  pass += str.charAt(char); 
}


setpass(pass);
},[length,number,character]);

const passref = useRef(null);
const copyClipboard = ()=>{
passref.current?.select()
passref.current?.setSelectionRange(0,3)
  window.navigator.clipboard.writeText(pass);
}



  return (
    <>
      <div className="flex">
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Text"
          value={pass}
          readOnly={true}
          ref={passref}
        
     
        />{" "}
        <button type="button" onClick={copyClipboard}>Copy</button>
      </div>
      <input
        type="range"
        min={8}
        max={100}
        value={length}
        onChange={(e) => {
        setLength(e.target.value);
        }}
      />
      <span>Length:{length}</span>
      <br />
    
      <label htmlFor="">Number  </label>
      <input type="checkbox" value={number} onClick={
          (e)=>{
            setNumAllow(!number)
          }
      }/>
      <br />
      <label htmlFor="">Character</label>
      <input type="checkbox" value={character} onClick={
          (e)=>{
            setCharAllow(!character)
          }
      } />
    </>
  );
}

export default App;
