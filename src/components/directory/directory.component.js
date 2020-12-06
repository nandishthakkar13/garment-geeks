import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory.selectors";
/**
 * ! this component is class component because it holds state of menu-items
 *
 */

const Directory = ({sections}) => {
  /**
   * *we here use spread operator(...) to indicate all the other properties title={title} imageUrl={imageUrl} size={size} linkUrl = {linkUrl}
   * ? {...otherSectionProps} learn about spread operator
   */
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}; /*end of Directory class */

const mapToStateProps = createStructuredSelector({
  sections: selectDirectorySection,
});
export default connect(mapToStateProps)(Directory);
