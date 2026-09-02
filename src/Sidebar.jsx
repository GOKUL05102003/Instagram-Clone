
function Sidebar() {
    return (
        <div>
            <div className="side1">
                <img src="src\assets\textlogo.jpg" className="textLogo" alt="Insta text" />
                <div><i className="bi bi-house"></i>Home</div>
                <div><i className="bi bi-search"></i>Search</div>
                <div><i className="bi bi-compass"></i>Explore</div>
                <div><i className="bi bi-file-play"></i>Reels</div>
                <div><i className="bi bi-chat"></i>Message</div>
                <div><i className="bi bi-heart"></i>Notification</div>
                <div><i className="bi bi-plus-square"></i>Create</div>
                <div><i className="bi bi-person-circle"></i>Profile</div>
            </div>
            <div className="side2">
                <div><i className="bi bi-threads"></i>Treads</div>
                <div><i className="bi bi-list"></i>More</div>
            </div>

        </div>
    )
}
export default Sidebar