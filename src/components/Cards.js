import React from 'react'
import classes from "./Cards.module.scss";

const Cards = () => {
  return (
    <div className={classes.cards}>
    <div className={classes.cards__flex}>
    <h2 className={classes.cards__text}>Bayerische Motoren Werke AG, commonly referred to as BMW (German pronunciation: [ˌbeːʔɛmˈveː] (audio speaker iconlisten)), is a German multinational corporate manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany. The corporation was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945.

Automobiles are marketed under the brands BMW, Mini and Rolls-Royce, and motorcycles are marketed under the brand BMW Motorrad. In 2017, BMW was the world's fourteenth-largest producer of motor vehicles, with 2,279,503 vehicles produced.[3] The company has significant motorsport history, especially in touring cars, Formula 1, sports cars and the Isle of Man TT.
</h2>
<img className={classes.cards__img} src="https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>

    </div>
    <div className={classes.cards__flex}>
    <img className={classes.cards__img} src="https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>

    <h2 className={classes.cards__text}>Mercedes-Benz (German pronunciation: [mɛɐ̯ˈtseːdəsˌbɛnts, -dɛs-] (audio speaker iconlisten)),[6][7] commonly referred to as just Mercedes, is a German luxury automotive marque. Both Mercedes-Benz and Mercedes-Benz AG (a Mercedes-Benz Group subsidiary established in 2019) are headquartered in Stuttgart, Baden-Württemberg, Germany. Mercedes-Benz produces consumer luxury vehicles and commercial vehicles.[note 2] Its first Mercedes-Benz-badged vehicles were produced in 1926. In 2018, Mercedes-Benz was the largest seller of premium vehicles in the world, having sold 2.31 million passenger cars.
</h2>

    </div>
    <div className={classes.cards__flex}>
    <h2 className={classes.cards__text}>Audi AG (German: [ˈaʊ̯di ʔaːˈɡeː] (audio speaker iconlisten)) (commonly referred to as Audi) is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany. As a subsidiary of its parent company, the Volkswagen Group, Audi produces vehicles in nine production facilities worldwide.

The origins of the company are complex, going back to the early 20th century and the initial enterprises (Horch and the Audiwerke) founded by engineer August Horch; and two other manufacturers (DKW and Wanderer), leading to the foundation of Auto Union in 1932. The modern era of Audi essentially began in the 1960s when Auto Union was acquired by Volkswagen from Daimler-Benz
</h2>
<img className={classes.cards__img} src="https://images.pexels.com/photos/6335848/pexels-photo-6335848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>

    </div>

    
  
  </div>
  
  
  )
  
}

export default Cards