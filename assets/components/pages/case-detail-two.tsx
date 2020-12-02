import * as React from "react"
import DetailTwoDescription from "../case-two-detail-description"
import DetailTwoFinale from "../case-two-detail-finale"
import DetailTwoImplementation from "../case-two-detail-implementation"
import DetailTwoIntro from "../case-two-detail-intro"
import DetailTwoIteration from "../case-two-detail-iteration"
import DetailTwoPlanning from "../case-two-detail-planning"
import Footer from "../footer"

export default class CaseDetailTwo extends React.Component {
  render() {
    return (
      <section className="case-detail-one">
        <DetailTwoIntro />
        <DetailTwoDescription />
        <DetailTwoPlanning />
        <DetailTwoIteration />
        <DetailTwoImplementation />
        <DetailTwoFinale />
        <Footer />
      </section>
    )
  }
}
