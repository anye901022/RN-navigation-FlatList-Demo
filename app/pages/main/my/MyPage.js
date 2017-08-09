/**
 * Created by anye on 2017/7/17.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import CommonStyle from '../../../styles/common/CommonStyle';
import MyStyle from '../../../styles/main/my/MyStyle';


export default class MyPage extends Component {


    render() {
        return ( <View style={CommonStyle.container}>
                <View style={CommonStyle.header}>
                    <TouchableOpacity style={CommonStyle.iconLeft}>
                        <Image style={CommonStyle.icon} source={require('../../../images/sun.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={CommonStyle.iconRight}
                    onPress={()=>this.props.navigation.navigate('Set')}
                    >
                        <Image style={CommonStyle.icon} source={require('../../../images/set_up.png')}/>
                    </TouchableOpacity>
                    <Text style={CommonStyle.headerFont}>我的</Text>
                </View>
                <View style={[MyStyle.headerContent]}>
                    <TouchableOpacity style={MyStyle.photoIn}
                                      onPress={() => this.props.navigation.navigate('Me')}
                    >
                        <Image style={MyStyle.photoImage} source={require('../../../images/photo.jpg')}/>
                    </TouchableOpacity>
                    <View style={MyStyle.headerContent_right}>
                        <Text style={MyStyle.text_UserId}>欢迎您，石鹏辉</Text>
                    </View>
                </View>
                <View>
                    <View style={[MyStyle.containerItem, {marginBottom: 0.5}]}>
                        <View style={[MyStyle.Item_Item, {marginRight: 0.5}]}>
                            <TouchableOpacity style={MyStyle.Item_image}
                            onPress={()=>this.props.navigation.navigate('Reply')}
                            >
                                <Image style={MyStyle.Item_img} source={require('../../../images/message.png')}/>
                            </TouchableOpacity>
                            <Text style={MyStyle.Item_text}>我的回复</Text>
                        </View>
                        <View style={MyStyle.Item_Item}>
                            <TouchableOpacity style={MyStyle.Item_image}
                            onPress={()=>this.props.navigation.navigate('Collection')}
                            >
                                <Image style={MyStyle.Item_img} source={require('../../../images/public1.png')}/>
                            </TouchableOpacity>
                            <Text style={MyStyle.Item_text}>我的收藏</Text>
                        </View>
                        <View style={[MyStyle.Item_Item, {marginLeft: 0.5}]}>
                            <TouchableOpacity style={MyStyle.Item_image}
                            onPress={()=>this.props.navigation.navigate('Follow')}
                            >
                                <Image style={MyStyle.Item_img} source={require('../../../images/my_ordera.png')}/>
                            </TouchableOpacity>
                            <Text style={MyStyle.Item_text}>我的关注</Text>
                        </View>
                    </View>

                    <View style={MyStyle.containerItem}>
                        <View style={[MyStyle.Item_Item, {marginRight: 0.5}]}>
                            <View style={MyStyle.Item_image}>
                                <Image style={MyStyle.Item_img} source={require('../../../images/custom.png')}/>
                            </View>
                            <Text style={MyStyle.Item_text}>我的客户</Text>
                        </View>
                        <View style={MyStyle.Item_Item}>
                            <View style={MyStyle.Item_image}>
                                <Image style={MyStyle.Item_img} source={require('../../../images/myifo.png')}/>
                            </View>
                            <Text style={MyStyle.Item_text}>公司信息</Text>
                        </View>
                        <View style={[MyStyle.Item_Item, {marginLeft: 0.5}]}>
                            <View style={MyStyle.Item_image}>
                                <Image style={MyStyle.Item_img} source={require('../../../images/password.png')}/>
                            </View>
                            <Text style={MyStyle.Item_text}>修改密码</Text>
                        </View>
                    </View>

                </View>
            </View>
        )
    }
}