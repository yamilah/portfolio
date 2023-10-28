import React from "react"
import IGLogo from "../images/Logo-IG.svg"
import ViewerList from "../images/Viewer List.webm"
import Instarazzi from "../images/Instarazzi.webm"
import VerticalStories from "../images/Vertical Stories.webm"
import Astrology from "../images/Astrology.webm"

export default function List(props) {
  const updateVideoURL = (videoURL) => {
    return () => {
      props.setVideoURL(videoURL)
    }
  }

  return (
    <nav className="list">
      <ul className="list-items">
        <li className="list-item" onMouseEnter={updateVideoURL(ViewerList)} onMouseLeave={updateVideoURL("")}>
          <div className="list-item-detail">
            <img
              className="list-item-detail-logo"
              src={IGLogo}
            />
            <p>2023</p>
          </div>
          <p className="list-item-label">
            Stories
            <span className="list-item-label-emphasis-b">
              &nbsp;Viewer List
            </span>
          </p>
          <p className="list-item-description">
            The stories viewer list is a super high traffic surface, but it hasn't been given the love it deserves in many years. I've gone ahead and redesigned it, and made it easier to kick off a story from here, too. :)
          </p>
        </li>
        <li className="list-item" onMouseEnter={updateVideoURL(Instarazzi)} onMouseLeave={updateVideoURL("")}>
          <div className="list-item-detail">
            <img
              className="list-item-detail-logo"
              src={IGLogo}
            />
            <p>2023</p>
          </div>
          <p className="list-item-label">
            <span className="list-item-label-emphasis-a">
              Insta
            </span>
            razzi
          </p>
          <p className="list-item-description">
            Be your friend's paparazzi! This new sharing mechanic in stories gives you the ability to create a story to contribute directly to your friend’s story.
          </p>
        </li>
        <li className="list-item" onMouseEnter={updateVideoURL(VerticalStories)} onMouseLeave={updateVideoURL("")}>
          <div className="list-item-detail">
            <img
              className="list-item-detail-logo"
              src={IGLogo}
            />
            <p>2023</p>
          </div>
          <p className="list-item-label">
            <span className="list-item-label-emphasis-b">
              Vertical
            </span>
            &nbsp;Stories
          </p>
          <p className="list-item-description">
            Stories are the most popular way to post on IG but, contrasted against the new addition of Reels, stories feel dated and clunky. This also adds double tap to like, tap to pause, and even shared audio and effects between Reels and stories.
          </p>
        </li>
        <li className="list-item" onMouseEnter={updateVideoURL(Astrology)} onMouseLeave={updateVideoURL("")}>
          <div className="list-item-detail">
            <img
              className="list-item-detail-logo"
              src={IGLogo}
            />
            <p>2023</p>
          </div>
          <p className="list-item-label">
            Astrology
            <span className="list-item-label-emphasis-b">
              &nbsp;Sticker
            </span>
          </p>
          <p className="list-item-description">
            A big focus on my pillar at IG is on teen engagement and, as we all know, they love astrology. What if you could add your sign to your story and see all your (participating) friends’ signs, too?
          </p>
        </li>
      </ul>
    </nav>
  )
}
