/**
 * Created by anye on 2017/7/17 0011.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Colors from '../../../utils/Colors';


export default class RightIcon extends Component{
    render(){
       return( <View>
            <View style={rightStyles.right}></View>
        </View>
       )
    }
}
const rightStyles=StyleSheet.create({

    right:{
        width:15,
        height:15,
        borderTopWidth:1.5,
        borderRightWidth:1.5,
        borderColor:Colors.statusBarFontColor,
        transform:[{rotate:"45deg"}]
    }
})