import React from 'react';
import Tree from './tree';
import { StaticQuery, graphql } from 'gatsby';
import { ExternalLink } from 'react-feather';
import config from '../../../config';
import { ListItem, Sidebar, Divider} from "./Sidebar";

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      return (
        <Sidebar>
          {config.sidebar.title ? (
            <div
              className={'sidebarTitle hiddenMobile'}
              dangerouslySetInnerHTML={{ __html: config.sidebar.title }}
            />
          ) : null}
          <ul className={'sideBarUL'}>
            <Tree edges={allMdx.edges} />
            {config.sidebar.links && config.sidebar.links.length > 0 && <Divider />}
            {config.sidebar.links.map((link, key) => {
              if (link.link !== '' && link.text !== '') {
                return (
                  <ListItem key={key} to={link.link}>
                    {link.text}
                    <ExternalLink size={14} />
                  </ListItem>
                );
              }
            })}
          </ul>
        </Sidebar>
      );
    }}
  />
);

export default SidebarLayout;
