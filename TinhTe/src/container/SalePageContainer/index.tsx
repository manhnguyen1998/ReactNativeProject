import * as React from "react";
import SalePage from "../../stories/screens/SalePage";
export interface Props {
	navigation: any,
}
export interface State {}
export default class SalePageContainer extends React.Component<Props, State> {
	render() {
		return <SalePage navigation={this.props.navigation} />;
	}
}
