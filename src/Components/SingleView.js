import React from 'react'
import AlbumData from './data.json'

class Single extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			photo:AlbumData.photos.filter(photo =>{
				return Number(photo.id) === Number(this.props.match.params.photoId)
			})[0]
		}
	}
	handleBack = (e) => {
		e.preventDefault()
		this.props.history.goBack()
	}
	render() {
		return(
			<div>
				<button onClick={this.handleBack}>Back</button>
				<img alt='z' src={this.state.photo.gallery}/>				
			</div>	
		)
	}	
}
	
export default Single