import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Left, Body, 
// Icon,
Right, View, List, ListItem } from "native-base";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./styles";
class Forum extends React.Component {
    render() {
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true },
                        React.createElement(Icon
                        // active
                        , { 
                            // active
                            name: "menu", style: { fontSize: 22, color: '#fff' }, onPress: () => this.props.navigation.navigate("DrawerOpen") }))),
                React.createElement(Body, null,
                    React.createElement(Title, { style: { marginLeft: -20 } }, "Dien dan")),
                React.createElement(Right, null,
                    React.createElement(Button, { transparent: true },
                        React.createElement(Icon
                        // active
                        , { 
                            // active
                            name: "login", style: { fontSize: 22, color: '#fff' }, onPress: () => this.props.navigation.navigate("Login") })),
                    React.createElement(Button, { transparent: true },
                        React.createElement(Icon
                        // active
                        , { 
                            // active
                            name: "magnify", style: { fontSize: 22, color: '#fff' } })))),
            React.createElement(Content, { style: styles.content },
                React.createElement(List, null, this.props.list.map((item, i) => (React.createElement(ListItem, { style: { width: "96%", marginLeft: 10, marginRight: 15, paddingLeft: 10, marginTop: 10, backgroundColor: "#fff", paddingBottom: 6 }, key: i, onPress: () => this.props.navigation.navigate("BlankPage", {
                        name: { item }
                    }) },
                    React.createElement(View, { style: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", flex: 1 } },
                        React.createElement(Icon
                        // active
                        , { 
                            // active
                            name: "folder", style: { fontSize: 25, color: '#000', marginRight: 10 } }),
                        React.createElement(Text, { style: { marginLeft: -140, width: 150 } }, item),
                        React.createElement(Icon
                        // active
                        , { 
                            // active
                            name: "dots-vertical", style: { fontSize: 25, color: '#000', marginLeft: 10 } })))))))));
    }
}
export default Forum;
//# sourceMappingURL=index.js.map