import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F6F7',
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'white'
    },
    imageList: {
        // margin: 2,
        // padding: 2,
        width: (Dimensions.get('window').width/3),
        height: (Dimensions.get('window').width/3)
    },
    iconContainer: { 
        position: 'absolute', 
        zIndex: 99, 
        width: '100%', 
        alignItems: 'flex-end', 
        height: '100%', 
        marginTop: 3, 
        marginLeft: 3 
    }, 
    icon: { marginTop: 5, marginRight: 5 }
    // logo: {
    //     width: '80%'
    // }
});
export default styles