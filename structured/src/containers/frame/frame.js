import React from "react";
import Header from "../../components/compound/header/header";
import PropTypes from "prop-types";

import withMaterial from "../../hoc/with-material/withMaterial";

class Frame extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header heading="structured" fixed/>
                <main>{this.props.children}</main>
            </React.Fragment>
        );
    }
}

Frame.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default withMaterial(Frame);
