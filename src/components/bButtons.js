import React from 'react'

const BButtons = (H,W,...rest) => {
 
       
  return (
    <div style={{
       
        padding:"10px 18px",
        fontSize:"18px",
        borderRadius:"10px",
        border:"none",
        boxShadow:"1px 1px 0px 2px rgba(0,0,0,0.3)",
        cursor:"pointer",
        textAlign:"center",
         ...rest}}>
        BUTONS
    </div>
  )
}

export default BButtons