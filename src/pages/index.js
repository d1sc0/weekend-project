import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Hello world!</h2>
    
    <p>Welcome to your new Gatsby site. Bacon ipsum dolor amet tongue biltong doner, tail ham hock brisket kevin 
      turducken flank venison cow. Shankle filet mignon pastrami spare ribs ham 
      swine chuck leberkas kevin frankfurter burgdoggen biltong prosciutto pork
      belly. Kevin tenderloin frankfurter, salami kielbasa pork picanha ham hock 
      short loin brisket chuck meatball meatloaf tongue. Venison buffalo pork 
      chop prosciutto, flank bresaola pastrami pork turducken biltong.</p>
      <div style={{ maxWidth: `400px`, margin: 'auto', marginBottom: `1.45rem`  }}>
      <Image />
    </div>
  
  </Layout>
)

export default IndexPage
