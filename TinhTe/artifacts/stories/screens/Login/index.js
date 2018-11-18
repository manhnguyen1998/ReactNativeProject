import * as React from "react";
import { Image, } from "react-native";
import { Container, Content, Header, Body, Button, Text, View, Footer, Left, Right, Radio } from "native-base";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { signIn: true, signUp: false, formValue: "loginForm" };
    }
    render() {
        let formPage;
        if (this.state.signIn == true) {
            formPage = this.props.loginForm;
        }
        else {
            formPage = this.props.signUpForm;
        }
        return (React.createElement(Container, null,
            React.createElement(Header, null,
                React.createElement(Left, null),
                React.createElement(Body, { style: { flex: 3 } }),
                React.createElement(Right, null)),
            React.createElement(Content, null,
                formPage,
                React.createElement(View, { style: { flexDirection: "row", justifyContent: "center", marginTop: 20 } },
                    React.createElement(Radio, { color: "#f0ad4e", selectedColor: "#5cb85c", selected: this.state.signIn, onPress: () => this.setState({ signIn: true, signUp: false }) }),
                    React.createElement(Text, { style: { marginLeft: 10 } }, "Dang nhap"),
                    React.createElement(Radio, { color: "#f0ad4e", selectedColor: "#5cb85c", selected: this.state.signUp, style: { marginLeft: 10 }, onPress: () => this.setState({ signIn: false, signUp: true }) }),
                    React.createElement(Text, { style: { marginLeft: 10 } }, "Dang ky")),
                React.createElement(View, { padder: true },
                    React.createElement(Button, { block: true, onPress: () => this.props.onLogin() },
                        React.createElement(Text, null, "Login")))),
            React.createElement(Footer, { style: { backgroundColor: "#F8F8F8" } },
                React.createElement(View, { style: { alignItems: "center", opacity: 0.5, flexDirection: "row" } },
                    React.createElement(View, { padder: true },
                        React.createElement(Text, { style: { color: "#000" } }, "Made with love at ")),
                    React.createElement(Image, { source: { uri: "https://geekyants.com/images/logo-dark.png" }, style: { width: 422 / 4, height: 86 / 4 } })))));
    }
}
export default Login;
//# sourceMappingURL=index.js.map