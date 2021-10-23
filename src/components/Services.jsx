import React from 'react'
import SectionTitle from './SectionTitle'
import Service from './Service'

const Services = () => {
    return (
        <section id="services" class="services-02 py-6 bg-grey">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle desc="best feature" title="Services"/>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6 col-lg-4">
                         <Service image="assets/img/art-design.svg" title="Graphic Design" explanation="specialise in Graphic design Whether you need to create a new website or updat."/>
                    </div>
                    <div class="col-md-6 col-lg-4">
                         <Service image="assets/img/web-design.svg" title="Web Design" explanation="design, build & maintain websites that keep pace with our digital world."/>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <Service image="assets/img/portfolio.svg" title="App Development" explanation="build mobile first solutions for ios, Android taking your idea to polished product."/>
                    </div>
                    <div class="col-md-6 col-lg-4">
                         <Service image="assets/img/musical-notes.svg" title="Musice Writing" explanation="Music copying, writing, creat, transcription, arranging composition services."/>
                    </div>
                    <div class="col-md-6 col-lg-4">
                         <Service image="assets/img/website.svg" title="Digital Marketing" explanation="Generate your sales opportunity with our best digital marketing services."/>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <Service image="assets/img/brand-awareness.svg" title="Brand Identity" explanation="I can manufacture magic that allows your brand to stand out from the crowd."/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
