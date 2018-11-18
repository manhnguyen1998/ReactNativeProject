import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import ContentPage from "./container/ContentPageContainer";
import Sidebar from "./container/SidebarContainer";
import NewPost from "./container/NewPostContainer";
import Summary from "./container/SummaryContainer";
import Forum from "./container/ForumContainer";
import Settings from "./container/SettingsContainer";
import SalePage from "./container/SalePageContainer";

const HomeStack = StackNavigator(
	{
		Home: { screen: Home },
		ContentPage: { screen: ContentPage },
	},
	{
		initialRouteName: "Home",
		headerMode: "none",
	}
);
const Drawer = DrawerNavigator(
	{
		Home: { screen: HomeStack },
		Login: { screen: Login },
		ContentPage: { screen: ContentPage },
		NewPost: {screen: NewPost},
		Summary: {screen: Summary},
		Forum : {screen: Forum},
		Settings : {screen: Settings},
		SalePage : {screen: SalePage},
	},
	{
		drawerWidth: deviceWidth - 100,
		drawerPosition: "left",
		contentComponent: (props: any) => <Sidebar {...props} />,
	}
);


export default () => (
		<Root>
			<Drawer />
		</Root>
);
