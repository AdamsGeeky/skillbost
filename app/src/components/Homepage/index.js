import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const AboutList = [
  {
    title: 'Skill First Approach',
    Svg: require('@site/static/img/connect.svg').default,
    description: (
      <>
        We prioritize skill development as the cornerstone of innovation.
      </>
    ),
  },
  {
    title: 'Innovation Mindset',
    Svg: require('@site/static/img/Pair.svg').default,
    description: (
      <>
        Gain hands-on experience to confidently leverage Google Technology.
      </>
    ),
  },
  {
    title: 'Practical Expertise',
    Svg: require('@site/static/img/team.svg').default,
    description: (
      <>
         Immerse yourself in a culture that values creativity, critical thinking, and solution-oriented approaches.
      </>
    ),
  },
];



function About({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {AboutList.map((props, idx) => (
            <About key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
