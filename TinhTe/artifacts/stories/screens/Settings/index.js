import * as React from "react";
import { TouchableOpacity } from "react-native";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, List, ListItem, View, CheckBox } from "native-base";
import styles from "./styles";
class BlankPage extends React.Component {
    render() {
        const list = [
            "Trang bat dau",
            "Chu de hien tai",
            "Co chu hien tai",
            "So bai moi trang",
        ];
        const param = this.props.navigation.state.params;
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.goBack() },
                        React.createElement(Icon, { name: "ios-arrow-back" }))),
                React.createElement(Body, { style: { flex: 3 } },
                    React.createElement(Title, null, param ? param.name.item : "Cai dat")),
                React.createElement(Right, null)),
            React.createElement(Content, { style: styles.content },
                React.createElement(Text, { style: { marginLeft: 20 } }, "Cai dat chung"),
                React.createElement(List, null, list.map((item, i) => (React.createElement(ListItem, { style: { width: "96%", marginLeft: 10, marginRight: 15, paddingLeft: 10, marginTop: 10, backgroundColor: "#fff", paddingBottom: 6 }, key: i, onPress: () => this.props.navigation.navigate("BlankPage", {
                        name: { item }
                    }) },
                    React.createElement(View, { style: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", flex: 1 } },
                        React.createElement(Text, null, item)))))),
                React.createElement(Text, { style: { marginLeft: 20 } }, "Thong bao"),
                React.createElement(TouchableOpacity, { style: { flexDirection: "row", justifyContent: "space-between" } },
                    React.createElement(Text, { style: { marginLeft: 20 } }, "Nhan thong bao"),
                    React.createElement(CheckBox, { checked: true, style: { left: -20 } })),
                React.createElement(Text, { style: { marginLeft: 20 } }, "Cai dat"),
                React.createElement(TouchableOpacity, { style: { flexDirection: "row", justifyContent: "space-between" } },
                    React.createElement(Text, { style: { marginLeft: 20 } }, "Hien thi noi dung bo qua"),
                    React.createElement(CheckBox, { checked: false, style: { left: -20 } })))));
    }
}
export default BlankPage;
//# sourceMappingURL=index.js.map