//Individual Albums with corresponding Images

import React from 'react'
import AlbumData from './data.json'
import { Link } from 'react-router-dom' 


export default React.createClass({
	getInitialState() {
		return {
		album: AlbumData.albums.filter(album=>{
				return Number(album.id) === Number(this.props.match.params.albumId)
			})[0]
		} 
	},
	// componentWillReceiveProps() {
	// 	this.setState({
	// 		data: AlbumData.photos.filter(photo=>{
	// 				return Number(photo.id) === Number(this.props.match.params.photos)
	// 		})[0]
	// 	})
	// },
	handleBack(e) {
		e.preventDefault()
		this.props.history.goBack()
	},
	render() {
		return (
			<div>
			 <button onClick={this.handleBack}>Go Back</button>
			 {this.state.album.photos.map(photo=>(
			 <Link to={'/album/' + photo.id}>
			 	<img alt='y' src={photo.gallery} />
			 </Link>
			 ))}		
			</div>
		)
	}
})