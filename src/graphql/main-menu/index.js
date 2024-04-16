import { useStaticQuery, graphql } from "gatsby";

export const Content = () => {
  return useStaticQuery(graphql`
    {
    allStrapiMainMenu {
        nodes {
            mainmenu {
            ... on STRAPI__COMPONENT_MENU_DROPDOWN_MENU {
                id
                title
                dropdown {
                url
                title
                icon {
                    url
                }
                }
            }
            ... on STRAPI__COMPONENT_MENU_MENU_ITEM {
                id
                url
                title
            }
            }
        }
    }
    }
  `);
};
