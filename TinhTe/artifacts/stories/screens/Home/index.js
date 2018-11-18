import * as React from "react";
import { Image } from "react-native";
import { Container, Header, Title, Content, Text, Button, Left, Body, 
// Icon,
Right, View, List, ListItem } from "native-base";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./styles";
class Home extends React.Component {
    // constructor(props){
    //       super(props);
    //       this.state = {isSearchActive: false};
    //       // this.onSearchPressed = this.onSearchPressed.bind(this);
    //       // this.onSearchClosed = this.onSearchClosed.bind(this);
    //   }
    // onSearchPressed = () => {
    //   console.log(this.state)
    //   this.setState( { isSearchActive: true });
    // }
    // onSearchClosed() {
    //   console.log(this.state)
    //   this.setState({isSearchActive:false});
    // }
    render() {
        // const {isSearchActive} = this.state;
        // const searchProps = {};
        // if(this.state.isSearchActive) {
        //   searchProps.style = {
        //     backgroundColor: "#000";
        //     color: "#000";
        //     width: "100%";
        //   }
        // }
        // else {
        //   searchProps.style = {
        //     // backgroundColor: "#fff"
        //   }
        // }
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
                    React.createElement(Title, { style: { marginLeft: -20 } }, "Home")),
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
                React.createElement(List, null, this.props.list.map((item, i) => (React.createElement(ListItem, { style: { width: "96%", marginLeft: 10, marginRight: 15, paddingLeft: 10, marginTop: 10, backgroundColor: "#fff", paddingBottom: 6 }, key: i, onPress: () => this.props.navigation.navigate("ContentPage", {
                        name: { item }
                    }) },
                    React.createElement(View, null,
                        React.createElement(View, { style: { flexDirection: "row", } },
                            React.createElement(Image, { style: styles.img, source: require('../../../../assets/a.jpg'), resizeMode: 'cover', borderRadius: 25 }),
                            React.createElement(View, null,
                                React.createElement(Text, null, "Drchuottui"),
                                React.createElement(Text, null, "16:43"))),
                        React.createElement(Image, { style: styles.content_img, source: require('../../../../assets/a.jpg') }),
                        React.createElement(Text, { style: { fontWeight: "bold", fontSize: 21, fontFamily: "Roboto" } }, "\u0110\u00E1nh gi\u00E1 pin Huawei Mate 20: t\u1ED1t, onscreen g\u1EA7n 7 ti\u1EBFng, s\u1EA1c nhanh 22.5W"),
                        React.createElement(Text, null, "Huawei Mate 20 \u0111\u01B0\u1EE3c trang b\u1ECB vi\u00EAn pin dung l\u01B0\u1EE3ng 4.000 mAh v\u00E0 n\u00F3 \u0111\u1EE7 \u0111\u1EC3 thi\u1EBFt b\u1ECB n\u00E0y c\u00F3 th\u1EC3 on screen li\u00EAn t\u1EE5c trong g\u1EA7n 7 ti\u1EBFng v\u1EDBi c\u00E1c t\u00E1c v\u1EE5 th\u1EF1c hi\u1EC7n h\u1ED7n h\u1EE3p. \u01AF\u1EDBc t\u00EDnh cho th\u1EA5y th\u1EDDi gian ch\u01A1i game li\u00EAn t\u1EE5c (c\u1EA3 game offline v\u00E0 game online) v\u00E0o kho\u1EA3ng h\u01A1n 6 ti\u1EBFng, th\u1EDDi gian duy\u1EC7t web li\u00EAn t\u1EE5c h\u01A1n 6 ti\u1EBFng r\u01B0\u1EE1i, trong khi th\u1EDDi gian xem phim \u0111\u1EA1t \u0111\u01B0\u1EE3c l\u00E0 kho\u1EA3ng 8 ti\u1EBFng r\u01B0\u1EE1i. D\u01B0\u1EDBi \u0111\u00E2y s\u1EBD l\u00E0 th\u00F4ng tin chi ti\u1EBFt h\u01A1n v\u1EC1 th\u1EDDi gian s\u1EED d\u1EE5ng pin c\u1EE7a thi\u1EBFt b\u1ECB n\u00E0y v\u00E0 quy tr\u00ECnh m\u00ECnh \u0111\u00E3 th\u1EF1c hi\u1EC7n \u0111\u1EC3 cho ra..."),
                        React.createElement(View, { style: { flexDirection: "row", justifyContent: "space-between", marginTop: 5, marginBottom: 0 } },
                            React.createElement(Icon
                            // active
                            , { 
                                // active
                                name: "comment-outline", style: { fontSize: 17, color: '#000', width: 30, height: 30, borderRadius: 15, backgroundColor: "#ccc", paddingLeft: 6, paddingTop: 6 }, onPress: () => this.props.navigation.navigate("Login") }),
                            React.createElement(Text, { style: { lineHeight: 30 } }, "10"),
                            React.createElement(Icon
                            // active
                            , { 
                                // active
                                name: "heart-outline", style: { alignSelf: "flex-end", fontSize: 17, color: '#000', width: 30, height: 30, borderRadius: 15, backgroundColor: "#ccc", paddingLeft: 6, paddingTop: 6, marginLeft: 200 }, onPress: () => this.props.navigation.navigate("Login") }),
                            React.createElement(Text, { style: { lineHeight: 30, marginRight: 10 } }, "10"),
                            React.createElement(Icon
                            // active
                            , { 
                                // active
                                name: "share-variant", style: { fontSize: 17, color: '#000', width: 30, height: 30, borderRadius: 15, backgroundColor: "#ccc", paddingLeft: 6, paddingTop: 6 }, onPress: () => this.props.navigation.navigate("Login") }),
                            React.createElement(Text, { style: { lineHeight: 30, marginRight: 15 } }, "10"))))))))));
    }
}
export default Home;
//# sourceMappingURL=index.js.map