import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './store/index';
import { STORY_ARCHIVE } from "./constants/actionTypes";
import { doArchiveStory } from "./actions/archive";
import { getReadableStories } from './selectors/story';
import * as serviceWorker from './serviceWorker';

function render() {
    ReactDOM.render(
        <App
            stories={ getReadableStories(store.getState()) }
            onArchive={ (id) => { store.dispatch(doArchiveStory(id)) } }
        />
        , document.getElementById('root'));

}

store.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
