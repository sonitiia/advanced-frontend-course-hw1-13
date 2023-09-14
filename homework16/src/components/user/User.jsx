import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

const User = ({user, isVerified }) => {
    return (
        <div className="user-wrapper">
            <div className="user-image-wrapper">
                <img src={user.photo} alt={user.name} />
            </div>
            <h5 className="user-name">{user.name}</h5>
            {isVerified && 
                <FontAwesomeIcon icon={faCircleCheck} size="sm" />}
        </div>
    )
}

export default User