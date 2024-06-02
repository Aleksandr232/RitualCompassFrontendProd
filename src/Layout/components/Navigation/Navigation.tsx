"use client";
import { FC } from "react";
import NavigationMobile from "./NavigationMobile/NavigationMobile";
import NavigationDesktop from "./NavigationDesktop/NavigationDesktop";
import withResponsiveNavigation from "@/HOC/WithNavigation/WithNavigation";

const ResponsiveNavigation = withResponsiveNavigation(
  NavigationMobile,
  NavigationDesktop
);

const Navigation: FC = () => {
  return (
    <>
      <ResponsiveNavigation />
    </>
  );
};

export default Navigation;
