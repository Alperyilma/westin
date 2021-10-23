import React from 'react'
import SectionTitle from '../SectionTitle'
import TestimonialItem from './TestimonialItem'

const Testimonial = () => {
    return (
        <section id="testimonial" class="testimonial-02 py-6 bg-grey">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle desc="What people say" title="Testimonial"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="owl-carousel">
                            <TestimonialItem image="assets/img/man.png" message="In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready." name="John Doe," degree="Seo Manager"/>
                            
                            <TestimonialItem image="assets/img/woman-avator.png" message=" In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready." name="Merry Doe," degree="Seo Manager"/>
                            
                            <TestimonialItem image="assets/img/woman.png" message="In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready." name="Sarah Doe," degree="Seo Manager"/>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
