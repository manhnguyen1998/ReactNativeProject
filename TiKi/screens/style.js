import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F6F7',
    },
    qrcode : {
        position: 'absolute',
        right: 50,
        top: 3,
        // marginTop: 3,
        // marginRight: 10,
        zIndex: 99,
    },
    search: {
        position: 'absolute',
        top: 10,
        zIndex:99,
        left: 50,
    },
    shopping_index: {
        position: 'absolute',
        backgroundColor:'#fd820a',
        width:10,
        height:10,
        paddingLeft: 1,
        paddingTop: 1,
        borderRadius: 50,
        textAlign: 'center',
        fontSize: 8,
    },
    image : {
        width: (Dimensions.get('window').width),
        height: (Dimensions.get('window').width/3),
    },
    simpleBoxHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height:30,
        marginTop: 10,
        marginBottom: 10,
    },
    viewAllButton : {
        paddingLeft: 16,
        paddingRight: 16,
        marginRight: 20,
        height: 30,
        backgroundColor: "#1ba8ff",
        borderRadius: 2,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 2,
        elevation: 5,
    },
    category: {
        flexDirection: "column",
        flexWrap: "wrap",
        height: 250,
        backgroundColor: "#fff",
    },
    productItem: {
        width: 120,
        height: 125,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF"
    },
    productImg: {
        height: 64,
        width: 64,
    },
    serviceImg: {
        height:32,
        width:32,
    },
    serviceItem: {
        width: 120,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(0, 46, 110)",
    },
    services: {
        backgroundColor: "rgb(0, 46, 110)",
        marginBottom: 10,
    },
    serviceHeading: {
        height:48,
        fontSize:16,
        marginTop:10,
        marginLeft:10,
        color:"#fff",
    },
    services_list: {
        backgroundColor:"transparent",
        flexDirection:"column",
        flexWrap:"wrap",
        height:80,
    },
    icon: { marginTop: 5,
            marginRight: 5,
              },
    tiki_deal: {
        backgroundColor:"rgb(255, 68, 172)",
        width: (Dimensions.get('window').width),
        marginBottom: 10,
    },
    // deal_container: {
    //     // width: (Dimensions.get('window').width*92/100),
    //     backgroundColor: "#ccc",
    //     marginBottom: 2,
    // },
    deal_list: {
        backgroundColor: "#ccc",
        width: (Dimensions.get('window').width*9/10),
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent:"space-between",
        alignItems: "baseline",
        alignSelf: "center",
    },
    dealImg: {
        width:160,
        height:160,
    },
    dealItem: {
        width: "50%",
        textAlign:"center",
        // margin: 2,
        backgroundColor:"#fff",
        paddingBottom: 5,
    },
    viewAllDeal: {
        width: "90%",
        height: 30,
        backgroundColor: "#fff",
        marginLeft: "5%",
        textAlign:"center",
        borderTopColor: "#ccc",
        borderTopWidth: 1,
        marginBottom:5,
    }
    // logo: {
    //     width: '80%'
    // }
});
export default styles