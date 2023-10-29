import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";
import  RoutinePage  from "./components/RoutinePage";
import LoginPage from '/src/components/LoginPage.jsx';
import tasks from "./Tasks.json";
import { useDbData, useAuthState } from './utilities/firebase';
import BottomNavbar from './components/BottomNavBar';
import ProfilePage from './components/ProfilePage';
import 'bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  // const routines = useDbData("/tasks");
  const [user] = useAuthState();
  return (
    <div className="App">
      {/* <LoginPage/> */}
      {user? <BrowserRouter>
        <Routes>
          <Route path ="/" element={<RoutinePage routines={tasks.tasks}/>}></Route>
          <Route path ="/profile" element={<ProfilePage/>}></Route>
          <Route path ="/summary" elemetn={<></>}></Route>
        </Routes>
        <BottomNavbar></BottomNavbar>
      </BrowserRouter>:<LoginPage/>}
    </div>
  );
};

export default App;
