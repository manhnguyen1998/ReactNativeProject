import * as React from "react";
import { Image, TouchableOpacity, WebView,ScrollView,RefreshControl} from "react-native";
import { Container, Header, Title, Content, Text, Button,  Left, Right, Body } from "native-base";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class SalePage extends React.Component<Props, State> {
  
	render() {
		return (
            <Container>
				<Header style={{backgroundColor:"#fff"}}>
					<Left style={{flexDirection:"row",flex:1}}>
						<Button transparent >
							<MaterialCommunityIcon name = "chevron-left" style = {{fontSize : 22, color : "#000"}}/>
						</Button>
						<Button transparent >
							<MaterialCommunityIcon name = "chevron-right" style = {{fontSize : 22, color : "#000"}}/>
						</Button>
					</Left>

					<Body style={{ flex: 3,flexDirection:"column",alignItems:"center",flexWrap:"wrap" }}>
						<Title style={{color:"#000"}}>Khuyen mai</Title>
                        <Text style={{fontSize:9}}>https://tinhte.vn/threads/ipad-pro-2018-rat-de-bi-be-gay.2878645</Text>
					</Body>

					<Right >
						<Button transparent>
              				<MaterialCommunityIcon 
              				name = "reload" style = {{fontSize: 22, color: "#000"}}
              				/>
						</Button>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
              				<MaterialCommunityIcon
              				  // active
              				  name="close" style={{fontSize:22,color:"#000"}}
              				/>
						</Button>
					</Right>
				</Header>
			    <WebView 
                
                // useWebKit={true}
                // javaScriptEnabled={false}
                source={{
                    uri: 'https://tinhte.vn/threads/ipad-pro-2018-rat-de-bi-be-gay.2878645',
                    }}
                // style={{marginTop: 20}}
                scalesPageToFit
                />
            </Container>
            
		);
	}
}

export default SalePage;
