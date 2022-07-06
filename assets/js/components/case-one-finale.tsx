import * as React from "react"

export default class CaseOneFinale extends React.Component {
  render() {
    return (
      <section className="case-one-finale">
        <h1 className="case-one-finale-heading">
          Any takeaways?
        </h1>
        <p className="case-one-finale-text">
          We launched! There were even articles about it, which was so wild to me. But there were a lot of thoughts I had about the project after the fact. A few things:
        </p>
        <p className="case-one-finale-text">
          Namely, scope. Mobile and desktop were working in lockstep with each other; it worked well, in my opinion, but there was a regular occurrence where we’d all be working on desktop, a new idea would come up, and then we’d have to consistently ask: “do we need this now?” Does mobile need this now? Sometimes, that answer was yes, like in the case with adding DMs. But scope was a huge concern in our work, which was compacted by being such a small team with little access to extensive user data.
        </p>
        <p className="case-one-finale-text">
          But, also, testing. I sacrificed convenience of testing for rigor—what I mean by this is that I often tested with people who were accessible to me, like friends and family and, while I could go pretty fast, I had to accept that they weren’t always our representative users, and I’d have to take my learnings with a grain of salt.
        </p>
      </section>
    )
  }
}
