import React from 'react'
import Carousel from './Carousel'
import classes from './Content.module.scss'
import Cards from './Cards'
const Content = () => {
  return (
    <body>
    <div style={{backgroundImage:`url("https://images.pexels.com/photos/831475/pexels-photo-831475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`}}>
    <div className={classes.content}>
    <h1 className={classes.content__text}>Pick up your favourite car</h1>
    </div>
    </div>

    <Cards></Cards>

    <div>
  <Carousel>
  </Carousel> 

</div>
</body>
 )
}

export default Content