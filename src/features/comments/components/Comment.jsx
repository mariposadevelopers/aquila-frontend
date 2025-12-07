import { Trash } from "lucide-react"
import { useAuth } from "../../../shared/context/AuthContext"
const Comment = ({ comment, onDelete }) => {

    const {user} = useAuth(); 
    const commenterName = comment.unidentifiedUsername 
        ? comment.unidentifiedUsername 
        : (comment.user?.username || 'Anonymous');
    return (
        <div key={comment._id} className="flex justify-between border-b border-gray-200 py-3 ">
            <div className='comment-content'>
                <p className="text-gray-800">{comment.content}</p>
                <small className="text-gray-500">
                    {commenterName} –{' '}
                    {new Date(comment.createdAt).toLocaleDateString()}
                </small>
            </div>
            {user && (
                <div className='actions'>
                    <Trash
                        onClick={() => onDelete(comment._id)}
                        className='cursor-pointer' />
                </div>
            )}

        </div>
    )
}

export default Comment
