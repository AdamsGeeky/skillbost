import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Homepage from '@site/src/components/Homepage'
import Courses from '../components/Courses'
import Mentors from '../components/Mentors'
import styles from './index.module.css'

import Link from '@docusaurus/Link'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
<header className={clsx('hero hero--primary',styles.heroBanner)}>
  <div className="hero hero--primary">
  <div className="container">
    <h1 className="hero__title">SkillBoost</h1>
    <p className="hero__subtitle">
    we believe in the extraordinary power of skills to drive innovation and create solutions that matter. At GDSC GSU, we've crafted a mentorship program that goes beyond traditional learning, focusing on not just expertise but also the essential skills necessary to unlock the full potential of Google Technology.

    </p>
    <div>
      <Link to="https://gdsc.community.dev/gombe-state-university/">
      <button className="button button--secondary button--lg button--Primary">Get Started</button>
      </Link>
    </div>
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
