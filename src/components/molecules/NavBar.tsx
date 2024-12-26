import{ Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <section className=" bg-transparent shadow-white">
      <div className="flex gap-5 text-white">
        <Link>Home</Link>
        <Link>Workspaces</Link>
        <Link>About Us</Link>
        <Link>Our Products</Link>
        <Link>Contact Us</Link>
        <Link>Socials</Link>
      </div>

    </section>
  )
}

export default NavBar