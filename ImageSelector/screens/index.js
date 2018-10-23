import React,{ Component } from "react";
import {Button,Image,View,Text,TouchableOpacity,KeyboardAvoidingView,Dimensions,ScrollView} from 'react-native';
import {StackNavigator} from 'react-navigation';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

listImages = [
        require('../assets/1.jpg'),
        require('../assets/2.jpg'),
        require('../assets/3.jpg'),
        require('../assets/4.jpg'),
        require('../assets/5.jpg'),
        require('../assets/6.jpg'),
        require('../assets/7.jpg'),
        require('../assets/7.jpg'),
        require('../assets/7.jpg'),
        require('../assets/7.jpg'),
        require('../assets/7.jpg'),
        require('../assets/7.jpg'),
        require('../assets/7.jpg'),
        require('../assets/7.jpg'),
        require('../assets/7.jpg'),
        require('../assets/7.jpg'),
        require('../assets/7.jpg'),
        require('../assets/7.jpg'),
        require('../assets/7.jpg'),
    ];
type Props = {};

// class IndexPage extends Component<Props> {
//     render() {
//         return(
//     // <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
//     //  <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: 20, paddingHorizontal: 40 }} behavior="padding" enabled>
//         <TouchableOpacity style={{ flex:1,alignSelf: 'center' }} onPress={() => this.props.navigation.navigate('ImageSelectorScreen')}>
//             <Text style={{ color: '#5B5A5A', marginTop: 10 }}>ImageSelector</Text>
//         </TouchableOpacity>
//     //  </View>
//     //  </KeyboardAvoidingView>
//         );
//     }
// }
class ImageSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            selected: []
        }
        this.select = this.select.bind(this);
    }

    select(i) {
        let arr = this.state.selected;
        if (arr.indexOf(i) > -1) {
            arr.splice(arr.indexOf(i), 1);
            this.setState({
                count: this.state.count - 1,
                selected: arr
            })    
        } else {
            arr.push(i);
            this.setState({
                count: this.state.count + 1,
                selected: arr
            })
        }
    }
    renderImage() {
        let imageComponent = []
       listImages.map((val,i) => {
          if(this.state.selected.indexOf(i) > -1){
              imageComponent.push(
          <TouchableOpacity key ={i} onPress={() => this.select(i)}>
                <View >
                    <Image style = {styles.imageList} source={val}  />
                </View>
                <View style={styles.iconContainer}>
                    <Icon name="check-circle" size={25} color="#FFF" style={styles.icon} />
                </View>
            </TouchableOpacity>
              )
          }
          else {
              imageComponent.push(
              <TouchableOpacity key ={i} onPress={() => this.select(i)}>
                <View >
                    <Image style = {styles.imageList} source={val}  />
                </View>
            </TouchableOpacity>
              )
          }
      });
      return imageComponent;
    }
    render(){
      return (
        <View>
            <View style={styles.header}>
              <Text style={{width: (Dimensions.get('window').width), lineHeight: 50 , textAlign: "center", color: "#F5F6F7"}}>{this.state.count == 0 ? 'Select Image' : `${this.state.count} images has been selected`}</Text>
          </View>
        <ScrollView>
         <View style = {styles.container}>

                <View style = {styles.imageContainer}>
                    {this.renderImage()}
                </View>
            </View>
        </ScrollView>
        </View>
      )
    }

}
const RootStack = StackNavigator(
  {
    Home: {
      screen: ImageSelector,
    }
    // ImageSelectorScreen: {
    //   screen: ImageSelector,
    // },
  },
  {
    initialRouteName: 'Home',
  }
);
export default RootStack