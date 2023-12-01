import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import Courseimg from '@site/static/img/log.png';
export default function Courses() {
  return (
    <section>
       <h3 className="text--center">Courses</h3>
       <div className="container">
        <div className="row">
      <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Courseimg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">Web Devlopment</Heading>
        <p>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
        </p>
      </div>
    </div>
    </div>
    </div>
    </section>
  );
}
