import { useState } from "react";
import Link from "../../Links/Link";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const NavBar = () => {

    const [ open, setOpen ] = useState(false)
    const routers = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/contact', name: 'Contact', id: 4 },
        { path: '/dashboard', name: 'Dashboard', id: 5 }
      ];
      
    return (
        <nav className="p-4">
        <div className="md:hidden text-2xl" onClick={()=> setOpen(!open)}>
        {
            open === true ? <AiOutlineClose></AiOutlineClose> 
            :
            <AiOutlineMenu></AiOutlineMenu>
        }
        
        </div>
           <ul className={`md:flex duration-1000 absolute md:static ${open ? 'top-10': '-top-80'}`}>
           {
                routers.map(route => <Link key={route.id} route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default NavBar;