import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '简单介绍',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        天际服是一个致力于打造氛围良好的正版玩家圈子的Minecraft公益服务器.
        采用正版验证+公益免费的模式,确保游戏环境公平和谐.
        同时拥有大量的黑名单样本和反作弊机制,从根源杜绝影响游戏体验的情况.
      </>
    ),
  },
  {
    title: '基本设定',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        服务器设有多个优化设定，例如三叉戟增强，作物机制调整，宝箱机制调整以及幻翼机制调整等多个设定..
        调整了原版游戏体验!除此之外服务器还设有多个丰富玩法，更多附魔，职业系统...
      </>
    ),
  },
  {
    title: 'Wiki相关',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        本Wiki正在建设中,所有内容还在不断完善中.
        如果你想完善Wiki可以联系腐竹.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
