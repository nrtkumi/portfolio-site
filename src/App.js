import React, { Component } from 'react';
import { db } from './firebase';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      body: "",
    }

    this.onClick = this.onClick.bind(this);
    // this.onClick();
  }

  onClick() {
    console.log(db)
    db.collection('contacts').limit(1).get().then((res) => {
      res.forEach((doc) => {
        const document = doc.data();

        this.setState({
          name: document.name,
          body: document.body,
        }, () => { console.log(this.state.name) });
      })
    })
  }

  render() {
    return (
      <div>
        <div className="top">
          <h1>Takumi Nara</h1>
        </div>

        <div className="contents">
          <div className="content">
            <h1>About me</h1>
            <div className="body">
              <p>奈良拓海</p>
              <p>1998年4月28日生</p>
              <p>東京都港区在住</p>
              <p>ソフトウェアエンジニア</p>
            </div>
          </div>

          <div className="content">
            <h1>Skill</h1>
            <div className="body">
              <p>Ruby on Rails</p>
              <p>React Native</p>
              <p>Kubernetes</p>
              <p>AWS</p>
              <p>GCP</p>
            </div>  
          </div>

          <div className="content">
            <h1>Contact</h1>
            <div className="body">
              <p><a href="https://twitter.com/nyaratakumi">Twitter</a></p>
              <p><a href="https://www.facebook.com/nyaratakumi">Facebook</a></p>
              <p><a href="https://github.com/nyaratakumi">GitHub</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
