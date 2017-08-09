/**
 * Created by anye on 2017/7/17.
 */

import React,{Component} from 'react';

import {
    View,
    StatusBar,
    Image
} from 'react-native';

 import TabNavigator from 'react-native-tab-navigator';
import  DiscoveryPage from './discovery/DiscoveryPage';
import MyPage from './my/MyPage';
import MyNoteDrawerPage from './mynote/MyNoteDrawerPage';
import ArderPage from './arder/ArderPage';

import MainStyle from '../../styles/main/MainStyle';
import statusBarStyle from '../../styles/common/statusBarStyle';
import Colors from '../../utils/Colors';


export  default class MainPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'myNote',
        }

    }

    static  navigationOptions={
        header:null
    };


    render(){

        return(
            <View style={statusBarStyle.container}>
                <StatusBar
                    backgroundColor={Colors.transparent}
                    translucent={true}/>
                <TabNavigator>

                    <TabNavigator.Item
                        title="笔记"
                        renderIcon={()=><Image source={require('../../images/editin0.png')} style={MainStyle.icon}/>}
                        renderSelectedIcon={() => <Image source={require('../../images/editin1.png')} style={MainStyle.icon}/>}
                        onPress={() => {
                            this.setState({selectedTab: 'myNote'})
                        }}
                        selected={this.state.selectedTab == 'myNote'}
                    >

                        <MyNoteDrawerPage screenProps={this.props.navigation}/>
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        title="发现"
                        renderIcon={()=><Image source={require('../../images/discover0.png')} style={MainStyle.icon}/>}
                        renderSelectedIcon={() => <Image source={require('../../images/discover1.png')} style={MainStyle.icon}/>}
                        onPress={() => {
                            this.setState({selectedTab: 'discovery'})
                        }}
                        selected={this.state.selectedTab == 'discovery'}
                    >
                        <DiscoveryPage  {...this.props}/>
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        title="休闲"
                        renderIcon={()=><Image source={require('../../images/arder0.png')} style={MainStyle.icon}/>}
                        renderSelectedIcon={() => <Image source={require('../../images/arder1.png')} style={MainStyle.icon}/>}
                        onPress={() => {
                            this.setState({selectedTab: 'arder'})
                        }}
                        selected={this.state.selectedTab == 'arder'}
                    >
                        <ArderPage {...this.props} />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        title="我的"
                        renderIcon={()=><Image source={require('../../images/my0.png')} style={MainStyle.icon}/>}
                        renderSelectedIcon={() => <Image source={require('../../images/my1.png')} style={MainStyle.icon}/>}
                        onPress={() => {
                            this.setState({selectedTab: 'my'})
                        }}
                        selected={this.state.selectedTab == 'my'}
                    >
                        <MyPage {...this.props}/>
                    </TabNavigator.Item>

                </TabNavigator>
            </View>
        )
    }
}



