import React from 'react'

export default function Header() {
    return (
        <div>
            <nav className="nav">
                <img className="nav-img" src="./react-logo.png"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

