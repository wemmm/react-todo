import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoList from './TodoList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders the TodoList component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList />, div);
});
