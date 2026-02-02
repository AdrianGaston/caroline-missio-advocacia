import logoBlue from "@/assets/logo-blue.svg";

interface LogoIconProps {
  className?: string;
  color?: string;
}

const LogoIcon = ({ className = "h-10 w-10" }: LogoIconProps) => {
  return (
    <img
      src={logoBlue}
      alt="Caroline Missio Logo"
      className={className}
    />
  );
};

export default LogoIcon;
