import React from 'react'
import AlbumData from './data.json'

export default React.createClass({
	getInitialState() {
		return {
		album: AlbumData.albums.photo.filter(photo=>{
				return Number(photo.id) === Number(this.props.match.params.photoId)
			})[0]
		} 
	},
	render() {
		return(
			<div>
			{this.state.album.photos.id.map(view=>(
				<img alt='z' src={"gallery"}/>
				))}
				
			}
			</div>
		)
	}
})