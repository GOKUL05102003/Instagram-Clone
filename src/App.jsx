import "/src/App.css"
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import Suggestion from "./Suggestion"
function App() {

  return (
    <div className="mainContainer">
      <div className="sidebar"><Sidebar/></div>
      <div className="feed"><Feed/></div>
      <div className="suggestiion"><Suggestion/></div>     
    </div>
  )
}

export default App
