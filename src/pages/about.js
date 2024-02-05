import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about-1.png'}
          title={`瑞腾农资 \n 四年老店，退货包运费`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            概览
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            产品与服务
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            未来展望
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
            在过去的四年里，这家农药小店铺经历了从无到有，从小到大的成长历程。作为一家专营农药销售的商店，
            我们致力于为农户提供安全、高效的农药产品，助力农业生产。店铺以诚信经营、质量为本的原则，赢得了农户的信赖与支持。
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </Container>

        {/* <div className={styles.imageContainer}> */}
          {/* <img alt={'shirt brand'} src={'/about1.png'}></img> */}
        {/* </div> */}

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>产品与服务</h3>
            <div ref={valuesRef}>
              <p>
              产品种类丰富：经过四年的发展，店铺已拥有各类农药产品，涵盖了杀虫剂、杀菌剂、除草剂等系列，满足了农户的不同需求。
              定制化服务：针对不同农作物和地区特点，我们提供专业的农药使用建议，帮助农户解决病虫害问题。
              定期培训：为了提高农户的农药使用知识和技能，我们定期举办农药使用培训课程，受到了农户的热烈欢迎。
              </p>

              {/* <img alt={'founder'} src={'/about2.png'}></img> */}
            </div>
            <h3>未来展望</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
              未来，我们将继续秉承诚信、创新、务实的经营理念，积极拓展市场，优化产品结构，提高服务质量。
              不断加强与农户的合作，共同推动农业生产的可持续发展。
              同时，我们将积极探索新的业务模式和增长点，为实现店铺的长期发展目标不懈努力。
              </p>
          
            </div>
          </div>
        </Container>

      </div>
    </Layout>
  );
};

export default AboutPage;
