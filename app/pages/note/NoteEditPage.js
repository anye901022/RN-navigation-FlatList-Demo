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
        this.state={

            data:[],

        }
    }

    componentDidMount(){


        // news_id=this.props.navigation.params.news_id;
        // tableNum=this.props.navigation.params.tableNum;

         this._genItemData() ;
    }
    static navigationOptions={
        header:null
    }

    _genItemData( dataref:boolean=false) {


        fetch('http://api.dagoogle.cn/news/single-news?'+'tableNum='+this.props.navigation.state.params.tableNum+'&news_id='+this.props.navigation.state.params.news_id
            )
            .then((response) => response.json())
            .then((responseData) => {

            var content=`<!DOCTYPE html> 
                <html>
                <head>
                <title>哈哈</title>
                <meta http-equiv="content-type" content="text/html; charset=utf-8">
                <meta name="viewport" content="width=320, user-scalable=no">
                </head>
                <body>`+
                responseData.data.content+
               ` </body> 
                </html>`;
                responseData.data.content=content;
            console.log(responseData)
                this.setState((state) => ({
                    data:responseData.data,
                }));

            }).done();

    }

    render() {

console.log(this.state.data.content)

        return (
            <View style={{flex:1}}>
                <View style={CommonStyle.header}>
                    <Text style={CommonStyle.headerFont}>详情</Text>

                    <TouchableOpacity style={CommonStyle.iconLeft}
                                      onPress={()=>this.props.navigation.goBack()}
                    >
                        <LeftIcon/>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                <Text style={{backgroundColor:"#fff",fontSize:15,fontWeight:"bold",
                    margin:"auto",
                    paddingTop:10,
                    paddingLeft:20,
                }}>{this.state.data.title}</Text>
                <WebView
                    style={{
                        backgroundColor: "#ffffff",
                        flex:1
                    }}
                    source={{html:this.state.data.content}}
                />
                </View>
            </View>
        )
    }
}