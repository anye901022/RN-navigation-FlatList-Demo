
/**
 * Created by anye on 2017/7/17
 */

import React from 'react';
import  {StyleSheet,
    Platform
} from 'react-native';

const HEADER = {height: 30, width: 100};
const SEPARATOR_HEIGHT = StyleSheet.hairlineWidth;
export  default styles = StyleSheet.create({
    headerFooter: {
        ...HEADER,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerFooterContainer: {
        backgroundColor: 'rgb(239, 239, 244)',
    },
    horizItem: {
        alignSelf: 'flex-start', // Necessary for touch highlight
    },
    item: {
        flex: 1,
    },
    itemSeparator: {
        height: SEPARATOR_HEIGHT,
        backgroundColor: 'rgb(200, 199, 204)',
        marginLeft: 60,
    },
    option: {
        flexDirection: 'row',
        padding: 8,
        paddingRight: 0,
    },
    row: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
    },
    searchTextInput: {
        backgroundColor: 'white',
        borderColor: '#cccccc',
        borderRadius: 3,
        borderWidth: 1,
        paddingLeft: 8,
        paddingVertical: 0,
        height: 26,
        fontSize: 14,
        flexGrow: 1,
    },
    separator: {
        height: SEPARATOR_HEIGHT,
        backgroundColor: 'rgb(200, 199, 204)',
    },
    smallSwitch: Platform.select({
        android: {
            top: 1,
            margin: -6,
            transform: [{scale: 0.7}],
        },
        ios: {
            top: 4,
            margin: -10,
            transform: [{scale: 0.5}],
        },
    }),
    stacked: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
    },
    thumb: {
        width: 50,
        height: 50,
        left: -5,
    },
    spindicator: {
        marginLeft: 'auto',
        marginTop: 8,
        width: 2,
        height: 16,
        backgroundColor: 'darkgray',
    },
    stackedText: {
        padding: 4,
        fontSize: 18,
    },
    text: {

        fontSize:15,
        fontWeight:"bold"
    },
    content:{
        flexDirection:"column",
        flex: 1,

    }
});