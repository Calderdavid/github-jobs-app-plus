import React from 'react'

const Posts = (props) => {

    const {id, company, title, type, location, created_at} = props.jobs;



    return (
        <div className="col-7 mt-5">
            <div className="row card mb-3">
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body" key={id}>
                            <h5 className="card-title">{company}</h5>
                            <p className="card-text"><strong>{title}</strong></p>
                            <p className="card-text">{type}</p>
                            <p className="card-text"><small className="text-muted">{location}</small></p>
                            <p className="card-text"><small className="text-muted">{created_at}</small></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Posts