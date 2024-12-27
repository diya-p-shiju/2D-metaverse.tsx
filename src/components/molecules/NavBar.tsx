import{ Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <section className="relative bg-transparent ">
      <div className="container w-auto h-auto px-10 shadow-sm rounded-sm shadow-primary py-3 bg-red-400 bg-opacity-30 flex gap-5 text-white ">
        <Link to="/">Home</Link>
        <Link to="/action">Workspaces</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Our Products</Link>
        <Link to="/">Contact Us</Link>
        <Link to="/">Socials</Link>
      </div>

    </section>
  )
}

export default NavBar