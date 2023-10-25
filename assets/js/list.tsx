import * as React from "react"
import IGLogo from "../images/Logo-IG.svg"

export default class List extends React.Component {
  render() {
    return (
      <nav className="list">
        <ul className="list-items">
          <li className="list-item">
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
          </li>
          <li className="list-item">
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
          </li>
          <li className="list-item">
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
          </li>
          <li className="list-item">
            <div className="list-item-detail">
              <img
                className="list-item-detail-logo"
                src={IGLogo}
              />
              <p>2023</p>
            </div>
            <p className="list-item-label">
              <span className="list-item-label-emphasis-b">
                Stories
              </span>
              &nbsp;Sharesheet
            </p>
          </li>
          <li className="list-item">
            <div className="list-item-detail">
              <img
                className="list-item-detail-logo"
                src={IGLogo}
              />
              <p>2022</p>
            </div>
            <p className="list-item-label">
              DM
              <span className="list-item-label-emphasis-b">
                &nbsp;Chaining
              </span>
            </p>
          </li>
        </ul>
      </nav>
    )
  }
}
