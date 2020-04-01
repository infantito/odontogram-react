import React from 'react';
// https://usehooks.com/useHover/

// Hook
const useHover = (hover = false, callback) => {
  const [hovering, setHovering] = React.useState(hover);

  const ref = React.useRef(null);

  const handleMouseEnter = e => {
    setHovering(true);
    typeof callback === 'function' && callback(e, true);
  };
  const handleMouseLeave = e => {
    setHovering(false);
    typeof callback === 'function' && callback(e, false);
  };

  React.useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        node.removeEventListener('mouseenter', handleMouseEnter);
        node.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [ref.current]); // Recall if ref changes

  return [hovering, ref];
};

export default useHover;
