// Home Page with Album List

import React from 'react'; 
import AlbumData from './data.json'
import '../App.css'
import { Link } from 'react-router-dom'

class Albums extends React.Component {
	constructor() {
		super()
		this.state = {
			albums:AlbumData.albums
		}
	}

	render () {
    return ( 
	     <div>
				<h1>My Albums</h1>
			<div className="grid">
			{this.state.albums.map(album=>(
				<div key={'album' + album.id}>
					<Link key={'gallery' + album.id} to={'/album/' + album.id}>
						<img alt={album.name} src={album.coverphoto_url}/>

					</Link>	
				</div>	
			))}
			</div>
		</div>
	    )
	}
}

export default Albums
