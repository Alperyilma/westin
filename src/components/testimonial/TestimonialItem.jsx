import React from 'react'

const TestimonialItem = (props) => {
    return (
        <div className="testimonial-item">
            <div className="testimonial-image">
                <img src={props.image}alt="/"/>
            </div>
            <div className="testimonial-content">
                <p className="testimonial-comment"> "{props.message}"</p>
                <h6 className="testimonial-name">{props.name}, <span className="testimonial-job">{props.degree}</span></h6>
            </div>
        </div>
    )
}

export default TestimonialItem
