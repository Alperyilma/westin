import React from 'react'
import SectionTitle from '../SectionTitle'
import BlogItem from './BlogItem'

const Blog = () => {
    return (
        <section id="blog" class="blog blog-02 py-6">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                       <SectionTitle desc="Latest News" title="Blog"/>
                    </div>
                </div>
                <div class="row mt-3">
                 <div class="col-md-6 col-lg-4">
                    <BlogItem 
                    image="assets/img/blog-img-01.png"
                    date="22th may"
                    title="Write Your Dreams"  
                    name="Jone Doe"
                    number="5"
                    explanation="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod."
                    text="Read More..."  
                    />
                 </div>
                 <div class="col-md-6 col-lg-4">
                    <BlogItem 
                    image="assets/img/blog-img-02.png"
                    date="12th june"
                    title="Enjoy Your Happy Life"  
                    name="Jone Doe"
                    number="2"
                    explanation="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod."
                    text="Read More..."  
                    />          
                </div>
                <div class="col-md-6 col-lg-4">
                    <BlogItem 
                    image="assets/img/blog-img-03.png"
                    date="25th Nov"
                    title="Beautiful Life"  
                    name="Jone Doe"
                    number="2"
                    explanation="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod."
                    text="Read More..."  
                    />
                </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
