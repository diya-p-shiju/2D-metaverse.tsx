import{ Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <section className="relative bg-transparent">
      <div className="container w-auto h-auto px-10 shadow-2xl rounded-2xl py-3 bg-primary flex gap-5 text-white ">
        <Link to="/">Home</Link>
        <Link to="/">Workspaces</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Our Products</Link>
        <Link to="/">Contact Us</Link>
        <Link to="/">Socials</Link>
      </div>

    </section>
  )
}

export default NavBar