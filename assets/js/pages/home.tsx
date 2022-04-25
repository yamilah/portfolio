import * as React from "react"
import HomeCaseOne from "../components/home-case-one"
import HomeIntro from "../components/home-intro"

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <HomeIntro></HomeIntro>
        <HomeCaseOne></HomeCaseOne>
      </div>
    )
  }
}
