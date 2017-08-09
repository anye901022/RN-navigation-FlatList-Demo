/**
 * Created by anye on 2017/7/17.
 */
import React, {PureComponent} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    WebView
} from 'react-native';

import CommonStyle from '../../styles/common/CommonStyle';
import LeftIcon from "../utils/LeftRight/LeftIcon";
import NoteEditStye from '../../styles/note/NoteEditStyle';


export default class NoteEditPage extends PureComponent {

    constructor(){
        super()

    }

    static navigationOptions={
        header:null
    }


    render() {


        return (
            <View style={{flex:1}}>
                <View style={CommonStyle.header}>
                    <Text style={CommonStyle.headerFont}>lala</Text>

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