import React from 'react';
import { Button } from './Button';
import ImgTV from '../../assets/images/tab-tv.png';
import ImgTablet from '../../assets/images/tab-tablet.png';
import ImgMacbook from '../../assets/images/tab-macbook.png';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

function TabContentTwo() {
  return (
    <TabContainer>
      <div className='tab-content'>
        <div className='tab-top-content'>
          <span style={{ fontSize: '1.5rem' }}>
            Watch TV shows and movies anytime, anywhere — personalized for you.
          </span>
          <Button className='btn'>try it now</Button>
        </div>
        <div className='tab-bottom-content'>
          <div>
            <img src={ImgTV} style={{ width: '18.75rem' }} alt='img'></img>
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, PlayStation, xbox, Chromecast, Apple TV, Blu-ray
              players and more.
            </p>
          </div>
          <div>
            <img
              src={ImgTablet}
              style={{ width: '18.75rem', paddingTop: '0.625rem' }}
              alt='img'
            ></img>
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, PlayStation, xbox, Chromecast, Apple TV, Blu-ray
              players and more.
            </p>
          </div>
          <div>
            <img
              src={ImgMacbook}
              style={{
                width: '18.75rem',
                paddingTop: '0.625rem',
                paddingBottom: '0.625rem',
              }}
              alt='img'
            ></img>
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, PlayStation, xbox, Chromecast, Apple TV, Blu-ray
              players and more.
            </p>
          </div>
        </div>
      </div>
    </TabContainer>
  );
}
export default TabContentTwo;

const customMedia = generateMedia({
  smDesktop: '1440px',
  tablet: '900px',
});

const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
  }
  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0;
    ${customMedia.lessThan('smDesktop')`
    grid-template-columns:repeat(2,1fr);
    
    `}
    ${customMedia.lessThan('tablet')`
    grid-template-columns:1fr;
    text-align:center;
    row-gap:1.5rem;
    
    `}
  }
  span {
    grid-column: 1 / 9;
    ${customMedia.lessThan('tablet')`
      grid-column:1/-1;
      font-size:1.5rem;
    `}
  }
  .btn {
    margin: 0 1.25rem 1.25rem;
    grid-column: 11 / 14;
    ${customMedia.lessThan('tablet')`
      grid-column:1/-1;
      margin-left:30%;
      margin-right:30%;
    `}
  }

  img {
    width: 100%;
  }

  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    text-align: center;
    margin-top: 2rem;
    ${customMedia.lessThan('tablet')`
      grid-template-columns: 1fr;
    `}
  }
  h3 {
    margin: 0.5rem 0;
  }
  p {
    color: var(--main-grey);
  }
`;
