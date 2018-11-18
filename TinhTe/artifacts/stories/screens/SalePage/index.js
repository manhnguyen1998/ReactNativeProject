import * as React from "react";
import { WebView } from "react-native";
import { Container, Header, Title, Text, Button, Left, Right, Body } from "native-base";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
class SalePage extends React.Component {
    render() {
        return (React.createElement(Container, null,
            React.createElement(Header, { style: { backgroundColor: "#fff" } },
                React.createElement(Left, { style: { flexDirection: "row", flex: 1 } },
                    React.createElement(Button, { transparent: true },
                        React.createElement(MaterialCommunityIcon, { name: "chevron-left", style: { fontSize: 22, color: "#000" } })),
                    React.createElement(Button, { transparent: true },
                        React.createElement(MaterialCommunityIcon, { name: "chevron-right", style: { fontSize: 22, color: "#000" } }))),
                React.createElement(Body, { style: { flex: 3, flexDirection: "column", alignItems: "center", flexWrap: "wrap" } },
                    React.createElement(Title, { style: { color: "#000" } }, "Khuyen mai"),
                    React.createElement(Text, { style: { fontSize: 9 } }, "https://tinhte.vn/threads/ipad-pro-2018-rat-de-bi-be-gay.2878645")),
                React.createElement(Right, null,
                    React.createElement(Button, { transparent: true },
                        React.createElement(MaterialCommunityIcon, { name: "reload", style: { fontSize: 22, color: "#000" } })),
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.goBack() },
                        React.createElement(MaterialCommunityIcon
                        // active
                        , { 
                            // active
                            name: "close", style: { fontSize: 22, color: "#000" } })))),
            React.createElement(WebView
            // useWebKit={true}
            // javaScriptEnabled={false}
            , { 
                // useWebKit={true}
                // javaScriptEnabled={false}
                source: {
                    uri: 'https://tinhte.vn/threads/ipad-pro-2018-rat-de-bi-be-gay.2878645',
                }, 
                // style={{marginTop: 20}}
                scalesPageToFit: true })));
    }
}
export default SalePage;
//# sourceMappingURL=index.js.map