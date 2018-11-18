import * as React from "react";
import { Image} from "react-native";
import {  SearchBar } from "react-native-elements";
import { Toolbar } from 'react-native-material-ui';
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
  // actions: any;
  // isSearchActive: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
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
            <Title style={{marginLeft:-20}}>Home</Title>
            
          </Body>
          <Right>
            <Button transparent>
              <Icon
                // active
                name="login" style={{fontSize:22,color:'#fff'}}
                onPress={() => this.props.navigation.navigate("Login")}
              />
            </Button>
            <Button transparent>
              <Icon
                // active
                name="magnify" style={{fontSize:22,color:'#fff'}}
                // onPress={this.onSearchPressed}
                // {...iconProps}
              />
              {/* <SearchBar
                lightTheme style={styles.search_bar}
                platform="android"
                cancelIcon={{  name: 'chevron-left' }}
                placeholder='Search'
                style = {...searchProps.style} /> */}
                
            </Button>
          </Right >
        </Header>
        <Content style={styles.content}>
          <List>
            {this.props.list.map((item, i) => (
              <ListItem style={{width:"96%",marginLeft:10,marginRight:15,paddingLeft:10,marginTop:10,backgroundColor:"#fff",paddingBottom:6}}
                key={i}
                onPress={() =>
                  this.props.navigation.navigate("ContentPage", {
                    name: { item }
                  })}
              >
                <View >
                <View style={{flexDirection:"row",}}>
                  <Image  style={styles.img} source={require('../../../../assets/a.jpg')} resizeMode='cover'
                    borderRadius={25}/>
                    <View>
                      <Text >Drchuottui</Text>
                      <Text >16:43</Text>
                  </View>
                </View>
                <Image  style={styles.content_img} source={require('../../../../assets/a.jpg')}/>
                
                <Text style={{fontWeight:"bold",fontSize:21,fontFamily:"Roboto"}}>Đánh giá pin Huawei Mate 20: tốt, onscreen gần 7 tiếng, sạc nhanh 22.5W</Text>
                <Text>
Huawei Mate 20 được trang bị viên pin dung lượng 4.000 mAh và nó đủ để thiết bị này có thể on screen liên tục trong gần 7 tiếng với các tác vụ thực hiện hỗn hợp. Ước tính cho thấy thời gian chơi game liên tục (cả game offline và game online) vào khoảng hơn 6 tiếng, thời gian duyệt web liên tục hơn 6 tiếng rưỡi, trong khi thời gian xem phim đạt được là khoảng 8 tiếng rưỡi.

Dưới đây sẽ là thông tin chi tiết hơn về thời gian sử dụng pin của thiết bị này và quy trình mình đã thực hiện để cho ra...</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:5,marginBottom:0}}>
                  {/* <Button transparent>  */}
                  <Icon
                // active
                name="comment-outline" style={{fontSize:17,color:'#000',width:30,height:30,borderRadius:15,backgroundColor:"#ccc",paddingLeft:6,paddingTop:6}}
                onPress={() => this.props.navigation.navigate("Login")}
              />
                  {/* </Button> */}
              <Text style={{lineHeight:30}}  >10</Text>
                  {/* <Button transparent>  */}
                  <Icon
                // active
                name="heart-outline" style={{alignSelf:"flex-end",fontSize:17,color:'#000',width:30,height:30,borderRadius:15,backgroundColor:"#ccc",paddingLeft:6,paddingTop:6,marginLeft:200}}
                onPress={() => this.props.navigation.navigate("Login")}
              />
                  {/* </Button> */}
              <Text  style={{lineHeight:30,marginRight:10}}>10</Text>
                  {/* <Button transparent>  */}
                  <Icon
                // active
                name="share-variant" style={{fontSize:17,color:'#000',width:30,height:30,borderRadius:15,backgroundColor:"#ccc",paddingLeft:6,paddingTop:6}}
                onPress={() => this.props.navigation.navigate("Login")}
              />
                  {/* </Button> */}
              <Text  style={{lineHeight:30,marginRight:15}}>10</Text>
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

export default Home;
