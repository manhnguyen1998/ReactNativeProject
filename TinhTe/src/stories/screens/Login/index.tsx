import * as React from "react";
import { Image, Platform, } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View,  Footer,Left,Right,Radio } from "native-base";
//import styles from "./styles";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
export interface Props {
	loginForm: any;
	signUpForm: any;
	onLogin: Function;
	navigation: any;
}
export interface State {}
class Login extends React.Component<Props, State> {
	constructor(props) {
    super(props);
    this.state = { signIn: true, signUp: false,formValue: "loginForm" };
	}
	render() {
		let formPage;
        if (this.state.signIn == true) {
            formPage = this.props.loginForm
        } else {
            formPage = this.props.signUpForm
        }
		return (
			<Container>
				<Header>
					<Left>
						{/* <Button transparent onPress={() => this.props.navigation.goBack()}>
							<MaterialCommunityIcon name = "keyboard-backspace" style = {{fontSize : 22, color : "#fff"}}/>
						</Button> */}
					</Left>

					<Body style={{ flex: 3 }}>
						{/* <Title>{param ? param.name.item : "Blank Page"}</Title> */}
					</Body>

					<Right/>
						
				</Header>

				<Content>
					{formPage}
						{/* <Radio selected={true} />
                            <Text>Discussion with Client</Text>
						<Radio selected={true} />
                            <Text>Discussion with Client</Text> */}
					<View style={{flexDirection:"row",justifyContent:"center",marginTop:20}}>
					<Radio
                	color={"#f0ad4e"}
                	selectedColor={"#5cb85c"}
                	selected={this.state.signIn}
					onPress={() => this.setState({signIn: true,signUp:false})}
              		/>
			   		<Text style={{marginLeft: 10}}>Dang nhap</Text>
					<Radio
                	color={"#f0ad4e"}
                	selectedColor={"#5cb85c"}
                	selected={this.state.signUp}
					style={{marginLeft: 10}}
					onPress={() => this.setState({signIn: false,signUp:true})}
              		/>
			   		<Text style={{marginLeft: 10}}>Dang ky</Text>
					</View>
					<View padder>
						<Button block onPress={() => this.props.onLogin()}>
							<Text>Login</Text>
						</Button>
					</View>
				</Content>
				<Footer style={{ backgroundColor: "#F8F8F8" }}>
					<View style={{ alignItems: "center", opacity: 0.5, flexDirection: "row" }}>
						<View padder>
							<Text style={{ color: "#000" }}>Made with love at </Text>
						</View>
						<Image
							source={{ uri: "https://geekyants.com/images/logo-dark.png" }}
							style={{ width: 422 / 4, height: 86 / 4 }}
						/>
					</View>
				</Footer>
			</Container>
		);
	}
}

export default Login;
