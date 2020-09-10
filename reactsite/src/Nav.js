import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import styled from 'styled-components'

const Link = styled(RouterLink)`
text-decoration: none;
color: black;
text-align: center;
`;

export default function Nav() {

   let navItems = ['Home', 'Portfolio', 'About', 'Contact']
   
   return (
      <div className = 'nav'>
         <div className="card">
            <img src = {require('./me.jpg')} alt = 'me irl'></img>
            <h3>biskoi</h3>
         </div>
         {navItems.map(item => 
         <div className = 'navItems'>
            <Link to = {`/${item === 'Home' ? '' : item}`}>{item}</Link>
         </div>
         )}
      </div>

   )
}
