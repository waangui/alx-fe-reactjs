import {Link } from 'react-router-dom';

function Navbar (){
    return(

        <nav style={{padding: '10px', textAlign:'right', fontSize:'18px', fontWeight:'bold', backgroundColor:'#EDF1E9', color: 'white'}}>
            <Link to="/" style={{padding:'8px'}}>Home</Link>
            <Link to="/about" style={{padding:'8px'}}>About</Link>
            <Link to="/services" style={{padding:'8px'}}>Services</Link>
            <Link to="/contact" style={{padding:'8px'}}>Contact</Link>
        </nav>
    );
}

export default Navbar;