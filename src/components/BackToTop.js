import React, { useEffect, useState } from 'react'
import classes from './BackToTop.module.scss'

const BackToTop = () => {
    const [back,setBack]=useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>(document.body.scrollHeight/2)){
                setBack(true)
            }
            else{
                setBack(false)
            }
        })
    },[])
    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behaviour:"smooth"
        })
    }
  return (
    <div>
        {back &&(
            <button className={classes.button} onClick={scrollUp}>Scroll</button>
        )}
    </div>
  )
}

export default BackToTop