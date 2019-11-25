import { createStore } from 'redux';
import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { CounterReducer } from './reducers';
import { CounterContainer } from './containers'
import 'bootstrap/dist/css/bootstrap.css';

//create store 
const appStore = createStore(CounterReducer);

const App = () => {
      return <Provider store={appStore}>
            <div className="container">
                  <CounterContainer />
            </div>
      </Provider>
}
render(<App />, document.getElementById('root'));