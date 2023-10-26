import MemberComponent from "../components/MemberComponent/MemberComponent";

import "./NewsFeedPage.scss";

import GroupComponent from "../components/GroupComponent/GroupComponent";
import Post from "../components/Post/Post";
import AchievementComponent from "../components/AchievementComponent/AchievementComponent";
import Dropdown from "../components/Dropdown/Dropdown";

function MainPage() {
  const users = [
    {
      id: crypto.randomUUID(),
      username: "Sandra Strange",
      verified: true,
      level: 1,
      tag: "sanstrange",
      avatar: "https://robohash.org/sandra",
    },
    {
      id: crypto.randomUUID(),
      username: "Rosie Sakura",
      verified: false,
      level: 4,
      tag: "sakuraro",
      avatar: "https://robohash.org/sakuraro",
    },
    {
      id: crypto.randomUUID(),
      username: "Damian Greyson",
      verified: false,
      level: 1,
      tag: "dgreyson",
      avatar: "https://robohash.org/damian",
    },
    {
      id: crypto.randomUUID(),
      username: "The Green Goo",
      verified: false,
      level: 1,
      tag: "greengoo",
      avatar: "https://robohash.org/green",
    },
    {
      id: crypto.randomUUID(),
      username: "Bearded Wonder",
      verified: false,
      level: 2,
      tag: "brdwander",
      avatar: "https://robohash.org/wonder",
    },
  ];

  const groups = [
    {
      id: crypto.randomUUID(),
      title: "Street Artists",
      size: 4,
      image:
        "https://random.imagecdn.app/v1/image?width=50&height=50&category=street",
      public: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Cosplayers of the World",
      size: 3,
      image:
        "https://random.imagecdn.app/v1/image?width=50&height=50&category=cosplayers",
      public: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Stream Designers",
      size: 3,
      image:
        "https://random.imagecdn.app/v1/image?width=50&height=50&category=stream",
      public: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Gaming Watchtower",
      size: 3,
      image:
        "https://random.imagecdn.app/v1/image?width=50&height=50&category=gaming",
      public: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Living in Japan",
      size: 2,
      image:
        "https://random.imagecdn.app/v1/image?width=50&height=50&category=japan",
      public: true,
    },
  ];

  const posts = [
    {
      id: crypto.randomUUID(),
      type: "reply",
      topic: "Welcome to the Cosplayers Group Forum!",
      forum: "Cosplayers Group Forum",
      user: {
        username: "Marina Valentine",
        verified: true,
        membership: "pro",
        profileImage: "https://robohash.org/marin",
        level: 4,
      },
      content: "Hello everyone!",
      image: null,
      reactions: [
        {
          count: 1,
          symbol: "excited",
        },
      ],
      comments: [],
      shares: 0,
      timestamp: 1659522461000,
    },
    {
      id: crypto.randomUUID(),
      type: "reply",
      topic: "Welcome to the Cosplayers Group Forum!",
      forum: "Cosplayers Group Forum",
      user: {
        username: "Marina Valentine",
        verified: true,
        membership: "pro",
        profileImage: "https://robohash.org/marina",
        level: 4,
      },
      content: "Hello everyone!",
      image:
        "https://random.imagecdn.app/v1/image?width=400&height=150&category=mountain",
      reactions: [
        {
          count: 1,
          symbol: "excited",
        },
      ],
      comments: [],
      shares: 0,
      timestamp: 1659522461000,
    },
    {
      id: crypto.randomUUID(),
      type: "reply",
      topic: "Welcome to the Cosplayers Group Forum!",
      forum: "Cosplayers Group Forum",
      user: {
        username: "Marina Valentine",
        verified: true,
        membership: "pro",
        profileImage: "https://robohash.org/marina",
        level: 4,
      },
      content: "Hello everyone!",
      image:
        "https://random.imagecdn.app/v1/image?width=500&height=150&category=supercars",
      reactions: [
        {
          count: 1,
          symbol: "excited",
        },
      ],
      comments: [],
      shares: 0,
      timestamp: 1659522461000,
    },
    {
      id: crypto.randomUUID(),
      type: "reply",
      topic: "Welcome to the Cosplayers Group Forum!",
      forum: "Cosplayers Group Forum",
      user: {
        username: "Marina Valentine",
        verified: true,
        membership: "pro",
        profileImage: "https://robohash.org/marina",
        level: 4,
      },
      content: "Hello everyone!",
      image:
        "https://random.imagecdn.app/v1/image?width=500&height=150&category=plain",
      reactions: [
        {
          count: 1,
          symbol: "excited",
        },
      ],
      comments: [],
      shares: 0,
      timestamp: 1659522461000,
    },
  ];

  const quests = [
    {
      id: crypto.randomUUID(),
      title: "Posting Machine",
      description: "Posted more than 20 profile activities in one day",
      image: "",
    },
    {
      id: crypto.randomUUID(),
      title: "Social Connector",
      description: "Connected with at least 50 different users on the platform",
      image: "",
    },
    {
      id: crypto.randomUUID(),
      title: "Content Creator",
      description: "Published 10 unique articles or blog posts on the platform",
      image: "",
    },
    {
      id: crypto.randomUUID(),
      title: "Discussion Starter",
      description: "Initiated 30 meaningful discussions in community forums",
      image: "",
    },
    {
      id: crypto.randomUUID(),
      title: "Event Enthusiast",
      description: "Attended 5 or more platform-hosted events or webinars",
      image: "",
    },
    {
      id: crypto.randomUUID(),
      title: "Loyal Supporter",
      description:
        "Provided helpful answers to 100 user questions in the support forum",
      image: "",
    },
  ];

  const badges = [
    {
      id: crypto.randomUUID(),
      title: "Globe Trotter",
      description: "Has joined at least 10 different groups",
      image: "",
    },
    {
      id: crypto.randomUUID(),
      title: "Veteran Contributor",
      description:
        "Has consistently contributed to the platform for over 2 years",
      image: "",
    },
    {
      id: crypto.randomUUID(),
      title: "Helpful Mentor",
      description:
        "Recognized for providing assistance and guidance to new users",
      image: "",
    },
    {
      id: crypto.randomUUID(),
      title: "Tech Guru",
      description: "Acknowledged for expertise in technology-related topics",
      image: "",
    },
    {
      id: crypto.randomUUID(),
      title: "Community Champion",
      description:
        "Has demonstrated outstanding support and engagement within the community",
      image: "",
    },
    {
      id: crypto.randomUUID(),
      title: "Content Creator Extraordinaire",
      description:
        "Recognized for consistently producing high-quality content on the platform",
      image: "",
    },
  ];

  return (
    <>
      <section className="content-left-side">
        <article className="side-content">
          <h2 className="side-content__header">Newest Members</h2>
          {users.map((user) => (
            <MemberComponent key={user.id} user={user} />
          ))}
        </article>
        <article className="side-content quests">
          <h2 className="side-content__header">Quests</h2>
          <ul>
            {quests.map((quest) => {
              return (
                <AchievementComponent key={quest.id} achievement={quest} />
              );
            })}
          </ul>
        </article>
      </section>

      <section className="content-mid">
        <article className="select-content">
          <p className="select-content__all">All Updates</p>
          <Dropdown btnText={"Everything"} />
        </article>
        <article className="posts-content">
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </article>
      </section>

      <section className="content-right-side">
        <article className="side-content">
          <h2 className="side-content__header">Popular Groups</h2>
          {groups.map((group) => {
            return <GroupComponent key={group.id} group={group} />;
          })}
        </article>
        <article className="side-content">
          <h2 className="side-content__header badges">Badges</h2>
          <ul>
            {badges.map((badge) => {
              return (
                <AchievementComponent key={badge.id} achievement={badge} />
              );
            })}
          </ul>
        </article>
      </section>
    </>
  );
  // <div><img src={newsfeedImage} alt="" /></div>
}

export default MainPage;
