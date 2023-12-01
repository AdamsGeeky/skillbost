import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Homepage from '@site/src/components/Homepage'
import Courses from '../components/Courses'
import Mentors from '../components/Mentors'
import styles from './index.module.css'

import Log from '@site/static/img/log.png'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.info}>
        <div>
          <h1>
            Web Mentorship <span className='span'>Program</span>{' '}
          </h1>
          <p className='top-note'>
            This Mentorship Program is the most interesting event to enrol and get the most in demand Tech Skills. It covers Most Basic Web
            Skills, Version control and what not! Read below and know more about the program.
          </p>
          <a href='#get-started'>Register Now</a>
        </div>
        <div className='img-box'>
          <img src={Log} className='main-img' />
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={`${siteConfig.title}`} description='GDSC GSU <head />'>
      <HomepageHeader />
      <main>
        <Homepage />
        {/* <Courses/> */}
        <Mentors />
      </main>
    </Layout>
  )
}
