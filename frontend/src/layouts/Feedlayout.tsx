import { Boxes, Cctv, House, KeyRound, ListMinus, Menu, MessageCircleMore, Moon, ShieldCheck, Store, Sun } from "lucide-react"
import { useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { ThemeToggle } from "@/components";

const navs = [
  {
    name: "Home",
    link: "/",
    icon: <House size={15} fontWeight={5} />
  },
  {
    name: "Posts",
    link: "/posts",
    icon: <ListMinus size={15} fontWeight={5} />
  },
  {
    name: "Live",
    link: "/live",
    icon: <Cctv size={15} fontWeight={5} />
  },
  {
    name: "Explore",
    link: "/explore",
    icon: <Boxes size={15} fontWeight={5} />,
  },
  {
    name: "Messages",
    link: "/messages",
    icon: <MessageCircleMore size={15} fontWeight={5} />,
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



const Feedlayout = () => {
    const [menu, setMenu] = useState(true);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const location = useLocation();
  
    const toggleMenu = () => setMenu(!menu);
  
    return (
      <div className={`fixed top-0 right-0 ${menu ? "" : "max-[1124px]:-right-[250px]"} transition-all h-screen w-max bg-blue-50 bg-opacity-20 dark:bg-slate-900 dark:text-white duration-300`}>
        <div className={`flex`}>
          <div className="w-[250px] h-screen bg-white dark:bg-slate-900 border-r dark:border-slate-800 py-4 relative font-2">
    
            <div className="flex items-center justify-between px-4">
              <div className="logo h-[24px] w-[130px] relative -left-4 ">
                <img src="/images/logo-blue.png" className="h-full w-full object-cover dark:hidden" />
                <img src="/images/logo-white.png" className="h-full w-full object-cover hidden dark:block" />
              </div>
    

            </div>
    
            <nav className="mt-12 ">
              {navs.map(item => 
                <Link
                  key={item.name} 
                  to={item.link} 
                  className={`flex items-center gap-3 rounded-full px-4 py-1 mb-5 scale-95 hover:bg-slate-100 dark:hover:bg-slate-800  ${location.pathname === item.link ? 'text-blue-500' : 'hover:text-slate-900 dark:hover:text-white'}`}
                >
                  <div className="icon">
                    {item.icon}
                  </div>
                  <div className="name font-medium">
                    {item.name}
                  </div>
                </Link>
              )}
              <ThemeToggle>
                <div
                  onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
                  className={`flex items-center gap-3 rounded-full px-4 py-1 mb-5 scale-95  `}
                >
                  <div className="icon">
                  {theme == 'dark' ? <Sun size={15} fontWeight={5} /> : <Moon size={15} fontWeight={5} />}
                  </div>
                  <div className="name font-medium">
                  {theme == 'dark' ? "Dark Mode" : "Light Mode"}
                  </div>
                </div>
              </ThemeToggle>
            </nav>
          </div>

          <div className={` ${menu ? "w-minus-250 max-[1124px]:w-screen" : "w-screen"} relative`}>
              
            <div className="absolute z-10 top-0 left-0 w-full p-4 py-2  flex items-center justify-between bg-white dark:bg-slate-900 border-b dark:border-slate-800">
              <div onClick={toggleMenu} className={` transition-all duration-300  right-0 relative `}>
                <Menu />
              </div>

              <div className=" flex items-center gap-0.5">
                <div className="flex text-sm flex-col scale-90" style={{width: "clac(100% - 20px)"}}>
                  <span className="font-bold">
                    {"Adeniyi David Shalom".length > 32 ? `${"Adeniyi David Shalom".substring(0, 32)}...` : "Adeniyi David Shalom"}
                  </span>
                  <span className="opacity-50 leading-none">@oregon</span>
                </div>
                <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
                  <img src={"/images/avatar-1.jpg"} className="h-full w-full object-cover" />
                </div>
              </div>
            </div>

            <div className="h-16"></div>

            <div className="h-screen overflow-y-scroll w-full">

              <div className="w-full p-3 max-w-[1200px] mx-auto">


                <Outlet context={{ menu }} />
      
              </div>

              <div className="h-20"></div>


            </div>
    
    
          </div>
        </div>
      </div>
    )
}

export default Feedlayout