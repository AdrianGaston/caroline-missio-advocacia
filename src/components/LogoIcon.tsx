import logoNew from "@/assets/logo-new.png";

interface LogoIconProps {
  className?: string;
  color?: string;
}

const LogoIcon = ({ className = "h-10 w-10" }: LogoIconProps) => {
  return (
    <img
      src={logoNew}
      alt="Caroline Missio Logo"
      className={className}
    />
  );
};

export default LogoIcon;
