import React from 'react'
import classes from './Carousel.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const photos=[{
    name: "Photo 1",
    url: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?cs=srgb&dl=pexels-mike-120049.jpg&fm=jpg"

},
{
  name: "Photo 2",
  url: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

},
{
  name: "Photo 3",
  url: "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

}]

const Carousel = () => {
  const[result,setResult]=useState([]);
  const [isLoad,setIsLoad]=useState(false);
  var i=0;

  useEffect(()=>{
    const url= "https://api.unsplash.com/search/photos/?page=1&query=cars&client_id=94MjOnExcelUWcQX7f4AVIwM5dC1bYlN9UbXTS6e7Y0"
  axios.get(url).then((response)=>{
  setResult(response.data.results);
  console.log(result.length);
  });
},[]);

useEffect(()=>{

  if(result.length>0 && isLoad){
    for(i=0;i<result.length;i++){
    photos.push({url:result[i].urls.small});}
    console.log(photos);
    setIsLoad(false);
      
}
},[isLoad]);



  const fetchImages=()=>{
    setIsLoad(true);
    } 

  
    const settings = {
        
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
       
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        
      };
    
        return (
    <div className={classes.carousel}>
    <h2 className={classes.carousel__title}> Cars </h2>
    {isLoad?(
    <>
    <Slider {...settings}>
      {photos.map((photo)=>{
          return(
              <div>
                  <img className={classes.carousel__img} src={photo.url}></img>
              </div>
          )
      })}
    </Slider>
    <div className={classes.carousel__wrap}>
    <button className={classes.carousel__button} onClick={fetchImages}>Load More</button>
    </div>
    </>
    ):(
    <>
    <Slider {...settings}>
      {photos.map((photo)=>{
          return(
              <div>
                  <img className={classes.carousel__img} src={photo.url}></img>
              </div>
          )
      })}
    </Slider>
    <div className={classes.carousel__wrap}>
    <button className={classes.carousel__button} onClick={fetchImages}>Load More</button>
    </div>
    </>
    
    )}
  </div>
);
}



export default Carousel
