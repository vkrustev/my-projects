import React from 'react'
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>

    <div className={classes.footer__content}>
    <button to="/" className={classes.footer__content__logo}>
        navbar
    </button>
    <nav >
        <ul>
            <li>
                <ul to="/page-one" >
                    PageOne
                </ul>
            </li>
            <li>
                <ul to="/page-two" >
                    PageTwo
                </ul>
            </li>
            <li>
                <ul to="/page-three" >
                    PageThree
                </ul>
            </li>
        </ul>
    </nav>
 
</div>
</footer>

  )
}

export default Footer