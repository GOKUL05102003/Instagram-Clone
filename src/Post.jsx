import { useEffect, useState } from "react"

function Post(){
    const [posts,setPosts]=useState([])
    
    useEffect(()=>{
        fetch("http://localhost:3000/posts").
        then((data)=>data.json()).
        then((data)=>setPosts(data)).
        catch(err=>console.log(err))
    },[])
    return(
        <div>
            <div>
                {posts.length>0 ?(
                    <div className="mainPost">
                        {
                            posts.map((post)=>(
                                <div key={post.id}>
                                    <div className="profile">
                                        <img className="avatar" src={post.user.avatar} alt="" />
                                        <h5> {post.user.username} </h5>
                                    </div>
                                    <img src={post.mediaUrl} className="postImg" alt="" />
                                    <div>
                                        <i className="bi bi-heart"></i>
                                        <i className="bi bi-chat"></i>
                                        <i className="bi bi-send"></i>
                                    </div>
                                    <div className="bold">
                                        <p>{post.likesCount} Likes</p>
                                    </div>
                                    <div>
                                        <p>{post.caption}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ):(
                    <div>Loading post</div>
                )}
            </div>
        </div>
    )
}
export default Post