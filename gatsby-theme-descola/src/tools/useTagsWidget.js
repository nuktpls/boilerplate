// import { useStaticQuery, graphql } from 'gatsby'

// export const useTagsWidgets = () => {
// 	const content = useStaticQuery(
// 		graphql`
// 			query {
// 				tags: allYaml {
// 					edges {
// 						node {
// 							tags {
// 								tag {
// 									href
// 									label
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 		`
// 	)
// 	return content.tags?.edges[0]?.node.tags || false
// }
