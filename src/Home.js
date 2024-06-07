import React, { Component } from "react";
import { Helmet } from "react-helmet";
import ShowMoreText from "react-show-more-text";

class Home extends Component {
  render() {
    return (
      <div className="content">
        <Helmet>
            <title>airasia Promotions 2022 | Travel Deals on Flights, Hotels & more!</title>
            <meta name="description" content="Super Travel Fest 2022! Any deals with Airasia promotions and selected hotels. Enjoy unlimited flights on food delivery, ride & more!" />
            <meta property="og:title" content="airasia Promotions 2022 | Travel Deals on Flights, Hotels & more!" />
            <meta property="og:url" content="" />
            <meta property="og:image" content="" />
        </Helmet>
        <div className="site-wrap">
          <div className="site-section section-2" id="promotions-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 mb-5">
                  <h1 className="section-title">Welcome to airasia Promotions 2022</h1>
                  <p style={{ color: 'black', textAlign: 'left' }}>
                    <ShowMoreText
                        /* Default options */
                        lines={5}
                        more="[ Read more ]"
                        less="[ Read less ]"
                        className="content-css"
                        anchorClass="show-more-less-clickable"
                        onClick={this.executeOnClick}
                        expanded={false}
                        // width={280}
                        truncatedEndingComponent={"... "}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin pharetra nulla, quis luctus justo eleifend quis. Praesent finibus tellus eu ex malesuada rhoncus. Donec sit amet nisl eros. Ut imperdiet justo vel mauris porta vestibulum. Ut a justo ut libero semper accumsan vel sed leo. Sed nec imperdiet ligula, in ullamcorper sapien. Maecenas lacinia neque in nunc ultrices, eget accumsan risus porta. Suspendisse potenti. Morbi efficitur imperdiet sollicitudin. Mauris ut vestibulum ante. Cras tristique, risus a egestas molestie, magna lectus bibendum lacus, in pellentesque quam justo sed ipsum. In pharetra fermentum quam a imperdiet. Nulla facilisi. Etiam pretium tristique arcu. Praesent magna est, egestas vel pharetra ac, viverra vel leo. Fusce vel placerat ex. Sed quis elit eu urna congue iaculis. Donec in porttitor ex, vitae fringilla felis. Quisque elit magna, egestas non odio vitae, vulputate dapibus lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas suscipit, felis nec commodo sagittis, eros est pulvinar velit, et condimentum diam neque id libero. 
                    </ShowMoreText>
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;