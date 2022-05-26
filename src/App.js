import React, { useState } from 'react'
import head from './utilities/backgroundImg.png'
import './index.css'
import Posts from './components/Posts'

const App = ({jobs}) => {

    const [filteredName, setFilteredName] = useState([{
        id: "",
        company: "",
        description: "",
        title: "",
        type: "",
        location: "",
        time: ""
    }]);

    const handleSearch = (e) =>{
        const title = e.target.value;
        const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(title.toLowerCase()));
        setFilteredName([...filteredName, filteredJobs]);
    }   

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1><strong>Github</strong> Jobs</h1>
                </div>
            </div>
            <form className="row justify-content-center" onSubmit={handleSubmit}>
                <img src={head} alt="head" className="col-md-12 position-relative" />
                
                <input type="text" className="col-6 position-absolute mt-5" 
                placeholder="Tittle, companies, expertise or benefits" 
                autoComplete='off'
                onChange={handleSearch}
                />


                <button className="btn-search btn btn-primary col-1 position-absolute mt-5">Search</button>
            </form>

            <div className="row">
                <aside className="col-4 mt-5">
                    <input className="form-check-input" type="checkbox" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Full time
                    </label>

                    <p className="text-secondary mt-4">LOCATION</p>
                    <input type="text" className="col-3 position-absolute mt-1" 
                    placeholder="City, state, zip code or country" 
                    autoComplete='off'
                    />

                    <div className="row mt-4">
                        <div className="col-1 mt-5">
                            <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        </div>
                        <div className="col-3 mt-5">
                            <label className="form-check-label " htmlFor="flexRadioDefault1">London</label>
                            <label className="form-check-label " htmlFor="flexRadioDefault1">Amsterdam</label>
                            <label className="form-check-label " htmlFor="flexRadioDefault1">New York</label>
                            <label className="form-check-label " htmlFor="flexRadioDefault1">Berlín</label>
                        </div>
                    </div>
                </aside>
                <div className="col-8 ml-5">
                    {
                    filteredName.map(item => {
                            for(let i = 0; i < item.length; i++){
                                return (
                                    <Posts key={item[i].id} jobs={item[i]} />
                                )
                            }
                    })
                    }
                </div>


            </div>
        </div>
            
        
    )
}

export default App