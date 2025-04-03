import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '简介',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        天际服致力于打造温馨友善的 <code>正版Minecraft公益社区</code>. 
        采用 <code>正版验证+公益免费</code> 的模式,确保游戏环境公平和谐.
      </>
    ),
  },
  {
    title: '设定',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        服务器 <code>基于原版</code> 做出了<u><a href="/category/基本设定"><code>多样的优化</code></a></u>, 
        同时对于原版玩法进行了拓展. 如 <u><a href="/category/插件教程"><code>更多附魔、MCMMO</code></a></u> 等
      </>
    ),
  },
  {
    title: '贡献',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        本文档站仍在不断完善, 
        若您想为此文档做出贡献,
        请访问 <u><a href="https://github.com/Tianji-Server/TianjiServer2thWiki"><code>Github仓库</code></a></u>
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
