/**
 * Created by anye on 2017/7/17.
 */
import React, {PureComponent} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import DrawerNoteStyle from '../../../styles/main/mynote/DrawerNoteStyle';
import Colors from '../../../utils/Colors';

import UpIcon from '../../utils/UpDown/UpIcon';
import DownIcon from '../../utils/UpDown/DownIcon';
export default class DrawerNotePage extends PureComponent {



    render() {
        return (
            <View style={DrawerNoteStyle.container}>
                <View style={DrawerNoteStyle.topPhontoBG}>
                <TouchableOpacity
                    style={DrawerNoteStyle.topPhotoBtn}
                >
              <Image source={require('../../../images/1.jpg')} style={DrawerNoteStyle.topPhoto}/>
                </TouchableOpacity>

                </View>
                <ScrollView>
                <TouchableOpacity style={DrawerNoteStyle.noteSelect} onPress={()=>this.props.nav.navigate("Home",{tableNum:1,name:'推荐'})}>
                    <View style={DrawerNoteStyle.noteImageView}>
                        <Image source={require('../../../images/classify.png')} style={DrawerNoteStyle.imageIcon}/>
                    <Text style={DrawerNoteStyle.noteText}>推荐</Text>
                    </View>
                        {/*<DownIcon style={DrawerNoteStyle.noteIcon} iconColor={Colors.Buy_item_select_color}/>*/}

                </TouchableOpacity>
                    <TouchableOpacity style={DrawerNoteStyle.noteSelect} onPress={()=>this.props.nav.navigate("Home",{tableNum:2,name:'娱乐'})}>
                        <View style={DrawerNoteStyle.noteImageView}>
                            <Image source={require('../../../images/share.png')} style={DrawerNoteStyle.imageIcon}/>
                            <Text style={DrawerNoteStyle.noteText}>娱乐</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={DrawerNoteStyle.noteSelect} onPress={()=>this.props.nav.navigate("Home",{tableNum:3,name:'军事'})}>
                        <View style={DrawerNoteStyle.noteImageView}>
                            <Image source={require('../../../images/collection.png')} style={DrawerNoteStyle.imageIcon}/>
                            <Text style={DrawerNoteStyle.noteText}>军事</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.nav.navigate("Home",{tableNum:4,name:'汽车'})} style={DrawerNoteStyle.noteSelect} >
                        <View style={DrawerNoteStyle.noteImageView}>
                            <Image source={require('../../../images/set1.png')} style={DrawerNoteStyle.imageIcon}/>
                            <Text style={DrawerNoteStyle.noteText}>汽车</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.nav.navigate("Home",{tableNum:5,name:'财经'})} style={DrawerNoteStyle.noteSelect}>
                        <View style={DrawerNoteStyle.noteImageView}>
                            <Image source={require('../../../images/set1.png')} style={DrawerNoteStyle.imageIcon}/>
                            <Text style={DrawerNoteStyle.noteText}>财经</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.nav.navigate("Home",{tableNum:6,name:'笑话'})} style={DrawerNoteStyle.noteSelect}>
                        <View style={DrawerNoteStyle.noteImageView}>
                            <Image source={require('../../../images/set1.png')} style={DrawerNoteStyle.imageIcon}/>
                            <Text style={DrawerNoteStyle.noteText}>笑话</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.nav.navigate("Home",{tableNum:7,name:'体育'})} style={DrawerNoteStyle.noteSelect}>
                        <View style={DrawerNoteStyle.noteImageView}>
                            <Image source={require('../../../images/set1.png')} style={DrawerNoteStyle.imageIcon}/>
                            <Text style={DrawerNoteStyle.noteText}>体育</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.nav.navigate("Home",{tableNum:8,name:'科技'})} style={DrawerNoteStyle.noteSelect}>
                        <View style={DrawerNoteStyle.noteImageView}>
                            <Image source={require('../../../images/set1.png')} style={DrawerNoteStyle.imageIcon}/>
                            <Text style={DrawerNoteStyle.noteText}>科技</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.nvigater.navigate("Set")} style={DrawerNoteStyle.noteSelect}>
                        <View style={DrawerNoteStyle.noteImageView}>
                            <Image source={require('../../../images/set1.png')} style={DrawerNoteStyle.imageIcon}/>
                            <Text style={DrawerNoteStyle.noteText}>设置</Text>
                        </View>

                    </TouchableOpacity>

                </ScrollView>
            </View>
        )
    }
}