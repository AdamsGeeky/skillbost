import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import Courseimg from '@site/static/img/log.png';
export default function Courses() {
  return (
    <section>
       <h3 className="text--center">Courses</h3>
       <div className="card-demo">
  <div className="card">
    <div className="card__image">
      <img
        src={Courseimg}
        alt="Image alt text"
        title="Logo Title Text 1" />
    </div>
    <div className="card__body">
      <h4>Quaco Lighthouse</h4>
      <small>
        The Quaco Head Lighthouse is a well maintained lighthouse close to St.
        Martins. It is a short, beautiful walk to the lighthouse along the
        seashore.
      </small>
    </div>
    <div className="card__footer">
      <button className="button button--primary button--block">Visit</button>
    </div>
  </div>
</div>
    </section>
  );
}
