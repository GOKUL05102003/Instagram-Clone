import {useEffect, useState} from 'react'
function Stories(){
    const [story,setStory]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/stories").
        then((data)=>data.json()).
        then(data=>setStory(data)).
        catch(err=>console.log(err))
    },[])
    return(
        <div >
            <div className="stories">
                {story.length>0?(
                    <div className='mainStory'>
                        {story.map((str)=>(
                            <div key={str.id} className='singleStory'>
                                <img src={str.userAvatar} className={str.isStory?'hasStory':'storyAvatar'} alt="avatar" />
                                <p>{str.username}</p>
                            </div>
                        ))}
                    </div>
                    ):(<p>Loading</p>)
                }
            </div>
        </div>
    )
}
export default Stories