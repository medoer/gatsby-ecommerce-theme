import { Link } from 'gatsby';
import React, { useState } from 'react';

import Accordion from '../Accordion';
import Container from '../Container';
import Dropdown from '../Dropdown/Dropdown';
import FormInputField from '../FormInputField/FormInputField';
import Icon from '../Icons/Icon';
import Button from '../Button';
import Config from '../../config.json';
import * as styles from './Footer.module.css';

const Footer = (prop) => {
  const [email, setEmail] = useState('');

  const subscribeHandler = (e) => {
    e.preventDefault();
    setEmail('');
    console.log('Subscribe this email: ', email);
  };

  const handleSocialClick = (platform) => {
    window.open(Config.social[platform]);
  };

  const renderLinks = (linkCollection) => {
    return (
      <ul className={styles.linkList}>
        {linkCollection.links.map((link, index) => {
          return (
            <li key={index}>
              <Link className={`${styles.link} fancy`} to={link.link}>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={styles.root}>
      <Container size={'large'} spacing={'min'}>
        <div className={styles.content}>
          <div className={styles.contentTop}>
            {Config.footerLinks.map((linkCollection, indexLink) => {
              return (
                <div className={styles.footerLinkContainer} key={indexLink}>
                  {/* for web version */}
                  <div className={styles.footerLinks}>
                    <span className={styles.linkTitle}>
                      {linkCollection.subTitle}
                    </span>
                    {renderLinks(linkCollection)}
                  </div>
                  {/* for mobile version */}
                  <div className={styles.mobileFooterLinks}>
                    <Accordion
                      customStyle={styles}
                      type={'add'}
                      title={linkCollection.subTitle}
                    >
                      {renderLinks(linkCollection)}
                    </Accordion>
                  </div>
                </div>
              );
            })}
            <div className={styles.newsLetter}>
              <div className={styles.newsLetterContent}>
                <span className={styles.linkTitle}>订阅</span>
                <p className={styles.promoMessage}>
                  首次购物可享受15%的折扣！此外，您将第一时间了解销售、新产品发布和独家优惠信息！
                </p>
                <form
                  className={styles.newsLetterForm}
                  onSubmit={(e) => subscribeHandler(e)}
                >
                  <FormInputField
                    icon={'arrow'}
                    id={'newsLetterInput'}
                    value={email}
                    placeholder={'邮箱'}
                    handleChange={(_, e) => setEmail(e)}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.contentBottomContainer}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.contentBottom}>
            {/* <div className={styles.settings}>
              <Dropdown
                label={'Country/Region'}
                optionList={Config.currencyList}
              />
              <Dropdown label={'Language'} optionList={Config.languageList} />
            </div> */}
            <div className={styles.copyrightContainer}>
              <div className={styles.creditCardContainer}>
                {/* {Config.paymentOptions.amex && (
                  <img
                    className={styles.amexSize}
                    src={'/amex.png'}
                    alt={'amex'}
                  ></img>
                )}
                {Config.paymentOptions.mastercard && (
                  <img
                    className={styles.masterSize}
                    src={'/master.png'}
                    alt={'mastercard'}
                  ></img>
                )}
                {Config.paymentOptions.visa && (
                  <img
                    className={styles.visaSize}
                    src={'/visa.png'}
                    alt={'visa'}
                  ></img>
                )} */}
              </div>
              <span>
                {/* {new Date().getFullYear()} (c) . Built by{' '}
                <Button target={true} href="https://www.matterdesign.com.au/">
                  Matter.
                </Button>{' '}
                Powered by{' '}
                <Button target={true} href="https://jamm.matter.design/">
                  JAMM.™
                </Button> */}
              </span>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
