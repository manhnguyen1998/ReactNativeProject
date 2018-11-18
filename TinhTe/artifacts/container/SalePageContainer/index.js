import * as React from "react";
import SalePage from "../../stories/screens/SalePage";
export default class SalePageContainer extends React.Component {
    render() {
        return React.createElement(SalePage, { navigation: this.props.navigation });
    }
}
//# sourceMappingURL=index.js.map