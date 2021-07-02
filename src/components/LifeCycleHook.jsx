import React from 'react'
import { useState, useEffect } from 'react'

const LifeCycleHook = () => {
    const [count, setCount] = useState(0)
    const [tick, setTick] = useState(0)

    useEffect(() => {
        document.title = `Sudah diklik ${count} kali`
    }, [count])

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTick(prev=> prev + 1)
        }, 1000)

        return ()=>{
            clearInterval(interval)
        }            
    },[])

    return (
        <div>
            <button className="btn btn-success" onClick={()=>setCount(prev => prev + 1)}>Klik {count} kali</button>
            <button className="btn btn-warning">{tick}</button>
        </div>
    )
}

export default LifeCycleHook
