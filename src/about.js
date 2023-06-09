import React, { useEffect } from 'react'
import './about.css'
import Clients from './components/clients'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Prefooter from './components/prefooter'
import Banner from './components/banner'
import Ul from './components/ul'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Aboutus() {

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

      <div className='aboutcont' >
        <div className='first x8'>
          <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeIn" duration={ 1.5 }>

            <h1>About DAMAN</h1>
            <p>
              <b>Happiness..</b> When His Highness Sheikh Mohammed bin Rashid Al Maktoum, Vice President,
              Prime Minister and the ruler of Dubai launched the Happiness Agenda, we knew with absolute certainty
              that we would be an integral part of this step that is expected to result in numerous
              changes and lead to the enhancement of many sectors. Since this agenda aims to bring
              happiness to people, it will in turn encourage creativity and reduce many of the burdens
              that hinder progress and development not only on the individual and social level,
              but the nation as a whole.
            </p>
          </AnimationOnScroll>
        </div>

        <div className='snd'>
          <ul>

            <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInLeft" delay={ 300 } >
              <li>Provide the foundations for major companies and projects.</li>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInLeft" delay={ 400 } >
              <li>Draw up long-term strategic plans.</li>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInLeft" delay={ 500 } >
              <li>identify an approach and an integrated system by our experts
                to ensure the ability to compete.</li>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInLeft" delay={ 600 } >
              <li>Carry out all government interactions and handle the necessary paperwork.</li>
            </AnimationOnScroll>
          </ul>
          <img src='2.jpg' alt='future development' />
        </div>

        <div className='first'>

          <p>
            Therefore, our Daman is here to contribute to that by way of introducing
            a variety of services and innovative solutions that make life easier and
            create an environment conducive for the success and development of both
            large and emerging companies. These services also extend to individuals
            and pave the way for them to raise their productive potential and overcome
            obstacles related to residency permits, ID cards, and so on. On that account,
            we are proud to be playing a role in the spreading of happiness through our
            dedicated teams who work tirelessly to serve you, wherever you are.
          </p>
          <hr style={ { width: '80%' } } />
        </div>

        <div className='thrd' >
          <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInDown" delay={ 300 } >
            <h1>Our Core Values</h1>
            <div className='subthrd' >
              <div>
                <p>&#9733; Committed to delivering the best.</p>
                <p>&#9733; We care for your business just like ours.</p>
              </div></div>
            <div className='subthrd' >
              <div>
                <p>&#9733; Honest and transparent services. </p>
                <p>&#9733; Keep learning and adapting to new technologies. </p>
              </div></div>
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll animateOnce={ true } animateIn="animate__jackInTheBox">
          <Clients />
        </AnimationOnScroll>

      </div>
      <Prefooter />
      <Footer />

    </>
  )
}
