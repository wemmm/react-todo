import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoList from './TodoList';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<TodoList />, document.getElementById('another_thing'));
registerServiceWorker();
