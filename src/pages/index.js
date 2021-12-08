import * as React from "react"
import { navigate } from '@reach/router'
// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>

      <button onClick={()=> navigate('?lalala')}>Navigate with query string</button>

    </main>
  )
}

export default IndexPage
