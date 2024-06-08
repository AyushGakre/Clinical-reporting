import React from 'react'
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem,Image,Link} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/button";
import {RiSpeakFill} from 'react-icons/ri'
import { SignedIn, SignedOut, SignInButton, useAuth, UserButton } from "@clerk/clerk-react";
const Nav = () => {
  const {isSignedIn} = useAuth();
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Image 
        width={55}
        src='https://www.karnataka.gov.in/frontend/assets/img/Seal_of_Karnataka.png'/>
        <p className="font-bold text-inherit">JayaDeva Hosptital</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/details">
            {isSignedIn ? "History" : null}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="/dictate" isIconOnly color='warning'>
            <RiSpeakFill size={30}/>
          </Button>
          </NavbarItem>
          <NavbarItem>
          <SignedIn>
        <UserButton />
      </SignedIn>
          </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Nav