/**
 * Created by anye on 2017/7/17.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import {DrawerNavigator} from'react-navigation';
import CommonStyle from '../../../styles/common/CommonStyle';
import FlatListView from '../../utils/FlatListView';
import DrawerNotePage from './DrawerNotePage';
import Swiper from './Swiper';

var tableNum=1;
class MyNotePage extends Component{

    constructor(props){
        super(props);
        this.state={
            tableNum:1,

        }
    }
    static navigationOptions = {
        drawerLabel: 'Home',

    };
    componentWillReceiveProps(nextProps){
        this.setState({
            tableNum:nextProps.navigation.state.params.tableNum,
        });
this.render();

    }
    shouldComponentUpdate(){

        return true;
    }

    render(){


        return(
            <View style={CommonStyle.container}>
                <View style={CommonStyle.header}>
                    <Text style={CommonStyle.headerFont}>{this.props.navigation.state.params!=undefined?this.props.navigation.state.params.name:'推荐'}</Text>
                    <TouchableOpacity style={CommonStyle.iconRight}
                    onPress={()=>this.props.screenProps.navigate("Note0")}
                    >
                    <Image source={require('../../../images/edit.png')} style={CommonStyle.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={CommonStyle.iconLeft}
                                      onPress={()=>this.props.navigation.navigate('DrawerOpen')}
                    >
                    <Image source={require('../../../images/Category.png')} style={CommonStyle.icon}/>
                    </TouchableOpacity>
                </View>


                    <FlatListView
                        ListHeaderComponent={()=><Swiper/>}
                        {...this.props}   tableNum={this.state.tableNum} />


            </View>
        )
    }
}

export default MyNoteDrawerPage=DrawerNavigator({
    Home:{
        screen:MyNotePage
    },

},
    {
        drawerWidth:270,
        drawerPosition:'left',
        contentComponent:props=><DrawerNotePage nav={props.navigation} nvigater={props.screenProps}/>,
        contentOptions:{
            initialRouteName:MyNotePage
        }
    }
)