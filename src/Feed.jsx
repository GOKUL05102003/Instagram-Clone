import Post from "./Post"
import Stories from "./Stories"

function Feed(){
    return(
        <div>
            <div>
                <div><Stories/></div>
                <div><Post/></div>
            </div>
        </div>
    )
}
export default Feed