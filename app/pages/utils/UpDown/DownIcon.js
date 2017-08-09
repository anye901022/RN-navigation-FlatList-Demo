import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
/**
 * Created by anye on 2017/7/17 0016.
 */

export default class DownIcon extends Component {
    render() {
        var iconColor=this.props.iconColor;
        var styles=this.props.style
        return( <View>
                <View style={[leftStyles.left,styles,{borderColor:iconColor}]}></View>
            </View>
        )
    }
}

const leftStyles = StyleSheet.create({
    left:{
        borderRightWidth:2,
        borderBottomWidth:2,
        transform:[{rotate:"45deg"}]
    },
});

