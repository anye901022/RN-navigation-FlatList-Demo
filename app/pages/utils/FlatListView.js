/**
 * Created by anye on 2017/7/17.
 */
import React, {PureComponent} from 'react';
import {
    Animated,
    View,
    FlatList,
} from 'react-native';
import ItemComponent from  '../main/discovery/ItemComponent';
import CommonSytle from '../../styles/common/CommonStyle';
import {getItemLayout} from './Methods';
import  ItemSeparatorComponent from './ItemSeparatorComponent';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const VIEWABILITY_CONFIG = {
    minimumViewTime: 3000,
    viewAreaCoveragePercentThreshold: 15,
    waitForInteraction: true,
};


var tableNum=2;
var page=1;
var temp=tableNum;
export default class FlatListView extends PureComponent{
constructor(){
    super()
    this.state={
        ref:false,
        data:[],
        debug: false,
        horizontal: false,
        fixedHeight: true,
        logViewable: false,
        virtualized: true,
    }
}
    _scrollPos = new Animated.Value(0);

    _scrollSinkX = Animated.event(
        [{nativeEvent: { contentOffset: { x: this._scrollPos } }}],
        {useNativeDriver: true},
    );
    _scrollSinkY = Animated.event(
        [{nativeEvent: { contentOffset: { y: this._scrollPos } }}],
        {useNativeDriver: true},
    );

    componentDidUpdate() {
        this._listRef.getNode().recordInteraction();
    }


    render(){
        tableNum=this.props.tableNum;
       const {ListHeaderComponent}=this.props;
        const filteredData = this.state.data;

        return(
            <View style={CommonSytle.container}

            >
                    <AnimatedFlatList
                        ListHeaderComponent={ListHeaderComponent}
                        ItemSeparatorComponent={ItemSeparatorComponent}
                        data={filteredData}
                        debug={this.state.debug}
                        disableVirtualization={!this.state.virtualized}
                        getItemLayout={this.state.fixedHeight ?
                            this._getItemLayout : undefined
                        }

                        horizontal={this.state.horizontal}
                        key={(this.state.horizontal ? 'h' : 'v') +
                    (this.state.fixedHeight ? 'f' : 'd')
                    }
                        legacyImplementation={false}
                        numColumns={1}
                        onEndReached={this._onEndReached}
                        onRefresh={this._onRefresh}
                        onScroll={this.state.horizontal ? this._scrollSinkX : this._scrollSinkY}
                        onViewableItemsChanged={this._onViewableItemsChanged}
                        ref={this._captureRef}
                        refreshing={this.state.ref}
                        renderItem={this._renderItemComponent}
                        viewabilityConfig={VIEWABILITY_CONFIG}

                    />
            </View>
        )
    }
    
    _getItemLayout = (data: any, index: number) => {
        return getItemLayout(data, index, this.state.horizontal);
    };

    _onEndReached = () => {
        if (this.state.data.length >= 1000) {
            return;
        }

if (this.state.data.length!=0)
        this._genItemData() ;
    };

    componentWillReceiveProps(nextProps){
        tableNum=nextProps.tableNum;
        if (temp!=tableNum){
            page=1
            temp=tableNum
            this._genItemData(true) ;
        }

    }

    componentDidMount(){
        if (temp!=tableNum){
            page=1
            temp=tableNum
            this._genItemData() ;
        }

    }
    _genItemData( dataref:boolean=false) {
        if(dataref){
            this.setState((state) => ({
                ref: true,
                data:[]
            }))
            page=1;
        }
        this.setState((state) => ({
                ref: true,
            }));
        const dataBlob = [];

       fetch('http://api.dagoogle.cn/news/get-news?'+'tableNum='+tableNum+'&page='+page)
            .then((response) => response.json())
            .then((responseData) => {
           page++;
                let data = responseData.data;
                let entry = data;
                let itemID=this.state.data.length;
                for(let i in entry){

                    dataBlob.push({
                        title: entry[i].title,
                        newsId: entry[i].news_id,
                        time: entry[i].edit_time,
                        url: String(entry[i].top_image),
                        text: entry[i].digest,
                        key: String(itemID),
                        source:entry[i].source,
                        pressed: false,

                    });
                    itemID++;
                }
                this.setState((state) => ({
                    ref: false,
                    data: state.data.concat(dataBlob),
                }));

            }).done();

    }
    _onRefresh = () => this._genItemData(true);

    _renderItemComponent = ({item, separators}) => {
        return (
            <ItemComponent
                item={item}
                horizontal={this.state.horizontal}
                fixedHeight={this.state.fixedHeight}
                onPress={this._pressItem}
                 onShowUnderlay={separators.highlight}
                 onHideUnderlay={separators.unhighlight}

            />
        );
    };
    _captureRef = (ref) => { this._listRef = ref; };

    _onViewableItemsChanged = (info: {
                                   changed: Array<{
                                       key: string,
                                       isViewable: boolean,
                                       item: any,
                                       index: ?number,
                                       section?: any,
                                   }>
                               }
    ) => {

        if (this.state.logViewable) {
            infoLog(
                'onViewableItemsChanged: ',
                info.changed.map((v) => ({...v, item: '...'})),
            );
        }
    };

    _pressItem = (key: string) => {
        this._listRef.getNode().recordInteraction();
if (this.props.screenProps!==undefined){
        this.props.screenProps.navigate('Note',{news_id:this.state.data[key].newsId,tableNum:tableNum});
}else {
        this.props.navigation.navigate('Note',{news_id:this.state.data[key].newsId,tableNum:tableNum});
}
    };
    _listRef: AnimatedFlatList;


}


