import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const BlogPost = ({ data }) => (
  <Layout>
    <h1>{data.contentfulPost.title.title}</h1>
  </Layout>
)

export const query = graphql`
  query ContentFulPostPost($slug: String, $locale: String) {
    contentfulPost(path: { eq: $slug }, node_locale: { eq: $locale }) {
      node_locale
      path
      title {
        title
      }
    }
  }
`
export default BlogPost
