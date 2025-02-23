import { Button, HorizontalScroller } from "@/components"
import PostCard from "@/components/Posts/PostCard"
import { CirclePlus } from "lucide-react"
import { Link } from "react-router-dom"


const dummyPosts = [
  {
    user: {
      avatar: "/images/avatar-1.jpg",
      username: "user1",
      fullname: "User One",
      timestamp: "2 hours ago"
    },
    text: "This is a dummy post text for user1.",
    images: null,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    interactions: {
      views: 100,
      likes: 10,
      dislikes: 2,
      comments: 5
    }
  },
  {
    user: {
      avatar: "/images/avatar-2.png",
      username: "user2",
      fullname: "User Two",
      timestamp: "3 hours ago"
    },
    text: "This is a dummy post text for user2.",
    images: [
      "/images/avatar-5.png",
      "/images/avatar-6.png",
      "/images/globe.jpg"
    ],
    videoUrl: null,
    interactions: {
      views: 200,
      likes: 20,
      dislikes: 3,
      comments: 10
    }
  }
  // Add more dummy posts as needed
]

const Posts = ({  }) => {

  const post = {
    text: "crisis on earth what"
  }

  return (
    <div className={`  grid grid-cols-[1fr_320px] gap-3 max-[888px]:grid-cols-1 px-3`}>
  
      {/* main posts */}
      <div className="w-full max-[888px]:max-w-[700px] max-[888px]:mx-auto max-[750px]:scale-95 max-[750px]:-mt-6">

        <div>
          {/* <h1 className="font-bold text-xl mb-4">Posts</h1> */}

          <div className="posts">
            {dummyPosts.map((post, index) => (
              <PostCard
                key={index}
                user={post.user}
                text={post.text}
                images={post.images}
                videoUrl={post.videoUrl}
                interactions={post.interactions}
              />
            ))}
          </div>

        </div>

      </div>


      {/* side panel */}

      <div className="sticky max-[888px]:hidden">
        <div className="bg-white dark:bg-slate-900 dark:border-slate-800  p-4 mb-4 border rounded-lg">
          <div className="flex items-center justify-between">
            <div className="font-bold">For You</div>

            <Link to="/posts" className="text-blue-500 text-xs font-medium underline">See All</Link>
          </div>

          <HorizontalScroller>
            {["/images/globe.jpg", "/images/globe.png", "/images/avatar-2.png"].map(image => 
              <div key={image} className="w-[125px] h-[200px] bg-gray-100 dark:bg-slate-900  rounded-lg overflow-hidden relative">
                <img src={image} className="h-full w-full object-cover relative z-0" />
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black z-10">
                  <div className="absolute bottom-0 left-0 w-full p-2 text-white text-xs flex items-center gap-0.5">
                    <div className="h-[20px] w-[20px] rounded-full overflow-hidden">
                      <img src="/images/avatar-3.png" className="h-full w-full object-cover" />
                    </div>
                    <div className="flex flex-col scale-90" style={{width: "clac(100% - 20px)"}}>
                      <span className="font-bold">
                        {post.text.length > 12 ? `${post.text.substring(0, 12)}...` : post.text}
                      </span>
                      <span className="opacity-50 leading-none">@oregon</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </HorizontalScroller>
        </div>

        <div className="bg-white dark:bg-slate-900 dark:border-slate-800  p-4 mb-4 border rounded-lg">
          <div className="flex items-center justify-between">
            <div className="font-bold">Suggestions</div>
          </div>

          <div className="">
            {[
              "/images/avatar-1.jpg",
              "/images/avatar-2.png",
              "/images/avatar-3.png",
              "/images/avatar-4.png",
            ].map( image => 
              <div key={image} className=" p-2 flex items-center gap-0.5 my-2 relative">
                <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
                  <img src={image} className="h-full w-full object-cover" />
                </div>
                <div className="flex text-sm flex-col scale-90" style={{width: "clac(100% - 20px)"}}>
                  <span className="font-bold">
                    {"Adeniyi David Shalom".length > 32 ? `${"Adeniyi David Shalom".substring(0, 32)}...` : "Adeniyi David Shalom"}
                  </span>
                  <span className="opacity-50 leading-none">@oregon</span>
                </div>

                <div className="absolute top-1/2 right-0 -translate-y-1/2 scale-75 font-medium">
                  <Button.IconTextSm icon={<CirclePlus size={18} strokeWidth={2}/>} text="Follow" />
                </div>
              </div>
            )}

          </div>

          
        </div>

        <div className="bg-white dark:bg-slate-900 dark:border-slate-800  p-4 mb-4 border rounded-lg">
          <div className="flex items-center justify-between">
            <div className="font-bold">Recommended</div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            {[
              "/images/music.jpg",
              "/images/finance.webp",
              "/images/comedy.webp",
              "/images/crypto.png",
            ].map( image => 
              <div key={image} className="h-[150px] overflow-hidden rounded-2xl border dark:bg-slate-900 dark:border-slate-800 ">
                <img src={image} className="h-full w-full object-cover" />
              </div>
            )}

          </div>

          
        </div>
      </div>
  
    </div>

  )
}

export default Posts