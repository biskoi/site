import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import styled from 'styled-components'

const Link = styled(RouterLink)`
text-decoration: none;
// color: rgb(253, 103, 153);
color: white;
text-align: center;
`;

export default function Nav(props) {

   let navItems = ['Home', 'Portfolio', 'Contact', 'Github']
   
   return (
      <div className = 'nav'>
         <div className="card">
            <img src = {require('./me.jpg')} alt = 'me irl'></img>
            <h3>biskoi</h3>
         </div>
         {navItems.map(item => (
            item === 'Github' ? 
            // <div/>
            <a className = 'navItems inactive' href = 'https://github.com/biskoi'>Github <img className = 'ext'src = {require('./img/ext.png')}/></a>
            :
            <Link 
            className = {item === props.activeTab ? 'navItems active' : 'navItems inactive'} 
            to = {`${item === 'Home' ? '/': '/' + item}`} 
            onClick = {() => props.setActiveTab(item)}
            >
            {item}
            </Link>
         ))}
      </div>

   )
}
