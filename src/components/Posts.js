import React,{ useState } from 'react'

const Posts = (props) => {

    return (
        <div className="col-8 mt-5">
            <div className="row card mb-3">
                <div className="row g-0">
                    <div className="col-md-10">
                        <div className="card-body">
                            <h5 className="card-title">{props.job.company}</h5>
                            <p className="card-text"><strong>{props.job.title}</strong></p>
                            <p className="card-text"></p>
                            <p className="card-text"><small className="text-muted">{props.job.time}</small></p>
                            <p className="card-text"><small className="text-muted">{props.job.location}</small></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Posts