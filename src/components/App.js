import React, {Component} from "react";
import Header from "./Header";
import Main from "./Main";
import './styles.css';
import Alert from "./Alert";

class App extends Component{
    render(){
        return (
            <div className='main-container'>
                <Header/>
                <Alert/>
                <Main/>
            </div>
        )
    }
}

export default App;