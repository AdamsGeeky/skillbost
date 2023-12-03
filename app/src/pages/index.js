import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Homepage from '@site/src/components/Homepage'
import Courses from '../components/Courses'
import Mentors from '../components/Mentors'
import Partners from '../components/Partners'
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
    Welcome to the SkillBoost Mentorship Program – where skills take center stage on the hero's journey of innovation.
    Skills, the architects of progress, are the foundation upon which our mentorship program is built.

    </p>
    <div>
      <Link to="https://gdsc.community.dev/gombe-state-university/">
      <button className="button button--secondary button--lg button--Primary">Join us now</button>
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
    <Layout title={siteConfig.title} description='GDSC GSU <head />'>
      <HomepageHeader />
      <main>
        <Homepage />
        {/* <Courses/> */}
        <Mentors />
        <Partners />

      </main>
    </Layout>
  )
}
