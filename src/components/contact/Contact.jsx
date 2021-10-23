import React from 'react'
import SectionTitle from '../SectionTitle';
import ContactItem from './ContactItem';

const Contact = () => {
    return (
        <section id="contact" className="contact-01 py-6">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <SectionTitle desc="Get In Tough" title="Contact Us"/>
                        
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="row">
                            
                            <div className="col-lg-12">
                                <ContactItem img="fas fa-envelope-open" title="Mail Me" explanation="[email&#160;protected]"/>
                            </div>
                         
                            <div className="col-lg-12">
                            <ContactItem img="fas fa-phone-square" title="Call Us On" explanation="+123 456 7890"/>

    
                            </div>
                         
                            <div className="col-lg-12">
                                 <ContactItem img="fas fa-map-marked-alt" title="Visit office" explanation="24 Street, New York, United State."/>

                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="contact-box">
                            <div className="contact-form">
                                <form id="contactForm">
                                    <div className="row">
                                        <div className="col-lg-6 form-item">
                                            <div className="form-group">
                                                <input name="name" id="name" type="text" className="form-control" placeholder="First name*" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 form-item">
                                            <div className="form-group">
                                                <input name="family" id="family" type="text" className="form-control" placeholder="Last name*" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 form-item">
                                            <div className="form-group">
                                                <input name="email" id="email" type="email" className="form-control" placeholder="Your email*" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 form-item">
                                            <div className="form-group">
                                                <input name="phone" id="phone" type="tel" className="form-control" placeholder="Phone number*" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-12 form-item">
                                            <div className="form-group">
                                                <textarea name="comments" id="comments" rows="4" className="form-control textarea" placeholder="Your message..."></textarea>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 text-left">
                                            <a href="javascript:void(0)" className="pill-button-01" id="submit-btn" onclick="sendEmail()">Send Message</a>
                                            <div id="message" className="toast" role="alert" aria-live="assertive" aria-atomic="true" data-delay="4000">
                                                <div className="toast-body d-inline-block"></div>
                                                <button type="button" className="pr-3 close" data-dismiss="toast" aria-label="Close">
                                                    <span aria-hidden="true" className="lni lni-close size-xs "></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
