import React from 'react';
import {render} from 'react-dom';
import CommentApp from './CommentApp'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

render(
    <CommentApp />, document.getElementById('root')
);
registerServiceWorker();
