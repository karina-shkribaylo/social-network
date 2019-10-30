import React from 'react';
import './App.css';
import Navbar from './components/NavbarComponent/NavbarComponent';
import {Route} from "react-router-dom";
import MessagesPageContainer from "./components/Messages/MessagesPageContainer";
import UsersPageContainer from "./components/Users/UsersPageContainer";
import ProfileContainer from "./components/Profile/ProfilePageContainer";
import HeaderContainer from "./components/HeaderComponent/HeaderContainer";
import LoginPage from "./components/LoginComponent/LoginComponent";

const App = () => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <MessagesPageContainer /> }/>

                    <Route path='/profile/:userId?'
                           render={ () => <ProfileContainer /> }/>

                    <Route path='/users'
                           render={ () => <UsersPageContainer /> }/>

                    <Route path='/login'
                           render={ () => <LoginPage /> }/>


                </div>
            </div>
        )
}

export default App;