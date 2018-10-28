import React,{ Component } from "react";
import {TextInput,Button,Image,View,Text,TouchableOpacity,KeyboardAvoidingView,Dimensions,ScrollView} from 'react-native';
import {StackNavigator} from 'react-navigation';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

const productList = [
    { src: require('../images/book.jpeg'), name: 'Nhà Sách Tiki' },
    { src: require('../images/book.jpeg'), name: 'Nhà Sách Tiki' },
    { src: require('../images/book.jpeg'), name: 'Nhà Sách Tiki' },
    { src: require('../images/book.jpeg'), name: 'Nhà Sách Tiki' },
    { src: require('../images/book.jpeg'), name: 'Nhà Sách Tiki' },
    { src: require('../images/book.jpeg'), name: 'Nhà Sách Tiki' },
    { src: require('../images/book.jpeg'), name: 'Nhà Sách Tiki' },
    { src: require('../images/book.jpeg'), name: 'Nhà Sách Tiki' },
    { src: require('../images/book.jpeg'), name: 'Nhà Sách Tiki' },
    { src: require('../images/book.jpeg'), name: 'Nhà Sách Tiki' },
    { src: require('../images/book.jpeg'), name: 'Nhà Sách Tiki' },
    { src: require('../images/book.jpeg'), name: 'Nhà Sách Tiki' },
    { src: require('../images/book.jpeg'), name: 'Nhà Sách Tiki' },
    { src: require('../images/book.jpeg'), name: 'Nhà Sách Tiki' },
    { src: require('../images/book.jpeg'), name: 'Nhà Sách Tiki' }
];
const serviceList = [
    { src: require('../images/ve-may-bay.png'), name: 'Vé máy bay' },
    { src: require('../images/ve-may-bay.png'), name: 'Vé máy bay' },
    { src: require('../images/ve-may-bay.png'), name: 'Vé máy bay' },
    { src: require('../images/ve-may-bay.png'), name: 'Vé máy bay' },
    { src: require('../images/ve-may-bay.png'), name: 'Vé máy bay' },
    { src: require('../images/ve-may-bay.png'), name: 'Vé máy bay' },
    { src: require('../images/ve-may-bay.png'), name: 'Vé máy bay' },
    { src: require('../images/ve-may-bay.png'), name: 'Vé máy bay' },
];
const dealList = [
    { src: require('../images/redmi.jpg'), name: 'Điện Thoại iPhone X 64GB VN/A - Hàng Chính Hãng' },
    { src: require('../images/redmi.jpg'), name: 'Điện Thoại iPhone X 64GB VN/A - Hàng Chính Hãng' },
    { src: require('../images/redmi.jpg'), name: 'Điện Thoại iPhone X 64GB VN/A - Hàng Chính Hãng' },
    { src: require('../images/redmi.jpg'), name: 'Điện Thoại iPhone X 64GB VN/A - Hàng Chính Hãng' },
];
type Props = {};
 class Login extends Component<Props> {
   renderCategory() {
        let categoryComponent = [];
        productList.map((val, key) => {
            categoryComponent.push(
                <View style={styles.productItem}>
                    <Image source={val['src']} style={styles.productImg}/>
                    <Text>{val['name']}</Text>
                </View>
            )
        })
        return categoryComponent;
    }
    renderDeal() {
        let dealComponent = [];
        dealList.map((val, key) => {
            dealComponent.push(
                <View style={styles.dealItem} >
                    <Image source={val['src']} style={styles.dealImg}/>
                    <Text style={{color:"#333",width:"80%",marginLeft:"10%"}}>{val['name']}</Text>
                    <Text style={{color:"#333",width:"80%",marginLeft:"10%"}}>23.590.000 đ</Text>
                    <Text style={{color:"#333",width:"80%",marginLeft:"10%",textDecorationLine:"line-through"}}>29.990.000 đ</Text>
                    <Text style={{color:"#fff",width:30,marginLeft:"10%",backgroundColor:"rgb(251, 2, 2)",textAlign:"center"}}>-30%</Text>
                </View>
            )
        })
        return dealComponent;
    }
    renderService() {
      let serviceComponent = [];
        serviceList.map((val, key) => {
            serviceComponent.push(
                <TouchableOpacity style={styles.serviceItem} >
                    <Image source={val['src']} style={styles.serviceImg}/>
                    <Text style={{color:"#fff"}}>{val['name']}</Text>
                </TouchableOpacity>
            )
        })
        return serviceComponent;
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
            <View style={{flex:1}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#1ba8ff'}}>
              <TouchableOpacity style={{marginLeft:15,marginTop:-3,width:'10%',paddingLeft:10}}>
                 <Icon name="bars" size={20} color="#FFF"   />
              </TouchableOpacity>
              <Icon name="search" size={20} color="grey" style={styles.search} />
              <TextInput placeholder="Sản phẩm, thuơng hiệu ..." style={{ height: 30, width: '80%', borderColor: '#CFD0D1', borderWidth: 1, backgroundColor: '#F5F6F7', color: '#5B5A5A', color: '#5B5A5A',justifyContent:'center' ,paddingLeft:30,paddingTop:5,marginBottom:10,marginTop:10}}></TextInput>
              <TouchableOpacity style={styles.qrcode}><Icon name="qrcode" size={20} color="#FFF" style={styles.icon} /></TouchableOpacity>
              <TouchableOpacity style={{marginRight:5,marginTop:-3,marginLeft:5,width:'10%',paddingRight:5,}}>
              <Icon name="shopping-cart" size={20} color="#FFF"/>
              <Text style={styles.shopping_index}>0</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:1,flexDirection:'row',backgroundColor:'#0080FF'}}>
              <Icon name="map-marker" size={20} color="#ccc" style={{marginLeft:30,marginRight:30,marginTop:10,marginBottom:10,}} />
              <Text style={{marginTop:10}}>Ban muon giao hang ...</Text>
            </View>
            </View>
            <View style={{flex:8}}>
            <ScrollView >

            <View >
              {/* <Text>Img</Text> */}
              <Image style={styles.image} source={require('./a.jpg')}/>
            </View>

            <View style={{width: Dimensions.get('window').width,height: 300,marginBottom: 10}}>
              <View style={styles.simpleBoxHeader}>
                <Text style={{marginLeft:20}}>Danh sach nganh hang</Text>
                <TouchableOpacity style={styles.viewAllButton}><Text style={{color:'#fff',lineHeight:30}}>Xem tat ca</Text></TouchableOpacity>
              </View>
              <ScrollView horizontal={true}>
              <View style={styles.category}>
               {this.renderCategory()}
               </View>
              </ScrollView>
            </View>

            <View style={styles.services}>
            <Text style={styles.serviceHeading}>Dich vu tien ich</Text>
            <ScrollView horizontal={true}>
            <View style={styles.services_list}>
            {this.renderService()}
            </View>
            </ScrollView>
            </View>

            {/* <View><Text >Uu dai va hop tac</Text></View>
            <View>
              <Text>Dang nhap de trai nghiem</Text>
              <TouchableOpacity> 
              <Text>Dang ki</Text>
              </TouchableOpacity>
              <TouchableOpacity> 
              <Text>Dang nhap</Text>
              </TouchableOpacity>
              <Text>Img</Text>
            </View> */}

            <View style={styles.tiki_deal}>
              <Text style={{width:"100%",textAlign:"left",height:40,lineHeight:40,fontSize:20,color:"#fff",marginLeft:"5%"}}>Tiki deal</Text>
              <View style={styles.deal_container}>
              <View style={styles.deal_list}>
                {this.renderDeal()}
              </View>
              <TouchableOpacity style={styles.viewAllDeal}><Text style={{textAlign:"center",height:30,lineHeight:30}}> Xem tat ca</Text></TouchableOpacity>
              </View>
            </View>

            </ScrollView>
            </View>
            </KeyboardAvoidingView>
        );
    }
}
// class Register extends React.Component {
//     render() {
//         return(
//             <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
//                 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <Text style={{ fontFamily: 'System', fontSize: 24, color: '#5B5A5A', marginTop: 30 }}>CREATE NEW ACCOUNT</Text>
//                     {/* <Button
//                     title="X"
//                     onPress={() => this.props.navigation.navigate('Home')}
//                     /> */}
//                 </View>
//                 <View style={{ flex: 8,width: '100%', justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: 10, paddingHorizontal: 40 }} behavior="padding" enabled>
//                     <View style={{  flexDirection: 'row'}}>
//                     <TextInput placeholder="First Name" placeholderTextColor="#979899" style={{ height: 50, width: '50%', borderColor: '#CFD0D1', borderWidth: 1, backgroundColor: '#F5F6F7', padding: 10, color: '#5B5A5A', color: '#5B5A5A' }} />
//                     <TextInput placeholder="Last Name" placeholderTextColor="#979899" style={{ height: 50, width: '50%', borderColor: '#CFD0D1', borderWidth: 1, backgroundColor: '#F5F6F7', padding: 10, color: '#5B5A5A', color: '#5B5A5A' }} />
//                     </View>
                    
//                     <TextInput placeholder="User Name" placeholderTextColor="#979899" style={{ height: 50, width: '100%', borderColor: '#CFD0D1', borderWidth: 1, backgroundColor: '#F5F6F7', padding: 10, color: '#5B5A5A' }} />
//                     <TextInput placeholder="Email Address" placeholderTextColor="#979899" style={{ height: 50, width: '100%', borderColor: '#CFD0D1', borderWidth: 1, backgroundColor: '#F5F6F7', padding: 10, color: '#5B5A5A' }} />
//                     <TextInput placeholder="Password" placeholderTextColor="#979899" style={{ height: 50, width: '100%', borderColor: '#CFD0D1', borderWidth: 1, backgroundColor: '#F5F6F7', padding: 10, color: '#5B5A5A' }} />

//                         <Text style={{ color: '#FE3824' }}>By Tapping 'Sign Up' you agree to the </Text>
//                     <TouchableOpacity style={{ alignSelf: 'center',color: '#FE3824' }}>
//                         <Text style={{ color: '#FE3824', marginTop: 10,alignSelf:'center',fontWeight: 'bold' }}>terms & conditions </Text>
//                     </TouchableOpacity>


//                     <TouchableOpacity style={{ width: '100%', marginTop: 25, height: 50, borderRadius: 50, borderWidth: 1, borderColor: '#CFD0D1', backgroundColor: '#129793', justifyContent: 'center', alignItems: 'center', shadowColor: '#129793', shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 5 }}>
//                         <Text style={{ color: '#FFF', fontWeight: 'bold' }}>CREATE NEW ACCOUNT</Text>
//                     </TouchableOpacity>
//                 </View>
//              </KeyboardAvoidingView>
//         );
//     }
// }
 const RootStack = StackNavigator(
  {
      
    Home: {
      screen: Login,
    },
    // RegisterForm: {
    //   screen: Register,
    // },
  },
  {
    initialRouteName: 'Home',
      navigationOptions: {
            header: null
        }
  }
);
// export default class AppMenu extends React.Component {
//     render() {
//         return <RootStack/>;
//     }
// }
export default RootStack