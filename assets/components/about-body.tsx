import * as React from "react"

export default class AboutBody extends React.Component {
  render() {
    return (
      <section className="about-body">
        <div className="about-body-top">
          <p className="about-body-top-text-1">
            Yamilah Atallah <span className="about-body-top-text-emphasis">(jah•MEE•lah ah•tah•LAH)</span> is a designer and front-end developer based in Redwood City, CA, currently working at Disney+. She studied at Massachusetts College of Art and Design, graduating summa cum laude in 2015. Previously, she worked with <a href="https://thoughtbot.com">thoughtbot</a>, an SF-based design consultancy. Her clients have included Houseparty, True Botanicals, Bulletproof Coffee, and The County of San Mateo.
          </p>
          <p className="about-body-top-text-2">
            Her work lies at the intersection of product, fine arts, business, and engineering; it encompasses a wide-range of areas, including visual design, illustration, user experience, front-end development, product strategy, and product validation. Often described as a “full stack designer,” she focuses on finding the right process for the right problem at the right time.
          </p>
        </div>
        <div className="about-body-bottom">
          <p className="about-body-bottom-heading-1">
            Product,
          </p>
          <p className="about-body-bottom-heading-2">
            Fine Arts,
          </p>
          <p className="about-body-bottom-heading-3">
            Busi—
          </p>
          <p className="about-body-bottom-heading-4">
            ness
          </p>
          <p className="about-body-bottom-heading-5">
            Engineering
          </p>
          <p className="about-body-bottom-text-1">
          Yamilah has experience in every step of the product development life cycle: whether that’s conducting user research; validating a product or feature; building designs or design systems in Figma; making something beautiful; or shipping code, Yamilah can help.
          </p>
          <p className="about-body-bottom-text-2">
            Prior to joining thoughtbot, she worked at LevelUp, partnering with clients like Zaxby’s, Pret-A-Manger, Clean Juice, Cowboy Chicken, and Noon Mediterranean to create apps connecting eaters and restaurants.
          </p>
          <p className="about-body-bottom-text-3">
            She has also worked with many startups—mostly based out of Boston, MA—where she first realized the value of contributing to teams as a full stack designer.
          </p>
        </div>
      </section>
    )
  }
}
