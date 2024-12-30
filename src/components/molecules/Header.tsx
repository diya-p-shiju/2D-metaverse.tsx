
import { Button } from "../ui/button"
import NavBar from "./NavBar"
import { useAuth0 } from "@auth0/auth0-react"

const Header = () => {
  const { loginWithRedirect} = useAuth0();
  return (
    <>
   <section className="flex justify-between items-center px-10 py-5">
   <span className="relative text-primary font-serif  text-5xl font-extrabold">COPWORK</span>
   <NavBar />
   <span className="flex gap-4">
    <Button onClick={async()=> await loginWithRedirect()}>Login</Button>
    <Button>SignUp</Button>
   </span>
   </section>
    </>
  )
}

export default Header