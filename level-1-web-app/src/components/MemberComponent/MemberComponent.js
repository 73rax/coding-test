import User from "../User/User";
import UserProfilePicture from "../UserProfilePicture/UserProfilePicture";

import "./MemberComponent.scss";

function MemberComponent ({user}) {

    return (
        <div className="users">
            
            <UserProfilePicture avatar={user.avatar}/>
            <div className="users__container">

                <User user = {user} />                
                <p className="users__tag">@{user.tag}</p>
            </div>

        </div>
    )
}

export default MemberComponent;