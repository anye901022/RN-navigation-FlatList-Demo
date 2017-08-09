/**
 * Created by anye on 2017/7/17.
 */
import React from 'react';
import {
    AppRegistry,

} from 'react-native';
import {StackNavigator} from'react-navigation';
import MainPage from './pages/main/MainPage';
import MePage from './pages/me/MePage';
import NoteEditPage from './pages/note/NoteEditPage';
import FollowPage from './pages/follow/FollowPage';
import SetPage from './pages/set/SetPage';
import CollectionPage from './pages/collection/CollectionPage';
import ReplyPage from './pages/reply/ReplyPage';
import NoteEditPage1 from './pages/hehe/NoteEditPage';

const lazyNote=StackNavigator({
    Main:{
        screen:MainPage
    },
    Me:{
        screen:MePage
    },
    Note:{
        screen:NoteEditPage
    },
    Note0:{
        screen:NoteEditPage1
    },
    Follow:{
        screen:FollowPage
    },
    Collection:{
        screen:CollectionPage
    },
    Set:{
        screen:SetPage
    },
    Reply:{
        screen:ReplyPage
    }
})

AppRegistry.registerComponent('lazyNote', () => lazyNote);
