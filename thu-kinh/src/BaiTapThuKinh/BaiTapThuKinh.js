import React, { Component } from "react";

export default class BaiTapThuKinh extends Component {
  arrProduct = [
    { id: 1, price: 30, name: "GUCCI G8850U", url: "./img/g1.jpg", urlPng: "./img/v1.png", desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. " },

    { id: 2, price: 50, name: "GUCCI G8759H", url: "./img/g2.jpg", urlPng: "./img/v2.png", desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. " },

    { id: 3, price: 30, name: "DIOR D6700HQ", url: "./img/g3.jpg", urlPng: "./img/v3.png", desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. " },

    { id: 4, price: 30, name: "DIOR D6005U", url: "./img/g4.jpg", urlPng: "./img/v4.png", desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. " },

    { id: 5, price: 30, name: "PRADA P8750", url: "./img/g5.jpg", urlPng: "./img/v5.png", desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. " },

    { id: 6, price: 30, name: "PRADA P9700", url: "./img/g6.jpg", urlPng: "./img/v6.png", desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. " },

    { id: 7, price: 30, name: "FENDI F8750", url: "./img/g7.jpg", urlPng: "./img/v7.png", desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. " },

    { id: 8, price: 30, name: "FENDI F8500", url: "./img/g8.jpg", urlPng: "./img/v8.png", desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. " },

    { id: 9, price: 30, name: "FENDI F4300", url: "./img/g9.jpg", urlPng: "./img/v9.png", desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. " },
  ];



  state = {
      selectedItem:  { id: 1, price: 30, name: "GUCCI G8850U", url: "./img/g1.jpg", urlPng: "./img/v1.png", desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. " }
  }



  renderListProduct = () => {
      return this.arrProduct.map((product, index) => {
        return <div className="col-2 mb-3" key={index}>
        <div style={{ border: "1px solid blue" }} onClick={() => {
            this.setState({
                selectedItem: product
            })
        }}>
          <img src={product.url} style={{ width: "100%", height: 70, objectFit: "contain" }}></img>
        </div>
      </div>
      })
  }

 

  render() {
    console.log(this.state);
    return (
      <div className="container-fluid" style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("./img/background.jpg")', backgroundSize: "cover", height: "auto" }}>
        <h2 style={{ fontSize: 35, color: "white", backgroundColor: "rgba(0,0,0,0.7)", margin: 0, padding: "20px 0" }}>TRY GLASSES APP ONLINE</h2>
        <div className="row">
          <div className="col-6">
            <div style={{ width: 300, margin: "auto", position: "relative" }}>
              <img src="./img/model.jpg" style={{ height: 400, width: "100%" }}></img>
              <img src={this.state.selectedItem.urlPng} style={{ width: "60%", position: "absolute", left: "20%", top: "26%" }}></img>
              <div  style={{ width: "100%", position: "absolute", left: 0, bottom:0, textAlign: 'left', backgroundColor: 'rgba(255,165,0,0.6)', padding: 10 }}>
                  <h3 style={{color: 'blue'}}>
                      {this.state.selectedItem.name}
                  </h3>
                  <h4 className='mb-0'style={{color: 'blue'}}>Price: {this.state.selectedItem.price}</h4>
                  <p style={{color: 'white'}}>
                    {this.state.selectedItem.desc}
                  </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img src="./img/model.jpg" style={{width: 300, height: 400 }}></img>
          </div>
        </div>
        <div style={{ width: "80%", margin: "auto", marginTop: "50px", backgroundColor: "white", padding: "30px" }}>
          <div className="row">
              {this.renderListProduct()}
          </div>
        </div>
      </div>
    );
  }
}
