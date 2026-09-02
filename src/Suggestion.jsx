import { useEffect, useState } from "react"

function Suggestion() {
    const [profile, setProfile] = useState(null)
    const [suggest, setSuggest] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/profile").
            then((data) => data.json()).
            then((data) => setProfile(data)).
            catch((err) => console.log(err))
        fetch("http://localhost:3000/suggestion").
            then((data) => data.json()).
            then((data) => setSuggest(data)).
            catch((err) => console.log(err))
    }, [])
    return (
        <div className="suggestion">
            {profile ? (
                <div>
                    <div className="profile">
                        <img src={profile.avatar} className="avatar" alt="" />
                        <h5>{profile.username}</h5>
                        <p>switch</p>
                    </div>
                </div>
            )
                : (<p>Loading</p>)}
            <div className="seeAll">
                <p>Suggested for you</p>
                <b>see all</b>
            </div>
            <div>
                {suggest.length>0?(
                <div>
                    {
                        suggest.map((sug) => (
                            <div key={sug.id}>
                                <div className="profile">
                                    <img className="avatar" src={sug.avatar} alt="" />
                                    <h5>{sug.username}</h5>
                                    <p>Follow</p>
                                </div>

                            </div>
                        ))
                    }
                </div>
            ):(
                <p>Loading</p>
            )}
            </div>
        </div>

    )
}
export default Suggestion