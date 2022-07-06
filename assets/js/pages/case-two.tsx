import * as React from "react"
import CaseTwoDescription from "../components/case-two-description"
import CaseTwoFinale from "../components/case-two-finale"
import CaseTwoImplementation from "../components/case-two-implementation"
import CaseTwoIteration from "../components/case-two-iteration"
import CaseTwoPlanning from "../components/case-two-planning"

export default class CaseTwo extends React.Component {
  render() {
    return (
      <div>
        <CaseTwoDescription></CaseTwoDescription>
        <CaseTwoPlanning></CaseTwoPlanning>
        <CaseTwoIteration></CaseTwoIteration>
        <CaseTwoImplementation></CaseTwoImplementation>
        <CaseTwoFinale></CaseTwoFinale>
      </div>
    )
  }
}
