import { useState } from 'react';
import { Container } from './assets/container';
import { Header } from './assets/header';
import { NameForm } from './assets/nameform';
import { PasswordForm } from './assets/passwordform';
import { Footer } from './assets/footer';

export default function App() {
  const [page, setPage] = useState<'name' | 'password'>('name');
  const [userName, setUserName] = useState('');

  function handleUnlock(name: string) {
    setUserName(name);
    setPage('password');
  }

  return (
    <>
      <Container>
        <Header>Meu site</Header>
      </Container>

      <Container>
        {page === 'name' ? (
          <NameForm onUnlock={handleUnlock} />
        ) : (
          <PasswordForm userName={userName} />
        )}
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}