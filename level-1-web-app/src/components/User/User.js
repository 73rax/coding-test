import "./User.scss";

function User({user}) {
    const {username, verified, membership} = user;

  return (
    <div className="user__wrapper">
      <h3 className="user__username">{username}</h3>
      <div className={verified ? "user__verified" : ""}></div>
      <div className={membership === "pro" ? "user__pro-mobile" : "user__none"}>Pro</div>
      <div className={membership === "pro" ? "user__pro-desktop" : "user__none"}>Pro Member</div>
    </div>
  );
}

export default User;
