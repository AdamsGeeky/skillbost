import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const AboutList = [
  {
    title: 'Connect',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Learn',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Growth',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];


const PartnersList = [
  {
    title: 'Connect',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,

  },
  {
    title: 'Learn',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  },
  {
    title: 'Growth',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
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

// Partners

function Partners({Svg, title}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
      <h3 className="hero__title">Our Partners</h3>
      <div className="container">
        <div className="row">
          {AboutList.map((props, idx) => (
            <Partners key={idx} {...props} />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
