import LoginForm from '@/components/LoginForm';
import UserInfo from '@/components/UserInfo';
import { Container } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="md">
      <LoginForm />
      <UserInfo />
    </Container>
  );
}