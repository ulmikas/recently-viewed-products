import React, { Component } from 'react';
import axios from 'axios';

class Product extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      url: '',
      img: '',
      price: '',
    };
  }

  componentWillMount() {
    const self = this;
    axios.get(this.props.url)
      .then(({ data }) => {
        self.setState({
          name: data.name,
          url: window.location.origin + window.location.pathname + '#' + data.url.split('#')[1],
          img: data.thumbnailUrl,
          price: data.price,
        });
      });
  }

  render() {
    const cln = `recently-viewed recently-viewed--${this.props.id}`;
    return (
      <div className={cln}>
        <a className="recently-viewed__url" href={this.state.url}>
          <div className="recently-viewed__thumb">
            <img alt="" src={this.state.img} />
          </div>
          <div className="recently-viewed__name">{this.state.name}</div>
          <div className="recently-viewed__price ecwid-productBrowser-price">
            {this.state.price}
          </div>
        </a>
      </div>
    );
  }
}

export default Product;