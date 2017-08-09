/**
 * Created by anye on 2017/7/17.
 */
import {StyleSheet} from 'react-native';

import Colors from '../../../utils/Colors';
export default MyStyle=StyleSheet.create({
    iconRight: {
        position:'absolute',
        right:20,
        width: 22,
        height: 22,

    },
    iconLeft: {
        position:'absolute',
        left:20,
        width: 22,
        height: 22,
        resizeMode:"cover"
    },
    headerContent: {
        height: 140,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor:Colors.statusBarColor
    },
    photoImage: {
        height: 90,
        width: 90,
        borderRadius: 45,
        borderWidth:2.5,
        borderColor:'#999999',
        resizeMode: "cover",

    },
    photoIn:{
        alignSelf: "center",
        marginHorizontal: 20,
    },
    headerContent_right: {
        flexDirection: "column",
        marginLeft:6,
        height: 90,
        flexGrow: 1,
    },
    text_UserId: {
        marginTop:14,
        color: "#fff",
        fontSize: 16,
        lineHeight: 26

    },
    text_Buy:{
        color:"gray",
        fontSize:14,
        lineHeight:22
    },
    containerItem: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    Item_Item: {
        flex: 1,
        height: 102,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    Item_image: {
        width: 45,
        height: 45,
        backgroundColor: "#48b4ff",
        padding: 7,
        borderRadius: 45
    },
    Item_img: {
        resizeMode: "cover",
        width: 31,
        height: 31
    },
    Item_text: {
        fontSize: 15,
        marginTop: 4
    }

})