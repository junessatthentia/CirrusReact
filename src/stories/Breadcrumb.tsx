import React, { ReactElement, createElement } from 'react';
import '../themes/thentia/sass/theme.sass';
import './breadcrumb.css';
import { JsxElement } from 'typescript';
import { Interface } from 'readline';

type Link = {
  label: string;
  url: string;
};

interface BreadcrumbProps {
  /**
   * List the label and url of each breadcrumb
   */
  links: Link[];
  /**
   * Do the breadcrumbs sit on a dark background?
   */
  light?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Breadcrumb = ({
  links = [
    {label:"Home", url:"/index.html"},
    {label:"Link", url:"#0"},
    {label:"Current Page", url:"#1"},
  ],
  light = false,
  backgroundColor,
  ...props
}: BreadcrumbProps) => {
  const onLight = light ? 'tc-breadcrumbs--light' : '';
  // const role = level;
  let breadcrumbItems : ReactElement[] = [];
  let itemCount = 1;
  links.forEach((link) => {
    if (itemCount == links.length){
      breadcrumbItems.push(<li className="breadcrumb-item active"><a href={link.url}>{link.label}</a></li>);
    } else {
      breadcrumbItems.push(<li className="breadcrumb-item"><a href={link.url}>{link.label}</a></li>);
    }
    itemCount +=1;
  });
  let breadcrumbList: ReactElement = createElement("ol", {className: "breadcrumb"}, breadcrumbItems);
  return (
    <nav
      className={['tc-breadcrumbs', onLight].join(' ')}
      style={{ backgroundColor }}>
      <ol className="breadcrumb">
        {breadcrumbList}
      </ol>
    </nav>
  );
};
