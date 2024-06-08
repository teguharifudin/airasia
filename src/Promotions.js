import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { db } from "./services/firebase";
import ReactHTMLParser from "html-react-parser";

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
      const { judul, konten } = doc.data();
      fl_content.push({
        // key: doc.id,
        // doc, // DocumentSnapshot
        judul,
        konten
      });
    });
    this.setState({
      fl_content
    });
  }
  getData(){
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }
  componentDidMount() {
    this.getData();
  }
  
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
                {this.state.fl_content.map(dataItem => (
                  <div key={dataItem.id}>
                    { ReactHTMLParser(dataItem.konten) }
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Promotions;
