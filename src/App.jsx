import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";
import  RoutinePage  from "./components/RoutinePage";
import LoginPage from '/src/components/LoginPage.jsx';
// import tasks from "./Tasks.json";
import { useDbData, useAuthState } from './utilities/firebase';
import BottomNavbar from './components/BottomNavBar';
import ProfilePage from './components/ProfilePage';
import SummaryPage from './components/SummaryPage';

const App = () => {
  const [data, error] = useDbData("/");
  const [user] = useAuthState();
  if (error) return <h1>Error loading data: {`${error}`}</h1>;
  if (data === undefined) return <h1>Loading data...</h1>;
  if (!data) return <h1>No user data found</h1>;
  
  return (
    <div className="App">
      {user? <BrowserRouter>
        <Routes>
          <Route path ="/" element={<RoutinePage  routines={data.tasks}/>}></Route>
          <Route path ="/profile" element={<ProfilePage />}></Route>
          <Route path ="/summary" element={<SummaryPage routines={data.tasks}/>}></Route>
        </Routes>
        <BottomNavbar></BottomNavbar>
      </BrowserRouter>:<LoginPage/>}
    </div>
  );
};

export default App;
