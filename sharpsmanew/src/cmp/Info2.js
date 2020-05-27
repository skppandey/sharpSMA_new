import React, {Component} from 'react';
import img1 from '../images/CTA Banner-Home Theatre Projectors-1400X570.jpg';
import img2 from '../images/QLED-Part-5_wide_main_1.jpg';

const Info2 = () => {
  return (
    <div style={{marginTop: '10px'}}>
      <div className="bg-img2">
        {/* <img src={img1} alt="" /> */}
        <div style={{textAlign: 'center',margin:'50px'}}>
          <h1
            style={{
              color: '#353535',
              fontFamily: 'Verdana',
              lineHeight: '1.05em',
              fontSize: '3.5em',
              fontWeight: '100',
              marginTop: '100px',

              // marginTop:"10%"
            }}
          >
            <span>
              "Looking for Reliable
              <br />
              LCD Partner?
            </span>
          </h1>
          <button class="snip1099 red">
          <span>Contact</span>
          <i class="ion-android-arrow-forward"></i>
        </button>
        </div>
      </div>
      <div className="bg-img1" style={{marginTop: '-10px'}}>
        <div
          style={{
            height: '550px',
            width: '50%',
            float: 'left',
            paddingTop: '5px',
          }}
        >
          <span>
            <img src={img2} style={{width: '95%', height: '100%'}} alt="img2" />
          </span>
        </div>
        <div
          style={{
            height: '550px',
            width: '50%',
            float: 'right',
            paddingTop: '50px',
          }}
        >
          <span
          //   style={{
          //     width: '50%',
          //     marginTop: '0px',
          //   }}
          >
            <h2
              align="left"
              style={{
                fontFamily: 'Verdana',
                fontWeight: 'normal',
                color: '#dd3333',
                fontSize: '50px',
                lineHeight: 1.8,
                transform: 'translateY(0) scale(1)',
                width: '90%',
                display: 'inline',
                // position:'relative'
              }}
            >
              Who we are
            </h2>
            <p
              align="left"
              style={{
                marginBottom: '.65em',
                fontFamily: 'verdana',
                fontSize: '1em',
                color: '#333',
                fontWeight: 400,
                lineHeight: 1.8,
                width: '95%',
              }}
            >
              At SECD, we live to help our customers find the right solution,
              working side-by-side with you to deliver the support and services
              you need to take your products to the next level. Our components
              are designed for top performance and ease of integration, and are
              continually re-envisioned to meet emerging market demand and take
              advantage of the latest Sharp technology innovations. If you are
              seeking an LCD, Sensor, Imaging, or Optoelectronics solution,
              contact your local Sharp Representative and let us put the power
              of Sharp to work for you.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Info2;
