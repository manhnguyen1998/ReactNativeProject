import { StyleSheet,Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "#FBFAFA",
	},
	content_img: {
		width: deviceWidth,
		height: deviceWidth*1/2,
		margin: 0,
	},
	img_space: {
		marginBottom:30,
		marginTop:30,
		width: deviceWidth-30,
	},
	img: {
		width:40,
		height:40,
		marginRight:5,
	},
	view_path:{
		marginBottom:10,
	},
	content_footer: {
		flexDirection:"row",
		justifyContent:"flex-end",
		alignItems:"center",
	},
	tags: {
		flexDirection:"row",
		flexWrap:"wrap",
	},
	comment_wrapper: {
		paddingLeft:15,
		paddingTop: 15,
		borderTopColor:"#ccc",
		borderTopWidth:1,
	},
	reply: {
		borderTopColor:"#ccc",
		borderTopWidth:1,
		marginLeft:30,
		paddingTop: 15,
	},
	comment_content: {
		flexDirection:"row",
		marginBottom:10,
	}

});
export default styles;
