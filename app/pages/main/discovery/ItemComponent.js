/**
 * Created by anye on 2017/7/17.
 */
import React, {PureComponent} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,

} from 'react-native';
import styles from '../../../styles/utils/FlatListStyle';

const HORIZ_WIDTH = 200;
const ITEM_HEIGHT = 72;
type Item = {title: string, text: string, key: string, pressed: boolean, noImage?: ?boolean};
export  default class ItemComponent extends PureComponent {
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

        const imgSource = item.url;
        return (
            <TouchableOpacity
                onPress={this._onPress}
                onShowUnderlay={this.props.onShowUnderlay}
                onHideUnderlay={this.props.onHideUnderlay}
                style={horizontal ? styles.horizItem : styles.item}>
                <View style={[
                    styles.row, horizontal && {width: HORIZ_WIDTH}, fixedHeight && {height: ITEM_HEIGHT}]}>
                    <Image style={styles.thumb} source={imgSource.length>5?{uri:imgSource}:require('../../../images/1.jpg')} />
                    <View style={styles.content}>
                        <Text
                            style={styles.text}
                        >
                            {item.title}
                        </Text>

                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}