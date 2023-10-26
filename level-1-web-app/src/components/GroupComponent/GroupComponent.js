import "./GroupComponent.scss";

function GroupComponent ({group}) {
    

    return (
        <div className="group">
            <img src={group.image} alt="" className="group__image hexagon-container" />
            <div className="group__wrapper">
                <p className="group__title">{group.title}</p>
                <p className="group__members">{group.size} members</p>
            </div>
            {/* add classname */}
            <div className={group.public ? "group__public" : "group__private"}></div>
        </div>
    )
}

export default GroupComponent;