import "./UserProfilePicture.scss";

function UserProfilePicture({ avatar }) {
  

  return (
    <>
    <div className="hexagon-container">
      <img className="users-avatar" src={avatar} alt="User profile picture" />

    </div>
    </>
  )
   
  ;
}

export default UserProfilePicture;
