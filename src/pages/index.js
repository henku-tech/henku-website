import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import HeroMedia from '../components/HeroMedia'
import Heading from '../components/Heading'
import video from '../images/henku-home.mp4'
import DarkBox from '../components/DarkBox'
import ThreeColumnsGrid from '../components/ThreeColumnsGrid'
import Button from '../components/Button'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <HeroMedia
      heroTitle='Data Engineering & Machine Learning Consultants'
      heroInfo='We help companies build innovative and reliable products, take advantage of their data, and innovate faster with Machine Learning and Data Engineering technologies'
      heroBtnTitle="Let's talk"
      slug='#contact'
      srcMedia={video}
    />
    <div className='container verticalSpacer'>
      <div className='row'>
        <Heading
          headingTitle='Bring your product or operation to the next level'
          headingInfo='With the help of Data Engineering and Machine Learning, our company will transform your data into insights and competitive advantage'
        />
        <DarkBox />
      </div>
    </div>
    <div className='gradientHenku'>
      <div className='container verticalSpacer'>
        <div className='row'>
          <Heading
            headingTitle='How we work'
            headingInfo="Transform your data into valuable insights with our consultants' help using Data Engineering and Machine Learning solutions"
          />
          <ThreeColumnsGrid contentId='home' />
          <p className='textCenter mgTop-100'>
            <Button
              slug='/about'
              buttonClass='buttonLight'
              buttonTitle='About Us'
            >
              About Us
            </Button>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
