// Home Page with Album List

import React from 'react'; 
import AlbumData from './data.json'
import '../App.css'
import { Link } from 'react-router-dom'

export default React.createClass({
  render () {
    return ( 

     <div id="container">
			<h1>My Albums</h1>
		{AlbumData.albums.map(album=>(
				<Link key={'gallery' + album.id} to={'/album/' + album.id}>
					<img alt='x' src={album.coverphoto_url} />
				</Link>		
		))}
	</div>
    )
  }
})