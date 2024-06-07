import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { db } from "./services/firebase";

class Promotions extends Component {

  constructor() {
      super();
      this.ref = db.firestore().collection('fl_content');
      this.unsubscribe = null;
      this.state = {
          fl_content: [],
      };
  }
  componentWillUnmount() {
      this.unsubscribe();
  }
  onCollectionUpdate = (querySnapshot) => {
    const fl_content = [];
    querySnapshot.forEach((doc) => {
      const { judul } = doc.data();
      fl_content.push({
        // key: doc.id,
        // doc,
        judul,
        // konten
      });
    });
    this.setState(
      { data: fl_content },
      () => {
        console.log(this.state.data);
      },
    );
  };
  getData(){
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }
  componentDidMount() {
    this.getData();
  }

  executeOnClick(isExpanded) { console.log(isExpanded); }
  
  render() {
    return (
      <div>
        <Helmet>
            <title>Promotions</title>
            <meta name="description" content="" />
            <meta property="og:title" content="" />
            <meta property="og:url" content="" />
            <meta property="og:image" content="" />
        </Helmet>
        <div className="site-wrap">
          <div className="site-section section-2" id="promotions-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 mb-5">
                  <h1 className="section-title">Promotions 2022</h1>
                </div>
              </div>
            </div>
            <div className="outer-wrapper">
              <div className="inner-wrapper" id="products__container">
                {JSON.stringify(this.state.data)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Promotions;
