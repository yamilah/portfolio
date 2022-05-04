import * as React from "react"
import CaseOneDescription from "../components/case-one-description"
import CaseOneFinale from "../components/case-one-finale"
import CaseOneIntro from "../components/case-one-intro"

export default class CaseOne extends React.Component {
  render() {
    return (
      <div>
        <CaseOneIntro></CaseOneIntro>
        <CaseOneDescription></CaseOneDescription>
        <CaseOneFinale></CaseOneFinale>
      </div>

    )
  }
}
