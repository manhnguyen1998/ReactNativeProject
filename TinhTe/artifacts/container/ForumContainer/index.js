import * as React from "react";
import { connect } from "react-redux";
import Forum from "../../stories/screens/Forum";
import datas from "../HomeContainer/data";
import { fetchList } from "../HomeContainer/actions";
class ForumContainer extends React.Component {
    componentDidMount() {
        this.props.fetchList(datas);
    }
    render() {
        return React.createElement(Forum, { navigation: this.props.navigation, list: this.props.data });
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
export default connect(mapStateToProps, bindAction)(ForumContainer);
//# sourceMappingURL=index.js.map