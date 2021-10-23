import React from 'react'

const BlogItem = (props) => {
    return (
        <div class="blog-item">
            <div class="image-blog">
                <img src={props.image} alt="/"/>
            </div>
            <div class="blog-box">
                <div class="blog-time">{props.date}</div>
                    <h5 class="Blog-title mb-0"><a href="#">{props.title}</a></h5>
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <a href="#">
                                    <i class="fas fa-user-alt base-color"></i>
                                        <span >{props.name}</span>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="javascript:void(0)">
                                    <i class="fas fa-comment base-color"></i>
                                        <span >{props.number}</span>
                                </a>
                            </li>
                        </ul>
                        <p class="mb-0">{props.explanation}</p>
                        <div class="blog-link">
                        <a href="#">{props.text}</a>
                        </div>
                    </div>
            </div>
    )
}

export default BlogItem
