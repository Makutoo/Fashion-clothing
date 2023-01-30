import './navigation.styles.scss'
/*
React Fragment is a component exposed by React 
which serves as a parent component in JSX but doesn't add anything to the DOM.
The div element on the other hand is an HTML element with no semantic
meaning but when used, will be added to the DOM as a node.
*/
import { Fragment } from 'react'
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrwnLogo className='logo'/> {/** thing in the Link tag is a button to the link */}
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP 
                </Link>
                <Link className='nav-link' to='/auth'>
                    SIGN IN 
                </Link>
            </div>
        </div>
        <Outlet/> {/* Outlet: where its route children should be placed */}
      </Fragment>
    )
  }

export default Navigation