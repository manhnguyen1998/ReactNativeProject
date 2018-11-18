import * as React from "react";
import ContentPage from "../../stories/screens/ContentPage";
export default class ContentPageContainer extends React.Component {
    render() {
        return React.createElement(ContentPage, { navigation: this.props.navigation });
    }
}
//# sourceMappingURL=index.js.map