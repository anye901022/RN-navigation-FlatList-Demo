/**
 * Created by anye on 2017/7/17.
 */
import {StyleSheet
,Dimensions} from 'react-native';

import Colors from '../../utils/Colors';
var ScreenWidth = Dimensions.get('window').width;
export default CommonStyle=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.pageBG,
    },

    header:{
        height:64,
        paddingTop:20,
        backgroundColor:Colors.statusBarColor,
        justifyContent:'center',
        alignItems:'center',
    },

    headerFont:{
        color:Colors.statusBarFontColor,
        fontSize:16,
        fontWeight:'bold'
    },
    lineStyle: {
        height: 2,
        backgroundColor: Colors.statusBarColor,
    },
    icon: {

        width: 22,
        height: 22,
    },
    iconLeft:{
        position:'absolute',
        left:20,
        paddingTop:20,

    },
    iconRight:{
        position:'absolute',
        right:20,
        paddingTop:20,
    }

})