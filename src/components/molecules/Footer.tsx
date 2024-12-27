import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <section className="flex justify-between text-mono text-sm mx-5">
    <Link to="/action" className="text-secondary">@Diya</Link>
    <Link to="/action" className="text-secondary">FOLLOW US ON OUR SOCIALS</Link>
    <Link to="/action" className="text-secondary">MIT LICENCE</Link>
   </section>
  )
}

export default Footer