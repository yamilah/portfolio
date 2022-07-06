import * as React from "react"
import CaseOneDescription from "../components/case-one-description"
import CaseOneFinale from "../components/case-one-finale"
import CaseOneImplementation from "../components/case-one-implementation"
import CaseOneIteration from "../components/case-one-iteration"
import CaseOnePlanning from "../components/case-one-planning"

export default class CaseOne extends React.Component {
  render() {
    return (
      <div className="case-one">
        <CaseOneDescription></CaseOneDescription>
        <CaseOnePlanning></CaseOnePlanning>
        <CaseOneIteration></CaseOneIteration>
        <CaseOneImplementation></CaseOneImplementation>
        <CaseOneFinale></CaseOneFinale>
      </div>
    )
  }
}
