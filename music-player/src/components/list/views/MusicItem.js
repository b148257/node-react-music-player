import React, {Component} from 'react'

class MusicItem extends Component{
	render(){
		const song = this.props;

		return(
			<li>{song.id} , {song.name} , {song.artist}</li>
		)
	}
}

export default MusicItem;