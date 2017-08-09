/**
 * Created by anye on 2017/7/17.
 */
import React, {PureComponent} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import CommonStyle from '../../styles/common/CommonStyle';
import LeftIcon from "../utils/LeftRight/LeftIcon";
export default class FollowPage extends PureComponent {

    static navigationOptions={
        header:null
    }

    render() {

        return (
            <View>
                <View style={CommonStyle.header}>
                    <Text style={CommonStyle.headerFont}>我的关注</Text>

                    <TouchableOpacity style={CommonStyle.iconLeft}
                                      onPress={()=>this.props.navigation.goBack()}
                    >
                        <LeftIcon/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}