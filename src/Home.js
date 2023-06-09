import React, { useEffect } from 'react'
import Clients from './components/clients'
import './home.css'
import './contact.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Prefooter from './components/prefooter'
import Banner from './components/banner'
import Ul from './components/ul'

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


export default function Home() {

    function scrollToHash() {

        const id = window.location.hash.substr( 1 );

        if ( id ) {
            const anchor = document.getElementById( id );

            if ( anchor ) {
                anchor.scrollIntoView();
            }
        }
    }

    useEffect( () => scrollToHash(), [] )
    return (
        <>
            <Navbar />
            <Ul />
            <Banner />

            <div className=' whyuscont '>
                <AnimationOnScroll animateOnce={ true } animateIn="animate__backInDown">
                    <h1> Hire Us For</h1>
                </AnimationOnScroll>
                <div className=' whyus '>
                    <div className=' telt '>
                        <AnimationOnScroll animateOnce={ true } animateIn="animate__slideInLeft" >
                            <h1>Security Clearances</h1>
                            <img src='security.jpg' alt='Security clearances' />
                            <p>With our qualified team, we help you in all transactions to extract the security clearances.</p>
                        </AnimationOnScroll>
                    </div>

                    <div className=' telt '>
                        <AnimationOnScroll animateOnce={ true } animateIn="animate__slideInLeft" delay={ 600 } >
                            <h1>Establishing A Facility</h1>
                            <img src='facility.jpg' alt='Facility establishing' />
                            <p>Within this step, the required documents shall be signed in order to complete the transaction for the country.</p>
                        </AnimationOnScroll>
                    </div>

                    <div className=' telt '>
                        <AnimationOnScroll animateOnce={ true } animateIn="animate__slideInLeft" delay={ 1200 }>
                            <h1>Residence</h1>
                            <img src='residence.jpg' alt='residence visa extracting' />
                            <p>With the help of our team, we speed up the process of extracting the required residence and visas.</p>
                        </AnimationOnScroll>
                    </div>

                </div>
            </div>
            <div className=' vismis '>
                <div className='nos1'>
                    <h1>About Daman</h1>
                    <p>Government & Business Setup Services in Dubai</p>
                    <p>UAE is a great long-term investment alternative,
                        and its tax-free legal framework makes it a secure
                        refuge for both offshore and onshore businesses.
                        Take advantage of the UAE government’s new company rules,
                        which provide flexible regulatory procedures, short timescales,
                        and simple approval processes. Daman is a government-approved center
                        and one of Dubai’s leading government service providers.
                        Daman services in Dubai are well-versed in the ins
                        and outs of UAE legislation on business incorporation,
                        having partnered with government officials and agencies
                        in the United Arab Emirates. We provide a one-stop-shop
                        for business setup services, trade licenses, and visa needs.
                        We will assist you with paperwork to company formation to all
                        government services under one roof, and we will make it quick
                    </p>
                </div>
                <div className='nos2'><img src='5.jpg' alt='' /></div>
            </div>
            <hr style={ { width: "80%", color: "white" } } />
            <div className=' vismis '>
                <div className='nos1'>
                    <h1>Start with us</h1>
                    <p>New Business Setup in Dubai</p>
                    <p>Ready to start your new business,
                        then Dubai is the most profitable
                        destination to launch your business.
                        At Daman, we serve as
                        the leading business/company setup
                        service provider in the UAE. We go
                        beyond business setup services providing auditing services,
                        corporate finance management, VAT compliant accounting services,
                        and much more. With perfect attention to detail, we understand the
                        importance of each business venture and utilize the huge opportunities.
                        <br />
                        Having vast knowledge and expertise in serving various business verticals,
                        our well-equipped team ensures proficiency and diligence to deliver the best solutions.
                        Moreover, we provide friendly and efficient services in setting up your business in the free zone,
                        mainland, and offshore. Our vibrant team assists you in the documentation process,
                        business licenses, visa approvals, and banking related procedures.
                        We take up your dream and make it a reality.

                    </p>
                </div>
                <div className='nos2'><img src='6.jpg' alt='' /></div>
            </div>
            <hr style={ { width: "80%", color: "white" } } />
            <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeIn">

                <div className=' idea '>
                    <img src='idea.jpg' alt='Motivational Business Quote' />
                    <p>
                        <b>“</b>It Takes An Idea, Faith And Immense Amount Of Hard Working...
                        But, Eventually, Dreams Come True.<b>”</b>
                    </p>
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeIn">

                <div className=' vismis '>
                    <div className=' nos '>
                        <img src='light.png' alt='' />
                        <h1>Our Vision</h1>
                        <p>We don’t climb up to Daman, we make it.
                            Our community of investors, elder statesmen, public figures and businessmen
                            are in need of an integrated system and an unparalleled service.
                            So we made our own summit by tending to their every need in order to smoothen the path
                            towards a steadier and brighter future where great success awaits.
                            Our vision does not only apply to our beloved country, United Arab Emirates, but extends to the Arabic world.
                            Thus, we strive to realize our global vision of achieving unprecedented growth in serving the business
                            and investment sectors.
                        </p>
                    </div>
                    <div className=' nos '>
                        <img src='target.png' alt='' />
                        <h1>Our Mission</h1>
                        <p>The mission of our Daman is to excel despite the short time window
                            to accomplish the tasks entrusted to us with the highest levels of efficiency
                            with an emphasis on maintaining our credibility and ensuring the utmost transparency
                            all for your comfort and fulfilling your expectations so as to achieve your satisfaction and approval.
                            Our mission is to help you realize your dreams on the ground, and to rise up with what we put on the ground
                            to head to the clouds, and to preserve that forever.
                            Our mission is for you to close your eyes and open them to innovative solutions
                            for your problems and a paved road to your success, free of obstacles.
                        </p>
                    </div>
                </div>
            </AnimationOnScroll>

            <hr style={ { width: "80%", color: "white" } } />
            <div className=' servcont ' >
            <AnimationOnScroll animateOnce={ true } animateIn="animate__backInDown">
                <h1> How Can We Help You?</h1>
            </AnimationOnScroll>

            <div className=' serv '>
                <div className=' telts '>
                    <AnimationOnScroll animateOnce={ true } animateIn="animate__slideInRight" >
                        <div>
                            <img src='5tama.png' alt='' />
                            <h1>DED Services</h1>
                            <p>DED, the acronym for the Department of Economic Development, Dubai.</p>
                        </div>
                    </AnimationOnScroll>

                </div>
                <div className=' telts '>
                    <AnimationOnScroll animateOnce={ true } animateIn="animate__slideInRight" >
                        <div>
                            <img src='visa.png' alt='' />
                            <h1>Visa Services In UAE</h1>
                            <p>Visiting, residing, or transiting to the UAE? Visa services will be your main requirement.</p>
                        </div>
                    </AnimationOnScroll>

                </div>
                <div className=' telts '>
                    <AnimationOnScroll animateOnce={ true } animateIn="animate__slideInRight" delay={ 1200 }>
                        <div>
                            <img src='hi.png' alt='' />
                            <h1>UAE Health Insurance</h1>
                            <p>Health insurance is a mandatory requirement for any individual residing or visiting UAE.</p>
                        </div>
                    </AnimationOnScroll>

                </div>

                <div className=' telts '>
                    <AnimationOnScroll animateOnce={ true } animateIn="animate__slideInRight" delay={ 600 }>
                        <div>
                            <img src='tasheel.png' alt='' />
                            <h1>Tasheel Services</h1>
                            <p>Tasheel services are created by the Dubai government
                                completed in less time and at an affordable budget.</p>
                        </div>
                    </AnimationOnScroll>

                </div>

                <div className=' telts '>
                    <AnimationOnScroll animateOnce={ true } animateIn="animate__slideInRight" delay={ 600 }>
                        <div>
                            <img src='bs.png' alt='' />
                            <h1>Business Setup</h1>
                            <p>Business setup in UAE is the current favorite trend among the majority of expats coming to Dubai.</p>
                        </div>
                    </AnimationOnScroll>

                </div>
                <div className=' telts '>
                    <AnimationOnScroll animateOnce={ true } animateIn="animate__slideInRight" delay={ 1200 }>
                        <div>
                            <img src='id.png' alt='' />
                            <h1>UAE ID Services</h1>
                            <p>An Emirates ID is the identification card that is provided for a resident individual or citizen of the United Arab Emirates</p>
                        </div>
                    </AnimationOnScroll>

                </div>
            </div>
        </div >
      <hr style={ { width: '80%' } } />
            <AnimationOnScroll animateOnce={ true } animateIn="animate__backInLeft">
                <div className=' advcont '>
                    <h1>Why Choose Us Exactly?</h1>
                    <p>Dubai has a lot of business opportunities. There are multitudes of options to start your own company in the UAE.<br />
                        Can you do it yourself? Yes, but it’s quite time-consuming. Here, business setup consultants guide you right from the idea conception to final launch.<br />
                        We help you choose the right jurisdiction and business activity. Moreover, we consult with the relevant authorities and government departments to speed up the process. As you know, setting up a business in Dubai requires a lot of paperwork. We handle all the legal requirements and do it efficiently.<br />
                        Our business setup services save your time and money. Business owners just relax and focus on your core business operations while we work on company setup.
                    </p>
                    <div className=' adv '>
                        <div className=' advgrid '>
                            <div>
                                <img src='star.png' alt='' />
                                <p>Expertise<br /><br />We are the right term for your business.
                                    We have the expertise and knowledge to offer impartial advice and services</p>
                            </div>
                            <div><img src='dollar.png' alt='' />
                                <p>Price<br /><br /> We Offer Our Services At An Honest Price To Ensure We Could Help
                                    Anyone At Any level From The Beginning To The End</p>
                            </div>
                            <div>
                                <img src='ear.png' alt='' />
                                <p>Communication <br /><br /> With us you’ll feel heard. We listen to our client requirements and then select the right solution that fits.
                                </p>
                            </div>
                            <div>
                                <img src='hand.png' alt='' />
                                <p>Co-operation<br /><br /> We care for your business as our own.
                                    We take a sincere interest in it and genuinely want to help your company reach its potential.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={ true } animateIn="animate__jackInTheBox">
                <Clients />
            </AnimationOnScroll>
            <Prefooter />
            <Footer />

        </>
    )
}
