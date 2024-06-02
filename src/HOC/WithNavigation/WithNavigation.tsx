import React, { useState, useEffect, ComponentType } from "react";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    listener();
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

const withResponsiveNavigation = (
  mobile: ComponentType,
  desktop: ComponentType
): ComponentType => {
  const ResponsiveComponent = (props: any) => {
    const isMobile = useMediaQuery("(max-width: 740px)");
    const ComponentToRender = isMobile ? mobile : desktop;
    return <ComponentToRender {...props} />;
  };

  return ResponsiveComponent;
};

export default withResponsiveNavigation;
