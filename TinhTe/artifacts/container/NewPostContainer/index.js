import * as React from "react";
import { connect } from "react-redux";
import NewPost from "../../stories/screens/NewPost";
import datas from "../HomeContainer/data";
import { fetchList } from "../HomeContainer/actions";
class NewPostContainer extends React.Component {
    componentDidMount() {
        this.props.fetchList(datas);
    }
    render() {
        return React.createElement(NewPost, { navigation: this.props.navigation, list: this.props.data });
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
//# sourceMappingURL=index.js.map