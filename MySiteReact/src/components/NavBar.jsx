import './NavBar.css'
import Link from './link'

function Navbar() {
  return (
    <>
        <div className='navbar'>
            <ul>
              <Link text={"Home"}></Link>
              <Link text={"About Me"}></Link>
              <Link text={"My Projects"}></Link>
              <Link text={"My Socials"}></Link>
            </ul>
        </div>
    </>
  )
}

export default Navbar
