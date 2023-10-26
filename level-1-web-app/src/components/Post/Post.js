import User from "../User/User";
import UserProfilePicture from "../UserProfilePicture/UserProfilePicture";
import { formatDistanceToNowStrict } from "date-fns";
import "./Post.scss";
import Reaction from "../Reaction/Reaction";

function Post({ post }) {
  const { reactions } = post;

  const options = {
    addSuffix: true,
  };

  const result = formatDistanceToNowStrict(new Date(post.timestamp), options);

  return (
    <section className="post">
      <article className="post__header">
        <UserProfilePicture avatar={post.profileImage} />
        <div className="post__header-wrapper">
          <div>
            {<User user={post.user} />} replied to the topic{" "}
            <span>{post.topic}</span> in the forum <span>{post.forum}</span>
          </div>

          <p className="post__timestamp">{result}</p>
        </div>
      </article>

      <p className="post__content">{post.content}</p>
      <img src={post.image} className={post.image ? "post__image" : ""} />
      <article className="post-footer">
        <div className="post-footer__reactions">
          {reactions.map((reaction) => {
            return <Reaction reaction={reaction} />;
          })}
        </div>
        <div className="post-footer__wrapper">
          <p>{`${post.comments.length} Comments`}</p>
          <p>{`${post.shares} Shares`}</p>
        </div>
      </article>
    </section>
  );
}

export default Post;
