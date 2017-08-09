
/**
 * Created by anye on 2017/7/17.
 */
import React, {PureComponent} from 'react';
import {
    View
} from 'react-native';
import styles from '../../styles/utils/FlatListStyle';
export default class ItemSeparatorComponent extends PureComponent {
    render() {
        const style = this.props.highlighted
            ? [styles.itemSeparator, {marginLeft: 0, backgroundColor: 'rgb(217, 217, 217)'}]
            : styles.itemSeparator;
        return <View style={style} />;
    }
}