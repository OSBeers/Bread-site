import { NavLink } from "react-router-dom"


const Home = () => {
  return (
    <section className="bg-[url('/src/assets/bg/bg_home.png')] w-full h-screen relative">
      <nav className="text-white items-center justify-center font-light flex py-20 gap-5">
        <NavLink to='/about'> About</NavLink>
        <NavLink to='/about'> Features</NavLink>
        <NavLink to='/pricing'> Pricing</NavLink>
        <NavLink to='/gallery'> Gallery</NavLink>
        <NavLink to='/team'> Team</NavLink>
      </nav>
      <div className="flex-col items-center no-wrap justify-end ml-[670px] mr-[120px] mt-32 ">
        <div className="text-transparent font-bold text-6xl bg-clip-text bg-gradient-to-r from-amber-200 to-white">
          HAPPINESS <br />SMELLING BREAD
        </div> 
        <div className="text-xl text-slate-200 ">
          Fresh bread straight from the oven with home delivery. Feel the aroma of hot bread, the crunch of a golden crust and its lightness.
        </div>
        <button className="bg-gradient-to-r from-amber-200 to-white mt-32 text-slate-800 font-semibold
        h-[40px] w-[200px] rounded-full">
          Buy Now
        </button>
      </div>
      
    </section>
  )
}

export default Home