import React from 'react'
import { useState } from 'react'
import '../styles/Navbartwo.css'
import close from '../assets/close.png'
import menu from '../assets/menu.png'

function NavbarTwo() {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <nav className='nav-container'>
                <div className='logo-container'><p>LOGO HERE</p></div>
                <div className='nav-menu'>
                    <ul className='nav-items'>
                        <li >Home</li>
                        <li >Products</li>
                        <li >Profile</li>
                        <li >Dashboard</li>
                    </ul>
                </div>
            </nav>
            <nav className='nav-small'>
                <div className='logo-container'><p>LOGO HERE</p></div>

                <div className='menu-container'>
                    <img src={toggle ? close : menu} alt="menu-select" onClick={() => setToggle(!toggle)} className='menu-select' />
                </div>
            </nav>
            <div className={toggle ? 'nav-shown' : 'nav-hidden'}>
                <ul>
                    <li >Home</li>
                    <li >Products</li>
                    <li >Profile</li>
                    <li >Dashboard</li>
                </ul>
            </div>
            <section className='intro'>
                <p>lol it will not affect</p>
            </section>
        </>
    )
}

export default NavbarTwo