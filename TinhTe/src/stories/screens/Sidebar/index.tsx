import * as React from "react";
import { Text, Container, List, ListItem, Content } from "native-base";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationActions } from "react-navigation";

const routes = [
	{
		route: "Login",
		caption: "Dang nhap",
		icon: "login",
	},
	{
		route: "Home",
		caption: "Trang chu",
		icon: "home"
	},
	{
		route: "NewPost",
		caption: "Bai moi",
		icon: "signal-variant",
	},
	{
		route: "Forum",
		caption: "Dien dan",
		icon: "folder",
	},
	{
		route: "SalePage",
		caption: "Khuyen mai",
		icon: "sale",
	},
	{
		route: "Settings",
		caption: "Settings",
		icon: "settings",
	},

];

export interface Props {
	navigation: any;
}
export interface State {}
const resetAction = NavigationActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: "Login" })],
});
export default class Sidebar extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Content>
					<List
						style={{ marginTop: 40 }}
						dataArray={routes}
						renderRow={data => {
							return (
								<ListItem
									button
									onPress={() => {
										// data.route === "Login"
											// ? this.props.navigation.dispatch(resetAction)
											// :
											 this.props.navigation.navigate(data.route);
									}}
								>
									<Icon style={{marginRight:20,fontSize:22,color:'#6f6f6fb5'}} name={data.icon} 
									/>
									<Text>{data.caption}</Text>
								</ListItem>
							);
						}}
					/>
				</Content>
			</Container>
		);
	}
}
