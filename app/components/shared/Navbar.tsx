import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { Switch } from '@/components/ui/switch'
import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    return (
    <header className={`py-4 shadow-md `}>
      {/* ${isDarkMode ? "bg-gray-900 text-white" : ""} */}
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center sm:px-6 lg:px-8">
        {/*----------Logo----------------*/}
        <div className="text-xl font-bold">
          <Link href="/">Daily News</Link>
        </div>

        {/*------------------Desktop Menu--------------*/}
        <NavigationMenu className="hidden lg:flex ">
          <NavigationMenuList>
            <NavigationMenuItem className="flex space-x-8 items-center">
              {/* ${pathname === '/news' ? 'text-red-500 font-semibold' : ''} */}
              <NavigationMenuLink href="/news" className={` hover:text-red-500`}>
                News
              </NavigationMenuLink>

              <NavigationMenuLink
                href="/services"
                // ${pathname === '/services' ? 'text-red-500 font-semibold' : ''}
                className={` hover:text-red-500`}
              >
                <NavigationMenuTrigger className="dark:bg-gray-900 dark:text-white">Sevices</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="text-gray-600 shadow-md rounded-md px-5 py-4 space-y-2">
                    <li>
                      <NavigationMenuLink href="/services/web">
                        Web Development
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/app">
                        Mobile Apps
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/seo">
                        SEO
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuLink>
              {/* ${pathname === '/about' ? 'text-red-500 font-semibold' : ''} */}

              <NavigationMenuLink href="/about" className={` hover:text-red-500`}>
                About
              </NavigationMenuLink>

              <NavigationMenuLink
                href="/contact"
                // ${pathname === '/contact' ? 'text-red-500 font-semibold' : ''}
                className={` hover:text-red-500`}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/*---------Color switcher and login button--------------*/}
        <div className="hidden lg:flex items-center space-x-4">
          {/* onClick={toggleTheme} */}
          <div  className="flex items-center">
            <span className="mr-2">Dark Mode</span>
            <Switch />
          </div>
          <Button variant="default">Login</Button>
        </div>

        {/*------------Mobile Hamburger Menu-----------------*/}
        <div className="lg:hidden">
           <Button variant="default"><AiOutlineMenu size={24}/> </Button>
        </div>
        {/* <MobileMenu/> */}
       
      </nav>
    </header>
    )
}

export default Navbar