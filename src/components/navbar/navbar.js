import { COLORS } from "../../utils"
import "./navbar.css"
const Navbar = () => {
  return (
    <div className="navbar" style={{backgroundColor: COLORS.primary}}>
        <div className="navContainer">
            <span className="logo" style={{fontWeight:500}}>Book<span style={{fontWeight:900,color:COLORS.secondaryText}}>NOW</span></span>
            <div className="navItems">           
              <button className=" bg-transparent hidden font-bold mx-3 cursor-pointer hover:shadow  shadow-slate-50 py-1 px-3 rounded sm:hidden "  >BDT</button>          
              <button className="bg-transparent text-white   mx-1 hover:bg-blue-400 font-bold border border-white  py-1 px-3 hover:font-bold  ">List your Property</button>
              <button className="bg-slate-50 text-black  font-normal py-1 px-4 mx-1 ">Register</button>
              <button className="bg-slate-50 text-black  font-normal py-1 px-4  mx-1">Login</button>
              {/* <button className="navButton">Login</button> */}
            </div>
        </div>
    </div>
  )
}
 
export default Navbar