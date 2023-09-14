import User from '../user/User';
import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faDownload, faRetweet } from '@fortawesome/free-solid-svg-icons';

const Post = ({ author, date, content, image, isVerified }) => {
    return (
        <div className="post-wrapper">
            <div className="post-header">
                <User user={author} isVerified={isVerified} />
                <div className="post-additional-info">
                    {author.nickname && 
                        <h6>{author.nickname}</h6>}
                    {date && 
                        <h6>{date}</h6>}
                </div>
            </div>
            <div className="post-info">
                <h6 className="post-content">{content}</h6>
                <img src={image} alt={author.name}/>
                <div className="post-icons">
                    <FontAwesomeIcon icon={faComment} size="sm" />
                    <FontAwesomeIcon icon={faRetweet} size="sm" />
                    <FontAwesomeIcon icon={faHeart} size="sm" />
                    <FontAwesomeIcon icon={faDownload} size="sm" />
                </div>
            </div>
        </div>
    )
}

export default Post;