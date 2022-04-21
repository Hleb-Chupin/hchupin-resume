import React from 'react';
import './App.scss';
import MainDescription from "./view/main-description/MainDescription";
import SideBar from "./view/side-bar/SideBar";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
    return (
        <div className="Resume-app container">
            <div className="row g-0">
                <div className="col-4">
                    <SideBar></SideBar>
                </div>

                <div className="col-8">
                    <MainDescription></MainDescription>
                </div>
            </div>
        </div>
    );
}

export default App;
