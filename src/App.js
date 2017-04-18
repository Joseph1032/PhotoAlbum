 //Command Center

import React from 'react'; 
import Albums from './Components/Albums'
import Single from './Components/SingleView'
import Album from './Components/Album'

import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component{
 
  render() {
    return ( 
        <Router>
        <div>
            <Route exact={true} path="/" component={Albums} />
            <Route path="/album/:albumId" component={Album} />
            <Route path="/photo/:photoId" component={Single} />
        </div>
        </Router>
    )
  }
}

export default App