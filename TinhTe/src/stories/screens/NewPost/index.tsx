import * as React from "react";
import { Image, Platform } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Left,
  Body,
  // Icon,
  Right,
  View,
  List,
  ListItem
} from "native-base";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
class NewPost extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                // active
                name="menu" style={{fontSize:22,color:'#fff'}}
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Left>
          <Body>
            <Title style={{marginLeft:-20}}>Bai moi</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon
                // active
                name="login" style={{fontSize:22,color:'#fff'}}
                // onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
            <Button transparent>
              <Icon
                // active
                name="magnify" style={{fontSize:22,color:'#fff'}}
                // onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Right >
        </Header>
        <Content style={styles.content}>
          <List>
            {this.props.list.map((item, i) => (
              <ListItem style={{width:"96%",marginLeft:10,marginRight:15,paddingLeft:10,marginTop:10,backgroundColor:"#fff",paddingBottom:6}}
                key={i}
                onPress={() =>
                  this.props.navigation.navigate("BlankPage", {
                    name: { item }
                  })}
              >
                <View >
                <View style={{flexDirection:"row",marginBottom:10}}>
                  <Image  style={styles.img} source={require('../../../../assets/a.jpg')} resizeMode='cover'
                    borderRadius={25}/>
                    <View>
                      <Text >Drchuottui</Text>
                      <Text >16:43</Text>
                  </View>
                </View>
                <Image  style={styles.content_img} source={require('../../../../assets/a.jpg')}/>
                
                <Text style={{fontWeight:"bold",fontSize:21,fontFamily:"Roboto"}}>Tai sao khong nen dung ....</Text>
                <Text  >{item}</Text>
                <Text >{item}</Text>
                <Text >{item}</Text>
                <Text >{item}</Text>
                <Text >{item}</Text>
                <Text >{item}</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:5,marginBottom:10}}>
                  <Icon
                // active
                name="comment-outline" style={{fontSize:17,color:'#000',width:30,height:30,borderRadius:15,backgroundColor:"#ccc",paddingLeft:6,paddingTop:6}}
              />
              <Text style={{lineHeight:30}}  >10</Text>
                  <Icon
                // active
                name="heart-outline" style={{alignSelf:"flex-end",fontSize:17,color:'#000',width:30,height:30,borderRadius:15,backgroundColor:"#ccc",paddingLeft:6,paddingTop:6,marginLeft:200}}
              />
              <Text  style={{lineHeight:30,marginRight:10}}>10</Text>
                  <Icon
                // active
                name="share-variant" style={{fontSize:17,color:'#000',width:30,height:30,borderRadius:15,backgroundColor:"#ccc",paddingLeft:6,paddingTop:6}}
              />
              <Text  style={{lineHeight:30,marginRight:15}}>10</Text>
                </View>
                <View style={styles.comment_wrapper}>
						<View style={styles.comment}>
							<View style={styles.comment_content}>
                      <Text >Drchuottui</Text>
                      <Text style={{marginLeft:10,}}>May nay gia bao nhieu ?</Text>
							</View>
							<View style={styles.content_footer}>
								<Button transparent><Text>Hom qua luc 21:20</Text></Button>
							</View>
						</View>
					</View>
                </View>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

export default NewPost;
