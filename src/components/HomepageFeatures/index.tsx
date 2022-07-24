import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Ease of Use',
    description: (
      <>
        Create suggestions and easily manage them through bot commands. Designed for the most simple usage.
      </>
    ),
  },
  {
    title: 'Productive Management',
    description: (
      <>
        Allow certain roles to manage suggestions such as approving/rejecting and configuring DMs giving server members full information that helps them to vote.
      </>
    ),
  },
  {
    title: 'Extensive Configuration',
    description: (
      <>
        Configure a range of features from the channel suggestions will be submitted down to if DMs can be sent to users or not.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md padding-bottom--lg">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
