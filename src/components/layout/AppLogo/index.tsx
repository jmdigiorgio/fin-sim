import Image from 'next/image';
import { LogoContainer, AppName } from './styles';

export const AppLogo = () => {
  return (
    <LogoContainer>
      <Image
        src="/logo/logo-500x500.png"
        alt="NestFund Logo"
        width={40}
        height={40}
        className="logo"
      />
      <AppName>NestFund</AppName>
    </LogoContainer>
  );
};

export default AppLogo;
