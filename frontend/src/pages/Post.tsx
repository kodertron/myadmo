import { ChatInput } from "@/components/Posts";
import CommentCard from "@/components/Posts/CommentCard";
import PostCard from "@/components/Posts/PostCard";

const post = {
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
};

const dummyComments = [
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
];

const Post = () => {

  return (
    <div className="post">
      <PostCard
        user={post.user}
        text={post.text}
        images={post.images}
        videoUrl={post.videoUrl}
        interactions={post.interactions}
      />

      <ChatInput />

      <div className="h4 font-bold opacity-50">Comments</div>

      <div className="comments">
        {dummyComments.map((comment, index) => (
          <CommentCard
            key={index}
            user={comment.user}
            text={comment.text}
            images={comment.images}
            videoUrl={comment.videoUrl}
            interactions={comment.interactions}
          />
        ))}
      </div>

    </div>
  );
};

export default Post;