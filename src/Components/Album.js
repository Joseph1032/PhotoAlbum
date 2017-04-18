//Individual Albums with corresponding Images

import React from 'react'
import AlbumData from './data.json'
import { Link } from 'react-router-dom' 


class Album extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: AlbumData.albums.filter(album=>{
				return Number (album.id) === Number(this.props.match.params.albumId)
			})[0].name,
			photos: AlbumData.photos.filter(photo=>{
				return Number (photo.albumid) === Number(this.props.match.params.albumId)
			})
		}
	}
	componentWillReceiveProps(props) {
		this.setState({
		album: AlbumData.albums.filter(album=>{
				return Number(album.id) === Number(props.match.params.albumId)
			})[0].name,
		photos: AlbumData.photos.filter(photo=>{
				return Number (photo.albumid) === Number(props.match.params.albumId)
			})
		})
	}
	handleBack = (e) => {
		e.preventDefault()
		this.props.history.push("/")
	}

	render() {
			return (
				<div>
					 	<div>
						{AlbumData.albums.map(album=>(
							<Link key={'nav' + album.id} to={"/album/" + album.id}>
							 <ul>
							 	<li className="albumNav">{album.name}</li>
							 </ul>
							</Link>
						))}
					</div>
					<button onClick={this.handleBack}>Home</button>
					 {this.state.photos.map(photo=>(
					 <Link key={'photolink' + photo.id} to={'/photo/' + photo.id}>
					 	<div id="pics"><img alt='y' src={photo.gallery} /></div>
					 </Link>
					 ))}		
				</div>
			)
		}
}
export default Album

	
	

	// handleBack(e) {
	// 	e.preventDefault()
	// 	this.props.history.push("/")
	// },
	
