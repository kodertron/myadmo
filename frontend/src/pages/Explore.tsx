import { HorizontalScroller } from "@/components"
import { Link } from "react-router-dom"
import { ArrowRight, Eye } from 'lucide-react'

const lives = [
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
        image: "/images/avatar-5.png",
        user: {
            name: "Diana Evans",
            image: "/images/avatar-7.png"
        },
        live: 404
    },
    {
        image: "/images/avatar-6.png",
        user: {
            name: "Ethan Foster",
            image: "/images/avatar-8.png"
        },
        live: 505
    },
    {
        image: "/images/avatar-7.png",
        user: {
            name: "Fiona Green",
            image: "/images/avatar-9.png"
        },
        live: 606
    },
    {
        image: "/images/avatar-8.png",
        user: {
            name: "George Harris",
            image: "/images/avatar-10.png"
        },
        live: 707
    }
];

const socialMediaCategories = [
    "Gaming",
    "Music",
    "Sports",
    "News",
    "Technology",
    "Fashion",
    "Travel",
    "Food",
    "Health",
    "Education",
    "Entertainment",
    "Lifestyle",
    "Business",
    "Science",
    "Art",
    "Photography",
    "Fitness",
    "DIY",
    "Parenting",
    "Finance"
];

const Explore = () => {
  return (
    <div>
        <div className="px-3 mb-6">
            <div className="">
                <HorizontalScroller>    
                    {socialMediaCategories.map( (category, index) =>
                        <Link to={`/explore/${category}`} key={index} className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-gray-400">
                            <span>{category}</span> <ArrowRight size={16} />
                        </Link>
                    )}
                </HorizontalScroller>
            </div>
            <div className="grid-300 max-[662px]:grid-cols-2 mt-4">
                {lives.map( (live, index) => 
                    <div key={index} className=" mb-4 rounded-xl shadow-inner">
                        <div className="image h-[400px] max-[562px]:h-[230px] overflow-hidden rounded-xl shadow-2xl relative">
                            <img src={live.image} alt="" className="h-full w-full object-cover" />
                            <div className="absolute top-0 left-0 p-3">
                                <div className="rounded-xl flex bg-black text-white bg-opacity-40 overflow-hidden font-medium">
                                    <div className="text-sm h-full flex items-center justify-center bg-blue-500 p-0.5 px-2"><Eye size={20}/></div>
                                    <div className="text-sm h-full flex items-center justify-center p-0.5 px-2">123</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-0.5 mt-4 relative">
                            <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
                                <img src={live.user.image} className="h-full w-full object-cover" />
                            </div>

                            <div className="flex text-sm flex-col scale-90" style={{width: "clac(100% - 20px)"}}>
                                <span className="font-bold">
                                    {live.user.name.length > 32 ? `${live.user.name.substring(0, 32)}...` : live.user.name}
                                </span>
                                <span className="opacity-50 leading-none">@oregon</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Explore