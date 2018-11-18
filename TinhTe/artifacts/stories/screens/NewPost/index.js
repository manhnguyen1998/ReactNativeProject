import * as React from "react";
import { Image } from "react-native";
import { Container, Header, Title, Content, Text, Button, Left, Body, 
// Icon,
Right, View, List, ListItem } from "native-base";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./styles";
class NewPost extends React.Component {
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
                    React.createElement(Title, { style: { marginLeft: -20 } }, "Bai moi")),
                React.createElement(Right, null,
                    React.createElement(Button, { transparent: true },
                        React.createElement(Icon
                        // active
                        , { 
                            // active
                            name: "login", style: { fontSize: 22, color: '#fff' } })),
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
                    React.createElement(View, null,
                        React.createElement(View, { style: { flexDirection: "row", marginBottom: 10 } },
                            React.createElement(Image, { style: styles.img, source: require('../../../../assets/a.jpg'), resizeMode: 'cover', borderRadius: 25 }),
                            React.createElement(View, null,
                                React.createElement(Text, null, "Drchuottui"),
                                React.createElement(Text, null, "16:43"))),
                        React.createElement(Image, { style: styles.content_img, source: require('../../../../assets/a.jpg') }),
                        React.createElement(Text, { style: { fontWeight: "bold", fontSize: 21, fontFamily: "Roboto" } }, "Tai sao khong nen dung ...."),
                        React.createElement(Text, null, item),
                        React.createElement(Text, null, item),
                        React.createElement(Text, null, item),
                        React.createElement(Text, null, item),
                        React.createElement(Text, null, item),
                        React.createElement(Text, null, item),
                        React.createElement(View, { style: { flexDirection: "row", justifyContent: "space-between", marginTop: 5, marginBottom: 10 } },
                            React.createElement(Icon
                            // active
                            , { 
                                // active
                                name: "comment-outline", style: { fontSize: 17, color: '#000', width: 30, height: 30, borderRadius: 15, backgroundColor: "#ccc", paddingLeft: 6, paddingTop: 6 } }),
                            React.createElement(Text, { style: { lineHeight: 30 } }, "10"),
                            React.createElement(Icon
                            // active
                            , { 
                                // active
                                name: "heart-outline", style: { alignSelf: "flex-end", fontSize: 17, color: '#000', width: 30, height: 30, borderRadius: 15, backgroundColor: "#ccc", paddingLeft: 6, paddingTop: 6, marginLeft: 200 } }),
                            React.createElement(Text, { style: { lineHeight: 30, marginRight: 10 } }, "10"),
                            React.createElement(Icon
                            // active
                            , { 
                                // active
                                name: "share-variant", style: { fontSize: 17, color: '#000', width: 30, height: 30, borderRadius: 15, backgroundColor: "#ccc", paddingLeft: 6, paddingTop: 6 } }),
                            React.createElement(Text, { style: { lineHeight: 30, marginRight: 15 } }, "10")),
                        React.createElement(View, { style: styles.comment_wrapper },
                            React.createElement(View, { style: styles.comment },
                                React.createElement(View, { style: styles.comment_content },
                                    React.createElement(Text, null, "Drchuottui"),
                                    React.createElement(Text, { style: { marginLeft: 10, } }, "May nay gia bao nhieu ?")),
                                React.createElement(View, { style: styles.content_footer },
                                    React.createElement(Button, { transparent: true },
                                        React.createElement(Text, null, "Hom qua luc 21:20")))))))))))));
    }
}
export default NewPost;
//# sourceMappingURL=index.js.map