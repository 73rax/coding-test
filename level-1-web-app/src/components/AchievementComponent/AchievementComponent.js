import questIcon from "../../assets/icons/quest.png";
import "./AchievementComponent.scss";

function AchievementComponent ({ achievement }) {
    const {image, title, description} = achievement

    return (
        <>
        <li className="achievement">
        <img className="achievement__icon" src={questIcon} alt="quest icon" />
        <div className="achievement__wrapper">
            <h3 className="achievement__title">{title}</h3>
            <p className="achievement__description">{description}</p>
        </div>
        </li>
        
        
        </>
    )
}

export default AchievementComponent;