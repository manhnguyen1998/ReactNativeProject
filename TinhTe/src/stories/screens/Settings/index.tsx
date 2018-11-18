import * as React from "react";
import { TouchableOpacity } from "react-native";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body,List,ListItem,View,CheckBox } from "native-base";
import styles from "./styles";
export interface Props {
	navigation: any;
	
}
export interface State {}
class BlankPage extends React.Component<Props, State> {
	
	render() {
	const list =  [
	"Trang bat dau",
	"Chu de hien tai",
	"Co chu hien tai",
	"So bai moi trang",
	];
		const param = this.props.navigation.state.params;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{param ? param.name.item : "Cai dat"}</Title>
					</Body>

					<Right />
				</Header>

				<Content style={styles.content} >
                <Text style={{marginLeft: 20}}>Cai dat chung</Text>
          <List>
            {list.map((item, i) => (
              <ListItem style={{width:"96%",marginLeft:10,marginRight:15,paddingLeft:10,marginTop:10,backgroundColor:"#fff",paddingBottom:6}}
                key={i}
                onPress={() =>
                  this.props.navigation.navigate("BlankPage", {
                    name: { item }
                  })}
              >
                <View style={{flexDirection: "row",justifyContent:"space-between",alignItems:"center",flex:1}}>
               
                <Text >{item}</Text>

                
                </View>
                
              </ListItem>
            ))}
          </List>
		  <Text style={{marginLeft: 20}}>Thong bao</Text>
			<TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between"}}>
            	<Text style={{marginLeft:20}}>Nhan thong bao</Text>
							<CheckBox checked={true} style={{left:-20}}/>
        	</TouchableOpacity>
		  <Text style={{marginLeft: 20}}>Cai dat</Text>
			<TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between"}}>
            	<Text style={{marginLeft:20}}>Hien thi noi dung bo qua</Text>
							<CheckBox checked={false} style={{left:-20}}/>
        	</TouchableOpacity>
        </Content>
			</Container>
		);
	}
}

export default BlankPage;
