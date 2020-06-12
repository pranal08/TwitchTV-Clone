import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';

const App = () =>{
    return(
        <div>
            <BrowserRouter>
            <div>
                <Route path='/' exact component={StreamList}></Route>
                <Route path='/new' exact component={StreamCreate}></Route>
                <Route path='/edit' exact component={StreamEdit}></Route>
                <Route path='/delete' exact component={StreamDelete}></Route>
                <Route path='/show' exact component={StreamShow}></Route>
            </div>
            </BrowserRouter>
        </div>
    );
}

export default App;