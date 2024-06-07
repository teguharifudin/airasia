import React, { Component } from "react";
import { Helmet } from "react-helmet";

class FAQs extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <title>FAQs</title>
            <meta name="description" content="" />
            <meta property="og:title" content="" />
            <meta property="og:url" content="" />
            <meta property="og:image" content="" />
        </Helmet>
        <div className="site-section" id="services-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <h3 className="section-title">FAQs</h3>
                <div className="tab">
                  <input id="tab-1" type="radio" name="tabr" />
                  <label for="tab-1">What types of airasia promotions are available?</label>
                  <div className="content"><p>Usually, some of these promotions involve airasia vouchers, discounts, deals and promo codes on various airasia products such as airasia flights, airasia hotels and more.</p></div>
                </div>
                <div className="tab">
                  <input id="tab-2" type="radio" name="tabr" />
                  <label for="tab-2">What are the airasia flight promotions for 2022?</label>
                  <div className="content"><p>All the available flight promotions are listed on this page. Please choose and click from the promo links above to save on fare flights, last minute flight deals and many more. Cheap prices await!</p></div>
                </div>
                <div className="tab">
                  <input id="tab-3" type="radio" name="tabr" />
                  <label for="tab-3">How can I get updates for future airasia Super Sale, offers, discounts, promotions and deals?</label>
                  <div className="content"><p>You can create an account on airasia for free and get weekly newsletters that contain information on the latest airasia happenings and exclusive offers, as well as exclusive email invitations to sales and promotions before they go live for the general public.</p></div>
                </div>
                <div className="tab">
                  <input id="tab-4" type="radio" name="tabr" />
                  <label for="tab-4">How do I use the airasia flights Promo Code?</label>
                  <div className="content"><p>You just need to apply it in the Promo Code field right at the flight you're trying to book/purchase. You may also apply it at the Promo Code field in the payment page.</p></div>
                </div>
                <div className="tab">
                  <input id="tab-5" type="radio" name="tabr" />
                  <label for="tab-5">Is there a limit to the number of airasia promotions that I can utilise?</label>
                  <div className="content"><p>If you are utilizing promotions for different airasia products, there should be no limit unless stated otherwise in the terms and conditions. However, multiple promotions for a single airasia product usually do not apply unless stated otherwise.</p></div>
                </div>
                <div className="tab">
                  <input id="tab-6" type="radio" name="tabr" />
                  <label for="tab-6">Is it possible to get a refund for any airasia flights purchased using an airasia promo code, voucher or discount?</label>
                  <div className="content"><p>Usually, airasia products purchased are non-refundable with the exception of special cases (disruptions from our end, etc.). If there is an issue pertaining to the airasia promo code, voucher or discount, please contact our support team here for more information.</p></div>
                </div>
                <div className="tab">
                  <input id="tab-7" type="radio" name="tabr" />
                  <label for="tab-7">Why does my airasia flight discount, voucher or promo code not work at times?</label>
                  <div className="content"><p>Issues may be caused by various reasons such as typos, expiry date, a limited number of usages (first-come first-served basis), technical issues, etc. In any case, please contact our airasia support team here for clarification.</p></div>
                </div>
                <div className="tab">
                  <input id="tab-8" type="radio" name="tabr" />
                  <label for="tab-8">If I’m having an issue involving any airasia flight promotions, who should I contact?</label>
                  <div className="content"><p>You can always visit our support site here and enquire about any issues that you may have.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQs;