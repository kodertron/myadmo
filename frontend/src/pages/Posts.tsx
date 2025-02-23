import PostCard from "@/components/Posts/PostCard"

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

  return (
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
  )
}

export default Posts