/**
 * Created by anye on 2017/7/17.
 */
import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

import CommonSytle from '../../../styles/common/CommonStyle';
import FlatListView from '../../utils/FlatListView';
export default class ArderPage extends Component{


    render(){

        return( <View style={CommonSytle.container}>
                <View style={CommonSytle.header}>
                    <Text style={CommonSytle.headerFont}>休闲娱乐</Text>
                </View>
                <FlatListView {...this.props} page={1} tableNum={1}/>
            </View>
        )
    }
}