import React from 'react'
import { NavContainer } from './style'
import Link from 'next/link';
import {AiOutlineMenu} from "react-icons/ai"

function Nav() {
    return (
        <NavContainer>
            <div className="logo">
                <img src="/images/logo.png" />
            </div>

                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">About</Link>
                    </li>
                    <li>
                        <Link href="/">Contact</Link>
                    </li>
                    <li>
                        <Link href="/">Contact</Link>
                    </li>
                </ul>
            <span><AiOutlineMenu size={23} /></span>
        </NavContainer>
    )
}

export default Nav