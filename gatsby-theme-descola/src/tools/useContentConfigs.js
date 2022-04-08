// import { useStaticQuery, graphql } from 'gatsby'

// export const useContentConfigs = () => {
// 	const content = useStaticQuery(
// 		graphql`
// 			query {
// 				footer_content: allYaml(
// 					filter: {
// 						footer: {
// 							col1: { status: { eq: true } }
// 							col2: { status: { eq: true } }
// 							col3: { status: { eq: true } }
// 							col4: { status: { eq: true } }
// 						}
// 					}
// 				) {
// 					edges {
// 						node {
// 							footer {
// 								col1 {
// 									about_phone
// 									about_phone_prefix
// 									about_p {
// 										p
// 									}
// 									status
// 									about_heading
// 									about_widget
// 								}
// 								col2 {
// 									social_media_widget
// 									social_media_heading
// 									footer_tags_heading
// 									footer_tags_widget
// 									status
// 								}
// 								col3 {
// 									status
// 									col
// 									featured_posts_heading
// 									featured_posts_widget
// 									num_posts
// 								}
// 								col4 {
// 									status
// 									col
// 									footer_menu_heading
// 									footer_menu_widget
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 		`
// 	)
// 	return {
// 		footer_content: content.footer_content?.edges[0]?.node,
// 		tags: content.tags?.edges[0]?.node.tags || false,
// 	}
// }
