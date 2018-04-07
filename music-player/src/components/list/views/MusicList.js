import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions.js';

import MusicItem from './MusicItem.js';
import {SUCCESS, LOADING, FAILURE} from '../status.js';

class MusicList extends React.Component {

	componentDidMount(){
		this.props.onList();
	}

	render(){
		switch(this.props.status) {
			case SUCCESS : {
				return(
					<ul>
						{
							this.props.list.map( (item) => (
								<MusicItem id={item.songid} name={item.songname} artist={item.artistname} />
							))
						}
					</ul>
				);
			}
			case LOADING : {
				return (<div>正在加载</div>)
			}
			case FAILURE : {
				return (<div>获取失败</div>)
			}
			default :
				return
		}


	}
}

const mapState = (state) => {
	const list = state.list;

	return({
		status : list.status ,
		list : list.song
	})
}

const mapDispatch = (dispatch) => {
	return {
		onList : () => {
			dispatch(actions.fetchMusicList())
		}
	}
}

export default connect(mapState, mapDispatch)(MusicList);