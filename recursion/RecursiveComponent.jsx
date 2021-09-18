import React from "react";
import PropTypes from "prop-types";

function RecursiveComponent(props) {
  const { components } = props;

  if (components.length <= 1) {
    const Component = components[0];
    return React.createElement(Component);
  }

  const [Component, ...rest] = components;

  return (
    <Component>
      <RecursiveComponent components={rest} />
    </Component>

    // zakomentowana część przedstawia pierwszą wersje zadania
  
  //   <>
  //     <One>one
  //     <Two>two
  //       <Three>
  //         three
  //       </Three>
  //     </Two>
  //   </One>
  // </>
  );
}


RecursiveComponent.propTypes = {
  components: PropTypes.arrayOf(PropTypes.elementType).isRequired
};

export default RecursiveComponent;
