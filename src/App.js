import React from 'react'
import head from './utilities/backgroundImg.png'
import './index.css'

const App = () => {



    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1><strong>Github</strong> Jobs</h1>
                </div>
            </div>
            <form className="row justify-content-center">
                <img src={head} alt="head" className="col-md-12 position-relative" />
                <input type="text" className="ip col-6 position-relative" placeholder="Search for a job" />
            </form>

        </div>
            
        
    )
}

export default App