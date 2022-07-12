import * as React from "react"
import {Link} from "react-router-dom"

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <p className="home-text">
          Hello. I'm <span className="home-text-emphasis">Yamilah</span>, a <span className="home-text-emphasis">designer & dev</span> in California. I work on <a href="https://blog.twitter.com/en_us/topics/company/2021/introducing-twitter-blue" target="_blank" className="home-text-emphasis home-link">Twitter Blue↗</a> right now. You can view my case studies on <Link to="/houseparty" className="home-text-emphasis home-link">Houseparty↗</Link>, a video chatting social media app, and <Link to="/hofr" className="home-text-emphasis home-link">HOFR↗</Link>, a sports watching companion experience for fans.
        </p>
      </div>
    )
  }
}
