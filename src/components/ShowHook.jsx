import React from 'react'
import { useState } from 'react'

const ShowHook = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            {
                isOpen? <div style={{
                    position : "fixed",
                    top: "0px",
                    bottom : "0px",
                    left : "0px",
                    right : "0px"
                }} className="bg-dark text-white">Sekarang Sedang Dibuka <button className="btn btn-danger" 
                onClick={()=>setIsOpen(false)}>Close</button></div> : null
            }
            <button className="btn btn-success" onClick={()=>setIsOpen(!isOpen)}>Toggle</button>
        </div>
    )
}

export default ShowHook
