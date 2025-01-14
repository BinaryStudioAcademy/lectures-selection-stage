import * as React from 'react';
import { Link } from 'gatsby';
import shrugGif from '~/assets/images/shrug.gif';

import * as styles from './not-found-page.module.scss';

const NotFoundPage: React.FC = () => {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <img src={shrugGif} alt="shrug" className={styles.shrug} />
        <h4>— Sorry, this page hasn’t hatched yet.</h4>
        <p>
          There’s a behind-the-scenes story (and 🎬bloopers!) we are yet to
          publish about people who made these lectures for you, how they did it,
          and why we thought it is a good idea to create them in the first
          place.
        </p>
        <p>We humbly ask you to check it out later!</p>
        <br />
        <Link to="/">Go home</Link>
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in{' '}
            <code className={styles.code}>src/pages/</code>
            .
            <br />
          </>
        ) : null}
      </div>
    </main>
  );
};

export { NotFoundPage };
