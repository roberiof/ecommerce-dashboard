import { JSX } from "react";

import AuthenticatedOnlyFeatureWrapper from "@/components/templates/Authenticated/Authenticated";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <AuthenticatedOnlyFeatureWrapper>
      {children}
    </AuthenticatedOnlyFeatureWrapper>
  );
};

export default Layout;
