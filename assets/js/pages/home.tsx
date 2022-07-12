import * as React from "react"
import {Link} from "react-router-dom"

export default class Home extends React.Component {
  render() {
    return (
      <section className="home">
        <p className="home-text">
          Hello. I’m <span className="home-text-emphasis">Yamilah</span>, a <span className="home-text-emphasis">designer & dev</span> in California. I work on <a href="https://blog.twitter.com/en_us/topics/company/2021/introducing-twitter-blue" target="_blank" className="home-text-emphasis home-link">Twitter Blue↗</a> right now. You can view my case studies on <Link to="/houseparty" className="home-text-emphasis home-link">Houseparty↗</Link>, a video chatting social media app, and <Link to="/hofr" className="home-text-emphasis home-link">HOFR↗</Link>, a sports watching companion experience for fans.
        </p>
        <aside className="socials">
          <a href="https://linkedin.com/in/yamilah" className="social-link">
            Lnkd↗
          </a>
          <a href="https://dribbble.com/yamilah" className="social-link">
            Drib↗
          </a>
          <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=hello@yamilah.com" target="_blank" className="social-link">
            Mail↗
          </a>
        </aside>
      </section>
    )
  }
}
