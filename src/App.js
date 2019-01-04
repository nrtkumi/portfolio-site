import React, { Component } from 'react';
import { db } from './firebase';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      address: "",
      body: "",
    }

    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    //this.onClick = this.onClick.bind(this);
    // this.onClick();
  }

  onClick() {
    /*console.log(db)
    db.collection('contacts').limit(1).get().then((res) => {
      res.forEach((doc) => {
        const document = doc.data();

        this.setState({
          name: document.name,
          body: document.body,
        }, () => { console.log(this.state.name) });
      })
    })*/
  }

  onChangeAddress(e) {
    this.setState({ address: e.target.value });
  }

  onChangeBody(e) {
    this.setState({ body: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const { address, body } = this.state;

    if (address === "" || body === "") {
      alert('入力項目が足りません');
      return;
    }

    let docId = String(new Date().getTime());
    let docData = { address, body };

    db.collection('contacts').doc(docId).set(docData).then(() => {
      alert('送信完了しました');
    }).catch((error) => {
      alert('エラーが発生しました\n' + error);
    });
  }

  render() {
    const { address, body } = this.state;

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
              <br/>
              <p>or</p>
              <br/>
              <form onSubmit={this.onSubmit}>
                <div>
                  <p>連絡先</p>
                  <input
                    type="text"
                    className="form"
                    placeholder="メールアドレス、電話番号"
                    value={address}
                    onChange={this.onChangeAddress}
                  />
                </div>
                <div>
                  <p>内容</p>
                  <textarea
                    className="form"
                    rows="5"
                    placeholder="お問い合わせ内容"
                    value={body}
                    onChange={this.onChangeBody}
                  />
                </div>
                <div>
                  <button type="submit" className="submit">送信</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
