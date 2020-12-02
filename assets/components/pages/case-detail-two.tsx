import * as React from "react"
import DetailOneDescription from "../case-one-detail-description"
import DetailOneFinale from "../case-one-detail-one-finale"
import DetailOneImplementation from "../case-one-detail-implementation"
import DetailOneIntro from "../case-one-detail-intro"
import DetailOneIteration from "../case-one-detail-iteration"
import DetailOnePlanning from "../case-one-detail-planning"
import Footer from "../footer"

export default class CaseDetailTwo extends React.Component {
  render() {
    return (
      <section className="case-detail-one">
        <DetailOneIntro />
        <DetailOneDescription />
        <DetailOnePlanning />
        <DetailOneIteration />
        <DetailOneImplementation />
        <DetailOneFinale />
        <Footer />
      </section>
    )
  }
}
