import {Link, NavLink} from 'react-router-dom'
import { SiteLogo, search, menu, shop } from '../assets/icons'


const Navbar = () => {
  return (
    <header className='header ml-0'>

      <nav className='flex text-lg gap-4 place-items-start  font-light '>
          <Link to='https://www.youtube.com/' className='text-white'>
            Instagram
          </Link>
          <Link to='https://www.youtube.com/'className='text-white'>
            Facebook
          </Link>
          <Link to='https://www.youtube.com/'className='text-white'>
            Twitter
          </Link>
      </nav>
      <NavLink to='/' className='flex items-center justify-center '>
        <img src={SiteLogo} alt="logo here" />
      </NavLink>
      <nav className="flex text-lg gap-14 font-light items-end">
          <NavLink to='/pricing' className='h-[24px] w-[24px]'>
            <img src={search} alt="search" />
          </NavLink>
          <NavLink to='/about'className='h-[24px] w-[24px]'>
            <img src={shop} alt="shop" />
          </NavLink>
          <button className= "h-[24px] w-[24px]">
            <img src={menu} alt="menu" />
          </button>

        </nav>
    </header>
  )
}

export default Navbar