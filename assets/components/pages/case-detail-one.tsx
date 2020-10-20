import * as React from "react"
import DetailOneDescription from "../case-one-detail-description"
import DetailOneIntro from "../case-one-detail-intro"
import DetailOnePlanning from "../case-one-detail-planning"

export default class CaseDetailOne extends React.Component {
  render() {
    return (
      <section className="case-detail-one">
        <DetailOneIntro />
        <DetailOneDescription />
        <DetailOnePlanning />
      </section>
    )
  }
}
