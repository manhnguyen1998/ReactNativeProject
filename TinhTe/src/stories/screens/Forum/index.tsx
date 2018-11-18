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
}
export interface State {}
class Forum extends React.Component<Props, State> {
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
            <Title style={{marginLeft:-20}}>Dien dan</Title>
            
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
                // onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
              {/* <SearchBar
                lightTheme style={styles.search_bar}
                platform="android"
                cancelIcon={{  name: 'chevron-left' }}
                placeholder='Search' />
                 */}
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
                <View style={{flexDirection: "row",justifyContent:"space-between",alignItems:"center",flex:1}}>
               
                 <Icon
                // active
                name="folder" style={{fontSize:25,color:'#000',marginRight: 10}}/>
                <Text style={{marginLeft:-140,width:150}} >{item}</Text>
                 <Icon
                // active
                name="dots-vertical" style={{fontSize:25,color:'#000',marginLeft: 10}}/>

                
                </View>
                
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

export default Forum;
