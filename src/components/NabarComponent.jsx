
import { Button, Navbar } from "flowbite-react";
import { list } from "postcss";
import { act, useState } from "react";
import { Link } from "react-router-dom";
export function NavbarComponent() {
    const [navbarList,setNavbarList]  = useState(
        [
            {
                name: "Home",
                path: "/",
                active: true,
            },
            {
                name: "Aout-Us",
                path: "/about-us",
                active: false,
            },
            {
                name: "Services",
                path: "/services",
                active: false,
            },
            {
                name: "Contact-Us",
                path: "/contact-us",
                active: false,
            }
        ]
    );
     const handleOnclick =(clickItems)=>{
       setNavbarList((prevlist) => 
         prevlist.map((items)=>
            items.name === clickItems.name
            ? {...items,active: true}
            : {...items,active:false} 
         )
       );
      
     };

    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="https://flowbite-react.com">
                <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">FD10</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button>Get started</Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                {
                    navbarList.map((list, index) => {
                        // console.log(navbarList);
                    return (
                       
                    <Navbar.Link 
                      onClick={ ()=> handleOnclick(list) }
                    as={Link} to={list.path} active={list.active}>
                         {list.name}
                    </Navbar.Link>
                     )
                    })
                }
            </Navbar.Collapse>
        </Navbar>
    );
}
