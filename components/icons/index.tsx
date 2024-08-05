type IconProps = React.HTMLAttributes<SVGElement>;

import Logo from "@/components/icons/logo";
import GitHub from "@/components/icons/github";
import X from "@/components/icons/x";

export const Icons = {
  logo: (props: IconProps) => <Logo {...props} />,
  gitHub: (props: IconProps) => <GitHub {...props} />,
  twitter: (props: IconProps) => <X {...props} />,
};
