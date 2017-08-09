/**
 * Created by anye on 2017/7/17.
 */
import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

import CommonStyle from '../../../styles/common/CommonStyle';
import DiscoveryStyle from '../../../styles/main/discovery/DiscoveryStyle';
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Colors from '../../../utils/Colors';
import FlatListView from '../../utils/FlatListView';
export default class DiscoveryPage extends Component{

    render(){
        return( <View style={CommonStyle.container}>
                <View style={CommonStyle.header}>
                    <Text style={CommonStyle.headerFont}>发现知识</Text>
                </View>
                <ScrollableTabView
                    renderTabBar={() => <ScrollableTabBar />}
                    tabBarUnderlineStyle={CommonStyle.lineStyle}
                    tabBarActiveTextColor={Colors.statusBarColor}
                    scrollWithoutAnimation={true}
                >
                    <FlatListView   tabLabel="推荐" {...this.props} tableNum={1}/>
                    <FlatListView   tabLabel="娱乐" {...this.props} tableNum={2} />
    <FlatListView   tabLabel="军事"  {...this.props} tableNum={3}/>
    <FlatListView   tabLabel="汽车"  {...this.props} tableNum={4}/>
    <FlatListView   tabLabel="财经"  {...this.props} tableNum={5}/>
                    <FlatListView   tabLabel="笑话"  {...this.props} tableNum={6}/>
                    <FlatListView   tabLabel="体育"  {...this.props} tableNum={7}/>
                    <FlatListView   tabLabel="科技"  {...this.props} tableNum={8}/>

</ScrollableTabView>
            </View>
        )
    }
}