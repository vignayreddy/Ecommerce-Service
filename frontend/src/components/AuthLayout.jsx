import styled from 'styled-components';
import backgroundVideo from '../assets/auth-bg.mp4';

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -2;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: -1;
`;

const AuthBox = styled.div`
  background: rgba(18, 18, 18, 0.8);
  padding: 2.5rem;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 0 20px rgba(0, 195, 255, 0.5),
              inset 0 0 20px rgba(0, 195, 255, 0.3);
  animation: neonPulse 2s infinite;

  @keyframes neonPulse {
    0% { box-shadow: 0 0 20px rgba(0, 195, 255, 0.5), inset 0 0 20px rgba(0, 195, 255, 0.3); }
    50% { box-shadow: 0 0 30px rgba(0, 195, 255, 0.7), inset 0 0 30px rgba(0, 195, 255, 0.5); }
    100% { box-shadow: 0 0 20px rgba(0, 195, 255, 0.5), inset 0 0 20px rgba(0, 195, 255, 0.3); }
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  color: white;
  font-size: 16px;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(0, 195, 255, 0.5);
    box-shadow: 0 0 10px rgba(0, 195, 255, 0.3);
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: linear-gradient(45deg, #00a3ff, #00d5ff);
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(0, 195, 255, 0.5);
    background: linear-gradient(45deg, #00b4ff, #00e5ff);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const AuthLayout = ({ children }) => {
  return (
    <PageContainer>
      <VideoBackground autoPlay muted loop playsInline>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Overlay />
      <AuthBox>
        {children}
      </AuthBox>
    </PageContainer>
  );
};

export default AuthLayout;
export { Input, Button }; 