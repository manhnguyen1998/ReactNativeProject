/* eslint-disable no-mixed-spaces-and-tabs */
import * as React from "react";
import { Image, TouchableOpacity} from "react-native";
import { Container, Header, Title, Content, Text, Button,  Left, Right, Body, View, H1, H2 } from "native-base";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class ContentPage extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<MaterialCommunityIcon name = "keyboard-backspace" style = {{fontSize : 22, color : "#fff"}}/>
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						{/* <Title>{param ? param.name.item : "Blank Page"}</Title> */}
					</Body>

					<Right>
						<Button transparent>
              				<MaterialCommunityIcon
              				name = "magnify" style = {{fontSize: 22, color: "#fff"}}
              				/>
						</Button>
						<Button transparent>
              				<MaterialCommunityIcon
              				  // active
              				  name="share-variant" style={{fontSize:22,color:"#fff"}}
              				/>
						</Button>
					</Right>
				</Header>

				<Content  style={{padding:0}}>
					<Image  style={styles.content_img} source={require("../../../../assets/a.jpg")}/>
					<View style={styles.content_wrapper} style={{flexDirection:"column",paddingLeft:15,paddingRight:15,}} >
					<View style={styles.content_view}>
					<TouchableOpacity style={{marginLeft:-15,paddingLeft:15,marginRight:-15,paddingRight:15,backgroundColor:"#ccc",paddingTop:5,paddingBottom:5,marginBottom:10}}>
					<Text style={{fontWeight:"bold",fontSize:21,fontFamily:"Roboto"}}>Đánh giá pin Huawei Mate 20: tốt, onscreen gần 7 tiếng, sạc nhanh 22.5W
					<MaterialCommunityIcon name="arrow-down-drop-circle-outline" style={{color:"#16bdd8",fontSize:21,marginLeft:15}}/>
					</Text>
					</TouchableOpacity>
					<View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:10}}>
                  <Image  style={styles.img} source={require("../../../../assets/a.jpg")} resizeMode="cover"
                    borderRadius={25}/>
                    <View style={{marginLeft:-220}}>
                      <Text >Drchuottui</Text>
                      <Text >16:43</Text>
                  </View>
				  <MaterialCommunityIcon
              	  name="dots-vertical" style={{fontSize:22,color:"#000"}}
              	/>
                </View>
				<Text>
						Huawei Mate 20 được trang bị viên pin dung lượng 4.000 mAh và nó đủ để thiết bị này có thể on screen liên tục trong gần 7 tiếng với các tác vụ thực hiện hỗn hợp. Ước tính cho thấy thời gian chơi game liên tục (cả game offline và game online) vào khoảng hơn 6 tiếng, thời gian duyệt web liên tục hơn 6 tiếng rưỡi, trong khi thời gian xem phim đạt được là khoảng 8 tiếng rưỡi.

				</Text>
					<Image  style={[styles.content_img,styles.img_space]} source={require("../../../../assets/b.jpg")}/>
				<View style={styles.view_path}>
					<H1>THÔNG SỐ CƠ BẢN MÁY IN NHÃN TEPRA PRO</H1>
					<Text>Mã hàng: Tepra Pro SR-R170V</Text>
					<Text>Độ rộng nhãn in: 4mm - 6mm - 9mm - 12mm - 18mm</Text>
					<Text>Khối lượng máy không có băng nhãn và pin: 580g</Text>
					<Text>Dùng nguồn điện: Sạc AC hoặc 6pin AA</Text>
				</View>
					<Image  style={[styles.content_img,styles.img_space]}  source={require("../../../../assets/b.jpg")}/>
				<View style={styles.view_path}>
					<H1>3 THAO TÁC SỬ DỤNG ĐƠN GIẢN</H1>
					<Text>Mình chỉ mất 5 phút để có thể in cái nhãn đầu tiên. Rất dễ sử dụng. Máy có một bàn phím đủ lớn để bấm chữ nhập liệu, chữ và các thông tin hiển thị trên màn hình, mình thấy hơi nhỏ, lớn hơn chút thì dễ nhìn hơn. Mọi thao tác hiển thị trên màn hình, chỉnh sửa và thay đổi với bàn phím.</Text>
				</View>
					<Image  style={[styles.content_img,styles.img_space]}  source={require("../../../../assets/b.jpg")}/>
					<View style={styles.view_path}>
					<H2>Nhận định:</H2>
					<Text>Cá nhân mình rất thích cái máy in nhãn này. Lý do thứ nhất là sử dụng đơn giản và ít mất thời gian cho việc cần một cái nhãn dùng để phân loại, ghi chú các công việc hàng ngày, in ảnh, note... Mà nó có thể phù hợp với bất kỳ ai và việc gì. Thứ hai là có ngôn ngữ tiếng Việt chuẩn, không co giật bóp nhỏ các nguyên âm có dấu. Các lý do phụ là kiểu chữ khung viền cũng giúp màu mè hoa lá khi rảnh có thể dùng nhiều hơn cho việc sắp xếp đồ dùng trong nhà và nơi làm việc.</Text>
				</View>
					<Image  style={[styles.content_img,styles.img_space]}  source={require("../../../../assets/b.jpg")}/>
					</View>
						<View style={styles.content_footer}>
							<Button transparent><Text>Like</Text></Button>
							<EntypoIcon name="dot-single" style={{fontSize:22,color:"#000"}}/>
							<MaterialCommunityIcon name="heart-outline" style={{fontSize:22,color:"#000"}}/>
							<Text>9</Text>
							<EntypoIcon name="dot-single" style={{fontSize:22,color:"#000"}}/>
							<Button transparent><Text>Reply</Text></Button>
						</View>
						<View style={styles.tags}>
							<Text>Tags: </Text>
							<Text style={{backgroundColor:"#ccc",marginRight:4,marginBottom:4}}>may in nhan tepra pro </Text>
							<Text style={{backgroundColor:"#ccc",marginRight:4,marginBottom:4}}>may in rubang</Text>
							<Text style={{backgroundColor:"#ccc",marginRight:4,marginBottom:4}}>May in bang nhan</Text>
							<Text style={{backgroundColor:"#ccc",marginRight:4,marginBottom:4}}>may in decal</Text>
						</View>
					</View>
					<View style={styles.comment_wrapper}>
						<View style={styles.comment}>
							<View style={styles.comment_content}>
							<Image  style={styles.img} source={require("../../../../assets/a.jpg")} resizeMode="cover"
                    borderRadius={25}/>
                    <View >
                      <Text >Drchuottui</Text>
                      <Text >May nay gia bao nhieu ?</Text>
                  </View>
							</View>
							<View style={styles.content_footer}>
								<Button transparent><Text>Hom qua luc 21:20</Text></Button>
								<EntypoIcon name="dot-single" style={{fontSize:22,color:"#000"}}/>
								<Button transparent><Text>Like</Text></Button>
								<EntypoIcon name="dot-single" style={{fontSize:22,color:"#000"}}/>
								<Button transparent><Text>Reply</Text></Button>
							</View>
						</View>
						<View style={styles.reply}>
							<View style={styles.comment_content}>
							<Image  style={styles.img} source={require("../../../../assets/a.jpg")} resizeMode="cover"
                    borderRadius={25}/>
                    <View >
                      <Text >Drchuottui</Text>
                      <Text >Bac thu hoi thang xem chu em cung khong biet ro...</Text>
                  </View>
							</View>
							<View style={styles.content_footer}>
								<Button transparent><Text>Hom qua luc 22:50</Text></Button>
								<EntypoIcon name="dot-single" style={{fontSize:22,color:"#000"}}/>
								<Button transparent><Text>Like</Text></Button>
								<EntypoIcon name="dot-single" style={{fontSize:22,color:"#000"}}/>
								<Button transparent><Text>Reply</Text></Button>
							</View>
						</View>
					</View>
					<View style={styles.comment_wrapper}>
						<View style={styles.comment}>
							<View style={styles.comment_content}>
							<Image  style={styles.img} source={require("../../../../assets/a.jpg")} resizeMode="cover"
                    borderRadius={25}/>
                    <View >
                      <Text >Drchuottui</Text>
                      <Text >May nay gia bao nhieu ?</Text>
                  </View>
							</View>
							<View style={styles.content_footer}>
								<Button transparent><Text>Hom qua luc 21:20</Text></Button>
								<EntypoIcon name="dot-single" style={{fontSize:22,color:"#000"}}/>
								<Button transparent><Text>Like</Text></Button>
								<EntypoIcon name="dot-single" style={{fontSize:22,color:"#000"}}/>
								<Button transparent><Text>Reply</Text></Button>
							</View>
						</View>
						<View style={styles.reply}>
							<View style={styles.comment_content}>
							<Image  style={styles.img} source={require("../../../../assets/a.jpg")} resizeMode="cover"
                    borderRadius={25}/>
                    <View >
                      <Text >Drchuottui</Text>
                      <Text >Bac thu hoi thang xem chu em cung khong biet ro...</Text>
                  </View>
							</View>
							<View style={styles.content_footer}>
								<Button transparent><Text>Hom qua luc 22:50</Text></Button>
								<EntypoIcon name="dot-single" style={{fontSize:22,color:"#000"}}/>
								<Button transparent><Text>Like</Text></Button>
								<EntypoIcon name="dot-single" style={{fontSize:22,color:"#000"}}/>
								<Button transparent><Text>Reply</Text></Button>
							</View>
						</View>
					</View>
				</Content>
			</Container>
		);
	}
}

export default ContentPage;
