import { Ellipsis, Eye, MessageSquareText, ThumbsDown, ThumbsUp } from "lucide-react";
import ImageGrid from "./ImageGrid";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

interface CommentCardProps {
  user: {
    avatar: string;
    username: string;
    fullname: string;
    timestamp: string;
  };
  text: string | null;
  images: string[] | null;
  videoUrl: string | null;
  interactions: {
    views: number;
    likes: number;
    dislikes: number;
    comments: number;
  };
}

const CommentCard = ({ user, text, images, videoUrl, interactions }: CommentCardProps) => {
  return (
    <div className="post-card  border-t p-4 dark:border-gray-600">
      <div className="top flex justify-between">
        <div className="flex">
          <div className="h-[50px] w-[50px] rounded-full border-blue-500 border-2 overflow-hidden scale-90">
            <img src={user.avatar} className="h-full w-full object-cover" />
          </div>
          <div className="name scale-90">
            <div className="username font-medium">@{user.username}</div>
            <div className="fullname text-xs font-medium opacity-40">{user.fullname}</div>
            <div className="timestamp text-xs font-medium opacity-30">{user.timestamp}</div>
          </div>
        </div>
        <div className="options">
          <div className="icon">
            <Ellipsis />
          </div>
        </div>
      </div>

      {text &&
      
        <div className="text mt-2 px-2">
            <p className="font-medium">
              {text}
            </p>
        </div>
      }
      {images && 
        <div className="images mt-4">
            <ImageGrid images={images} />
        </div>
      }
      {videoUrl && 
        <div className="video mt-4">
            <ReactPlayer 
                style={{background: "#222"}}
                width={"100%"}
                url={videoUrl} 
            />
        </div>
      }

      <div className="interactions mt-4 flex items-center gap-4">
        {[
          {
            icon: <Eye size={20} strokeWidth={2.4}/>,
            value: interactions.views,
          },
          {
            icon: <ThumbsUp size={15} strokeWidth={3}/>,
            value: interactions.likes,
            color: "hover:text-blue-600",
          },
          {
            icon: <ThumbsDown size={15} strokeWidth={3}/>,
            value: interactions.dislikes,
            color: "hover:text-orange-600",
          },
          {
            icon: <MessageSquareText size={16} strokeWidth={3}/>,
            value: interactions.comments,
            color: "hover:text-blue-600",
            link: "/post"
          },
        ].map( (item, index) => 
          item.link ? 
            <Link to={item.link} key={index} className={"flex items-center gap-1 text-gray-600 " + item.color}>
              <div className="icon">
                {item.icon}
              </div>
              <div className="value text-sm font-bold">
                {item.value}
              </div>
            </Link>
          :
            <div key={index} className={"flex items-center gap-1 text-gray-600 " + item.color}>
              <div className="icon">
                {item.icon}
              </div>
              <div className="value text-sm font-bold">
                {item.value}
              </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default CommentCard;