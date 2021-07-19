import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'bootstrap';

function Navbar(){

    const [breadCrumb, setBreadCrumb] = useState([
        
    ])

    return(
        <nav className="navbar">

            <h1><Link to={'/'}>NOVIGRAD</Link></h1>
            
            <div className="links">
                <a href="/">Home</a>&nbsp;
                <button>EN</button>&nbsp;&nbsp;
                <button>FR</button>
                
            </div>
        </nav>
    );
}
 
export default Navbar;