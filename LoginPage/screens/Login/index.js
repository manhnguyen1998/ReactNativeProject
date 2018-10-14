import React, { Component } from 'react';
import { Button,Image, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {StackNavigator} from 'react-navigation';
import styles from './style';
const logoIcon = require('../../assets/ico-logo.png');
type Props = {};
 class Login extends Component<Props> {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>

                <View style={{ width: 200, height: 100 }}>
                    <Image source={logoIcon} style={{ width: '100%', height: '100%' }} resizeMode='contain' />
                </View>

                <Text style={{ fontFamily: 'System', fontSize: 24, color: '#5B5A5A', marginTop: 60 }}>WELCOME</Text>

                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: 20, paddingHorizontal: 40 }} behavior="padding" enabled>
                    <TextInput placeholder="Email" placeholderTextColor="#979899" style={{ height: 50, width: '100%', borderColor: '#CFD0D1', borderWidth: 1, backgroundColor: '#F5F6F7', padding: 10, color: '#5B5A5A', color: '#5B5A5A' }} />
                    <TextInput placeholder="Password" placeholderTextColor="#979899" style={{ height: 50, width: '100%', borderColor: '#CFD0D1', borderWidth: 1, backgroundColor: '#F5F6F7', padding: 10, color: '#5B5A5A' }} />

                    <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
                        <Text style={{ color: '#5B5A5A', marginTop: 10 }}>Forgot password?</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ width: '100%', marginTop: 25, height: 50, borderRadius: 50, borderWidth: 1, borderColor: '#CFD0D1', backgroundColor: '#129793', justifyContent: 'center', alignItems: 'center', shadowColor: '#129793', shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 5 }}>
                        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 40 }}>
                    <Text style={{ color: '#505050' }}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('RegisterForm')}>
                        <Text style={{ color: '#FF7260' }}>Create new account</Text>
                            
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
class Register extends React.Component {
    render() {
        return(
            <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontFamily: 'System', fontSize: 24, color: '#5B5A5A', marginTop: 30 }}>CREATE NEW ACCOUNT</Text>
                    {/* <Button
                    title="X"
                    onPress={() => this.props.navigation.navigate('Home')}
                    /> */}
                </View>
                <View style={{ flex: 8,width: '100%', justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: 10, paddingHorizontal: 40 }} behavior="padding" enabled>
                    <View style={{  flexDirection: 'row'}}>
                    <TextInput placeholder="First Name" placeholderTextColor="#979899" style={{ height: 50, width: '50%', borderColor: '#CFD0D1', borderWidth: 1, backgroundColor: '#F5F6F7', padding: 10, color: '#5B5A5A', color: '#5B5A5A' }} />
                    <TextInput placeholder="Last Name" placeholderTextColor="#979899" style={{ height: 50, width: '50%', borderColor: '#CFD0D1', borderWidth: 1, backgroundColor: '#F5F6F7', padding: 10, color: '#5B5A5A', color: '#5B5A5A' }} />
                    </View>
                    
                    <TextInput placeholder="User Name" placeholderTextColor="#979899" style={{ height: 50, width: '100%', borderColor: '#CFD0D1', borderWidth: 1, backgroundColor: '#F5F6F7', padding: 10, color: '#5B5A5A' }} />
                    <TextInput placeholder="Email Address" placeholderTextColor="#979899" style={{ height: 50, width: '100%', borderColor: '#CFD0D1', borderWidth: 1, backgroundColor: '#F5F6F7', padding: 10, color: '#5B5A5A' }} />
                    <TextInput placeholder="Password" placeholderTextColor="#979899" style={{ height: 50, width: '100%', borderColor: '#CFD0D1', borderWidth: 1, backgroundColor: '#F5F6F7', padding: 10, color: '#5B5A5A' }} />

                        <Text style={{ color: '#FE3824' }}>By Tapping 'Sign Up' you agree to the </Text>
                    <TouchableOpacity style={{ alignSelf: 'center',color: '#FE3824' }}>
                        <Text style={{ color: '#FE3824', marginTop: 10,alignSelf:'center',fontWeight: 'bold' }}>terms & conditions </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ width: '100%', marginTop: 25, height: 50, borderRadius: 50, borderWidth: 1, borderColor: '#CFD0D1', backgroundColor: '#129793', justifyContent: 'center', alignItems: 'center', shadowColor: '#129793', shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.4, shadowRadius: 5, elevation: 5 }}>
                        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>CREATE NEW ACCOUNT</Text>
                    </TouchableOpacity>
                </View>
             </KeyboardAvoidingView>
        );
    }
}
 const RootStack = StackNavigator(
  {
    Home: {
      screen: Login,
    },
    RegisterForm: {
      screen: Register,
    },
  },
  {
    initialRouteName: 'Home',
  }
);
// export default class AppMenu extends React.Component {
//     render() {
//         return <RootStack/>;
//     }
// }
export default RootStack