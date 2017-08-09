/**
 * Created by anye on 2017/7/17.
 */
import React,{PureComponent} from 'react';
import {
TouchableHighlight,
    View,
    Image,
    Text
} from 'react-native';
export  default class DiscoveryItem extends PureComponent {
    props: {
        fixedHeight?: ?boolean,
        horizontal?: ?boolean,
        item: Item,
        onPress: (key: string) => void,
        onShowUnderlay?: () => void,
        onHideUnderlay?: () => void,
    };
    _onPress = () => {
        this.props.onPress(this.props.item.key);
    };
    render() {
        const {fixedHeight, horizontal, item} = this.props;
        const itemHash = Math.abs(hashCode(item.title));
        const imgSource = THUMB_URLS[itemHash % THUMB_URLS.length];
        return (
            <TouchableHighlight
                onPress={this._onPress}
                onShowUnderlay={this.props.onShowUnderlay}
                onHideUnderlay={this.props.onHideUnderlay}
                style={horizontal ? styles.horizItem : styles.item}>
                <View style={[
                    styles.row, horizontal && {width: HORIZ_WIDTH}, fixedHeight && {height: ITEM_HEIGHT}]}>
                    {!item.noImage && <Image style={styles.thumb} source={imgSource} />}
                    <Text
                        style={styles.text}
                        numberOfLines={(horizontal || fixedHeight) ? 3 : undefined}>
                        {item.title} - {item.text}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}