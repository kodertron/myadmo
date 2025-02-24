import { ChatInput } from "@/components/Posts";
import { ArrowLeft, ChevronDown, Search } from "lucide-react"
import { useState } from "react";

const users = [
  {
      image: "/images/app-store.png",
      user: {
          name: "Adeniyi David",
          image: "/images/avatar-1.jpg"
      },
      live: 123
  },
  {
      image: "/images/globe.jpg",
      user: {
          name: "Jane Doe",
          image: "/images/avatar-2.png"
      },
      live: 456
  },
  {
      image: "/images/avatar-1.jpg",
      user: {
          name: "John Smith",
          image: "/images/avatar-3.png"
      },
      live: 789
  },
  {
      image: "/images/avatar-2.png",
      user: {
          name: "Alice Johnson",
          image: "/images/avatar-4.png"
      },
      live: 101
  },
  {
      image: "/images/avatar-3.png",
      user: {
          name: "Bob Brown",
          image: "/images/avatar-5.png"
      },
      live: 202
  },
  {
      image: "/images/avatar-4.png",
      user: {
          name: "Charlie Davis",
          image: "/images/avatar-6.png"
      },
      live: 303
  },
  {
      image: "/images/avatar-3.png",
      user: {
          name: "Diana Evans",
          image: "/images/avatar-3.png"
      },
      live: 404
  },
  {
      image: "/images/avatar-6.png",
      user: {
          name: "Ethan Foster",
          image: "/images/avatar-4.png"
      },
      live: 505
  },
  {
      image: "/images/avatar-1.png",
      user: {
          name: "Fiona Green",
          image: "/images/avatar-1.jpg"
      },
      live: 606
  },
  {
      image: "/images/avatar-2.png",
      user: {
          name: "George Harris",
          image: "/images/avatar-2.png"
      },
      live: 707
  }
];

const Messages = () => {

  const [menu, setMenu] = useState(false);
  const [lower, setLower] = useState(false);

  return (
    <div className="w-full overflow-hidden" style={{height: "calc(100vh - 40px)"}}>
        <div className="flex h-full w-full relative">

            <div className={`w-[320px] max-[800px]:absolute top-0 left-0 z-20 ${menu ? "max-[800px] -left-[320px]" : " left-0"} z-10 bg-white dark:bg-slate-900 h-full overflow-y-scroll border-r dark:border-slate-800`}>

              <div className="p-3">
                <h3 className="font-medium opacity-60">Messages</h3>
                <div className="flex flex-col relative mt-1.5">
                  <input 
                    type="text" 
                    className="dark:bg-slate-900 dark:border-slate-800 border rounded-lg h-[30px] pl-8 outline-none text-xs"
                    placeholder="Search"
                  />
                  <div className="absolute top-0 left-0 flex items-center justify-center h-full w-8">
                    <Search size={16}/>
                  </div>
                </div>
              </div>

              <div className="mt-3 ">
                {users.map( (user, index) => 
                  <div  onClick={() => setMenu(!menu)} key={index} className="border-b dark:border-slate-800 first-of-type:border-t">
                    <div className="flex w-full gap-1.5 hover:bg-gray-100 dark:hover:bg-slate-800 p-2.5 px-3 cursor-pointer">
                      <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
                        <img src={user.user.image} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex flex-col ml-3 text-xs " style={{width: "calc(100% - 40px)"}}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold">{user.user.name}</span>
                          <span className="opacity-50 text-xs">12:00 PM</span>
                        </div>
                        <span className="opacity-50">Hey, how are you?</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div onClick={() => setMenu(!menu)} className="absolute z-10 top-[10px] left-3 h-[40px] w-[40px] scale-75 rounded-full border dark:border-slate-800 flex items-center justify-center">
              <ArrowLeft />
            </div>

            <div className="w-full-300 max-[800px]:w-full h-full relative">

              <div className="" style={{height: "calc(100% - 120px)"}}>
                <div className="h-full w-full flex flex-col text-center items-center justify-center">
                  <div className="h-[100px] w-[200px]">
                    <img src="/images/logo-white.png" alt="" className="h-full w-full object-cover opacity-10 hidden dark:block" />
                    <img src="/images/logo-blue.png" alt="" className="h-full w-full object-cover opacity-20 dark:hidden" />
                  </div>
                  <div className="text-sm opacity-20 -mt-4">Start Chatting Now, every interaction counts</div>
                </div>
              </div>
            
              <div className={`flex flex-col border-t dark:border-slate-800 w-full h-[120px] p-1.5 absolute ${lower ? "bottom-0" : "bottom-[60px]"} left-0 transition-all duration-300`}>
                <ChatInput />
                <div onClick={() => setLower(!lower)} className={`lower h-[45px] w-[45px] rounded-full border dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center scale-75 absolute -top-6 right-2 cursor-pointer`}>
                  <ChevronDown />
                </div>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default Messages