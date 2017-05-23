import { browserHistory } from 'react-router';
import store from '../store';

export function handleItemChange(callback, item, event) {
  store.dispatch(callback(item, event.target.value)); 
}

export function isLoggedOut(user) {
  if (user.username === '') {
    browserHistory.push('/');
  }
}

export function isLoggedIn(user) {
  if (user.username !== '') {
    browserHistory.push('/');
  }
}
