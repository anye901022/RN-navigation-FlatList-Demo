/**
 * Created by anye on 2017/7/17.
 */
import {StyleSheet} from 'react-native';

import Colors from '../../../utils/Colors';
export default DrawerNoteStyle=StyleSheet.create({

    container:{
        backgroundColor:Colors.pageBG
    },
    topPhotoBtn:{
        marginTop:30,
        marginLeft:20,
        height:90,
        width:90,

    },
    topPhontoBG:{
      height:140,
        flexDirection:"row",
        backgroundColor:Colors.statusBarColor
    },
    topPhoto:{
        height: 80,
        width: 80,
        borderRadius: 40,
        borderWidth:2.5,
        resizeMode: "cover",
    },
    noteSelect:{
        height:50,
        flexDirection:"row",
       alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:Colors.statusBarFontColor

    },
    noteText:{
       marginLeft:10,
    },
    noteImageView:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    noteIcon:{
        marginRight:10,
        height:10,
        width:10
    },
    imageIcon:{
        marginLeft:14,
        width:17,
        height:17,
        resizeMode:"cover"
    }
})