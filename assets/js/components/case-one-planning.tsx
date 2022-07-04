import * as React from "react"
import imgOne from "../../images/houseparty/houseparty-planning-1.jpg"
import imgTwo from "../../images/houseparty/houseparty-planning-3.jpg"
import vidOne from "url:../../images/houseparty/houseparty-planning-video.mp4"
import vidOneFallback from "url:../../images/houseparty/houseparty-planning-video.webm"
import vidOnePoster from "../../images/houseparty/houseparty-planning-poster.jpg"
import imgThree from "../../images/houseparty/houseparty-idea-1.jpg"
import imgFour from "../../images/houseparty/houseparty-idea-2.jpg"
import imgFive from "../../images/houseparty/houseparty-idea-3.jpg"
import imgSix from "../../images/houseparty/houseparty-idea-4.jpg"
import imgSeven from "../../images/houseparty/houseparty-idea-5.jpg"

export default class CaseOnePlanning extends React.Component {
  render() {
    return (
      <section className="case-one-planning">
        <h1 className="case-one-planning-heading">
          How did this start?
        </h1>
        <p className="case-one-planning-text">
          I briefly began by explaining what Houseparty is and what direction we went in, but I want to elaborate more on the problem—and why we wanted to make this in the first place. Working with the team, I was able to tap into some research to see about why they were interested in this problem area. Below are some key excerpts:
        </p>
        <div className="case-one-planning-figures">
          <figure className="case-one-planning-figure-1">
            53
          </figure>
          <figure className="case-one-planning-figure-2">
            58
          </figure>
          <figure className="case-one-planning-figure-3">
            17
          </figure>
        </div>
        <p className="case-one-planning-text">
          53% of their users are school aged (16-24). 58% of all 2019 classroom devices were Google devices, as Chromebooks are very cost effective, and many classes rely on Google Class. 17% of product feedback mentioned wanting to be able to have richer experiences across multiple platforms. From this, we learned that there could be an opportunity for a web experience. But I just began at the problem, so I want to zoom out and show the solution I designed to give you a better idea of what we were working towards. So here’s how you use Houseparty: you sign up, log in, add a friend, jump in their “room,” and have a chat.
        </p>
        <video
          autoPlay
          className="case-one-planning-video"
          loop
          muted
          poster={vidOnePoster}
        >
          <source
            src={vidOne}
            type="video/mp4"
          />
          <source
            src={vidOneFallback}
            type="video/webm"
          />
          Sorry, but your browser doesn't support HTML5 videos. Try on another!
        </video>
        <p className="case-one-planning-text">
          Seem simple? Anything but! We didn’t have very much time, so we had to get serious about scoping this down, creating an MVP, and sticking to it to get to a meaningful launch. To get to that MVP, the first thing I decided to do was have the team come together for a design sprint—allowing us to determine exactly what that MVP would look like in just a week.
        </p>
        <div className="case-one-planning-imgs">
          <img
            alt="Members of the Houseparty web team together in a room, running a design sprint"
            className="case-one-planning-img case-one-planning-img-1"
            src={imgOne}
          />
          <img
            alt="Stickies on a board with How Might Wes on them"
            className="case-one-planning-img case-one-planning-img-2"
            src={imgTwo}
          />
        </div>
        <p className="case-one-planning-text">
          So what you’re seeing here are the pictures I took while leading the team through a design sprint, which involved a week of exercises like setting up a problem statement; interviewing employees and users alike to deeply understand Houseparty, its business, and its users; listing out our assumptions and how we might test them; user journeying; How Might Weing; and so on and so forth.
        </p>
        <div className="case-one-planning-ideas">
          <img
            alt="A product concept drawing"
            className="case-one-planning-img case-one-planning-idea-1"
            src={imgThree}
          />
          <img
            alt="A product concept drawing"
            className="case-one-planning-img case-one-planning-idea-2"
            src={imgFour}
          />
          <img
            alt="A product concept drawing"
            className="case-one-planning-img case-one-planning-idea-3"
            src={imgFive}
          />
          <img
            alt="A product concept drawing"
            className="case-one-planning-img case-one-planning-idea-4"
            src={imgSix}
          />
          <img
            alt="A product concept drawing"
            className="case-one-planning-img case-one-planning-idea-5"
            src={imgSeven}
          />
        </div>
        <p className="case-one-planning-text">
          As it happens, what you see on production, <a href="https://app.houseparty.com" className="case-one-planning-text-link">app.houseparty.com</a>, is really just a small slice of the many plannings of arrangements I explored. I felt like we really did our due diligence when working on where to put all the controls and interactions—here are some examples of ideas I drew out. The goal was to put the focus on the faces, though, and have limits on any other aspects of the UI that would command the users’ attention, hence the left nav decision in the end. Of course, we had to consider potential future aspirations being kicked around, too, like adding in filters, DM functionality, etc.
        </p>
      </section>
    )
  }
}
