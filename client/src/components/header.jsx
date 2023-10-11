'use client'

import { useState, useEffect } from 'react'
import Logo from '../images/logo2.png'

export default function Header() {
  // // detect whether user has scrolled the page down by 10px
  // const scrollHandler = () => {
  //   window.pageYOffset > 10 ? setTop(false) : setTop(true)
  // }  

  // useEffect(() => {
  //   scrollHandler()
  //   window.addEventListener('scroll', scrollHandler)
  //   return () => window.removeEventListener('scroll', scrollHandler)
  // }, [top])

  return (
    <header className='bg-preto-fundo backdrop-blur-sm shadow-lg'>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <a href="/" className="block" aria-label="Cruip">
              <img src={Logo} width={50} height={50} alt="IPPER" />
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <button>ENTRAR</button>
                {/* {state && <Verification />} */}
              </li>
            </ul>

          </nav>


        </div>
      </div>
    </header>
  )
}
