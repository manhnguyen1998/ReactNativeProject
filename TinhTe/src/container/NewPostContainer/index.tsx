import * as React from "react";
import { connect } from "react-redux";
import NewPost from "../../stories/screens/NewPost";
import datas from "../HomeContainer/data";
import { fetchList } from "../HomeContainer/actions";
export interface Props {
	navigation: any;
	fetchList: Function;
	data: Object;
}
export interface State {}
class NewPostContainer extends React.Component<Props, State> {
	componentDidMount() {
		this.props.fetchList(datas);
	}
	render() {
		return <NewPost navigation={this.props.navigation} list={this.props.data} />;
	}
}

function bindAction(dispatch) {
	return {
		fetchList: url => dispatch(fetchList(url)),
	};
}

const mapStateToProps = state => ({
	data: state.homeReducer.list,
	isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(NewPostContainer);
