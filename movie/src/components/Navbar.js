import React,{useState} from 'react'
import {Link,NavLink} from 'react-router-dom'
import {FiTrendingUp} from 'react-icons/fi'
// import {BiMoviePlay} from 'react-icons/bi'
// import {BsCameraVideo} from 'react-icons/bs'
// import {BiSearch} from 'react-icons/bi'
import './Navbar.css'
function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='Navbar'>
             <Link to='/' className="nav-logo"><span >MOVIE KATTA</span></Link>
            <div className={`nav-items ${isOpen && "open"}`}>
                <NavLink to="/"   onClick={() => setIsOpen(!isOpen)}><FiTrendingUp/>Trending </NavLink>
                {/* <NavLink to='/components/Movie'   onClick={() => setIsOpen(!isOpen)}><BiMoviePlay/>Movie</NavLink>
                <NavLink to='/components/Tv'   onClick={() => setIsOpen(!isOpen)}><BsCameraVideo/>Tv Series</NavLink> */}
                {/* <NavLink to='/components/Search'><BiSearch/>Search</NavLink> */}
            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
        </div>
  )
}

export default Navbar;