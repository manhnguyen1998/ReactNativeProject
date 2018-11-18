import * as React from "react";
import { Image } from "react-native";
import { Container, Content, Header, Body, Button, Text, View, Footer, Left, Right } from "native-base";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { language: "java" };
    }
    render() {
        return (React.createElement(Container, null,
            React.createElement(Header, null,
                React.createElement(Left, null),
                React.createElement(Body, { style: { flex: 3 } }),
                React.createElement(Right, null)),
            React.createElement(Content, null,
                this.props.loginForm,
                React.createElement(View, { padder: true },
                    React.createElement(Button, { block: true, onPress: () => this.props.onLogin() },
                        React.createElement(Text, null, "Login"))),
                React.createElement(View, { style: { flexDirection: "row", justifyContent: "center" } },
                    React.createElement(Radio, { selected: true }),
                    React.createElement(Text, null, "Discussion with Client"),
                    React.createElement(Radio, { selected: true }),
                    React.createElement(Text, null, "Discussion with Client"))),
            React.createElement(Footer, { style: { backgroundColor: "#F8F8F8" } },
                React.createElement(View, { style: { alignItems: "center", opacity: 0.5, flexDirection: "row" } },
                    React.createElement(View, { padder: true },
                        React.createElement(Text, { style: { color: "#000" } }, "Made with love at ")),
                    React.createElement(Image, { source: { uri: "https://geekyants.com/images/logo-dark.png" }, style: { width: 422 / 4, height: 86 / 4 } })))));
    }
}
export default Login;
//# sourceMappingURL=index.js.map