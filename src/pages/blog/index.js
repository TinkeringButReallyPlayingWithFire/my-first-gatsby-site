import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'


const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
        {
            data.allMdx.nodes.map(node => (
                <article key={node.id}>
                  <Link to={`/blog/${node.slug}`}>
                  <h2>{node.frontmatter.title}</h2>
                  </Link>
                    <p>Posted: {node.frontmatter.date}</p>
                </article>
            ))
        }

    </Layout>
  )
}

export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage