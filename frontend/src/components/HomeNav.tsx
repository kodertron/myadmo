import { House, KeyRound, ListMinus, Menu, Moon, ShieldCheck, Store, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IconTextSm } from "./Buttons";
import ThemeToggle from "./ThemeToggle";

const navs = [
  {
    name: "Home",
    link: "/",
    icon: <House size={15} fontWeight={5} />
  },
  {
    name: "Posts",
    link: "/posts",
    icon: <ListMinus size={15} fontWeight={5} />,
  },
  {
    name: "Marketplace",
    link: "/marketplace",
    icon: <Store size={15} fontWeight={5} />,
  },
  {
    name: "Log In",
    link: "/login",
    icon: <KeyRound size={15} fontWeight={5} />,
  },
  {
    name: "Sign Up",
    link: "/signup",
    icon: <ShieldCheck size={15} fontWeight={5} />,
    flag: "btn"
  }
]

const HomeNav = () => {

  const [menu, setMenu] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');


  const toggleMenu = () => {
    setMenu(!menu);
  }


  return (
    <div>
      <div className="fixed z-30 top-0 left-0 w-full flex items-center justify-center py-2 max-[1062px]:p-0 ">
        <div className="h-[50px] w-full max-w-[1024px] max-[1062px]:max-w-[1062px] bg-slate-900 text-white rounded-3xl max-[1062px]:rounded-none flex items-center justify-between px-4">               
          <div className="logo h-20 w-40 relative -left-6 scale-90">
            <img src="/images/logo-white.png" alt="myadmo" className="h-full w-full object-contain" />
          </div>

          <div onClick={toggleMenu} className="menu-icon hidden max-[1062px]:flex items-center justify-center">
            <Menu size={24} />
          </div>

          <div className={`flex items-center justify-center space-x-4 max-[1062px]:space-x-0 max-[1062px]:space-y-4 max-[1062px]:flex-col max-[1062px]:bg-slate-900 max-[1062px]:h-full font-medium max-[1062px]:fixed top-0 ${menu ? 'right-0' : '-right-[100vw]'} max-[1062px]:w-[300px]`}>
            <div onClick={toggleMenu} className="menu-icon hidden max-[1062px]:flex items-center justify-center absolute top-0 right-0 p-4 py-3">
              <X size={24} fontWeight={0.8}/>
            </div>

            {navs.map(item => 
              item.flag !== "btn" ?
              <Link to={item.link} className="flex items-center space-x-2 px-2 py-1 scale-90 max-[1062px]:w-[130px]">
                <div className="icon">{item.icon}</div>
                <div className="name">{item.name}</div>
              </Link> :
              <Link to={item.link} >
                <IconTextSm icon={item.icon} text={item.name} />
              </Link>
            )}

            <ThemeToggle>
              <div onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')} className="flex items-center justify-center h-[40px] w-[40px] rounded-full border scale-75">
                {theme == 'dark' ? <Sun /> : <Moon />}
              </div>
            </ThemeToggle>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeNav;