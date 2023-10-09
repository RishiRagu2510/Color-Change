import React,{useState} from 'react'

const ColorChange = () => {
    const[backgroundColor,B]=useState("red");
    function hanleClick(e)
    {
        if(e.target.value==='red')
        {
            B('Green');
        }
        else if(e.target.value==='Green')
        {
            B('Pink')
        }
        else{
            B('red');
        }
    }
  return (
    <div className="BR" style={{backgroundColor}}>
    <center><h1>ColorChange</h1></center>
    <button value={backgroundColor} onClick={hanleClick}>Click Me</button>
    </div>

  )
}

export default ColorChange