import * as React from "react";
import ContentPage from "../../stories/screens/ContentPage";
export interface Props {
	navigation: any,
}
export interface State {}
export default class ContentPageContainer extends React.Component<Props, State> {
	render() {
		return <ContentPage navigation={this.props.navigation} />;
	}
}
