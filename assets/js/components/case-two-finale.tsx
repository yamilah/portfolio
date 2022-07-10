import * as React from "react"

export default class CaseTwoFinale extends React.Component {
  render() {
    return (
      <section className="case-two-finale">
        <h1 className="case-two-finale-heading">
          Any takeaways?
        </h1>
        <p className="case-two-finale-text">
          As we closed the book on this iteration, I did some reflecting on how things could have been different.
        </p>
        <p className="case-two-finale-text">
          One thought was that we validated the product upfront, as mentioned earlier, but didn’t do a ton of user testing as we released features. This is somewhat expected in such a short turnaround, but is also concerning, especially because so many participants remarked that having their phones as a companion experience to their TVs is not extremely pleasant. Could we overcome this by looking into other solutions (e.g., streaming in app, etc.)? What kind of opportunities could we unconver by simply digging into this more?
        </p>
        <p className="case-two-finale-text">
          Another thought was around deciding on priority and scope, which was a pain point on this project, in particular. One way to get around this was if, for instance, we had a very clear definition of our success metrics. We did not install a ton of tracking to determine clearly whether there was sticky behavior, for instance—it's important to get people to the top of the funnel (e.g., installing the app, signing up, etc.), but it's also equally important to make sure people are returning and getting consistent value. Using tracking could give us more clarity on this, and help us determine what parts of the product need the most work, and the level of priority.
        </p>
      </section>
    )
  }
}
