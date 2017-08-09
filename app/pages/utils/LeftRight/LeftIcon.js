import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
/**
 * Created by anye on 2017/7/17 0016.
 */

import Colors from '../../../utils/Colors';

export default class LeftIcon extends Component {
    render() {
        return( <View>
                <View style={leftStyles.left}></View>
            </View>
        )
    }
}

const leftStyles = StyleSheet.create({
    left:{
        width:15,
        height:15,
        borderLeftWidth:2,
        borderBottomWidth:2,
        borderColor:Colors.statusBarFontColor,
margin:2,
        transform:[{rotate:"45deg"}]
    },
});

