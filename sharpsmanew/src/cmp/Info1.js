import React, {Component} from 'react';
import img1 from '../images/12b2d7431a5d4f51bd3184bb8d332bda_19_EOS+90D_BK_FrontSlantDown_18-55ISSTM.png';
import img2 from '../images/99ecca3d8ed14ca7a2ea018226ddfbc7_PIXMA+G2010_2.png';
import img3 from '../images/fc0c6b0255d54657ac90981e9f68abee_CN10+X+25+IAS+SE1+Front+Slant.png';

const Info1 = () => {
  return (
    <div style={{marginTop: '-75PX'}}>
      <div className="row">
        <div class="col-sm-4">
          <div class="post-item " style={{height: '480px'}}>
            <div class="wrap-image " style={{height: '270px'}}>
              <div class="vertical-center">
                <a href="/consumer/eos-90d-ef-s18-55mm-f-4-5-6-is-stm/product">
                  <img style={{width:"90%"}} src={img1} alt="" />
                </a>
              </div>
            </div>
            <div class="content">
              <h3 class="title">
                <a href="/consumer/eos-90d-ef-s18-55mm-f-4-5-6-is-stm/product">
                  Your Perfect Display Solution? Find it Here.
                </a>
              </h3>             
            </div>           
          </div>
        </div>

        <div class="col-sm-4">
          <div class="post-item " style={{height: '480px'}}>
            <div class="wrap-image " style={{height: '270px'}}>
              <div class="vertical-center">
                <a href="/consumer/eos-90d-ef-s18-55mm-f-4-5-6-is-stm/product">
                  <img style={{width:"90%"}} src={img2} alt="" />
                </a>
              </div>
            </div>
            <div class="content">
              <h3 class="title">
                <a href="/consumer/eos-90d-ef-s18-55mm-f-4-5-6-is-stm/product">
                  Memory LCDs Put the Competition on Ice!
                </a>
              </h3>
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="post-item " style={{height: '480px'}}>
            <div class="wrap-image" style={{height: '270px'}}>
              <div class="vertical-center">
                <a href="/consumer/eos-90d-ef-s18-55mm-f-4-5-6-is-stm/product">
                  <img style={{width:"90%"}} src={img3} alt="" />
                </a>
              </div>
            </div>
            <div class="content">
              <h3 class="title">
                <a href="/consumer/eos-90d-ef-s18-55mm-f-4-5-6-is-stm/product">
                  Lifetime maintenence.
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="row1">
    <div style={{textAlign:'center'}}>
        <button class="snip1099 red">
          <span>Read More</span>
          <i class="ion-android-arrow-forward"></i>
        </button>
        <button class="snip1099 red">
          <span>Read More</span>
          <i class="ion-android-arrow-forward"></i>
        </button>
        <button class="snip1099 red">
          <span>Read More</span>
          <i class="ion-android-arrow-forward"></i>
        </button>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default Info1;
