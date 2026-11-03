import { Container } from '../../assets/container';
import { Header } from '../../assets/header';
import { Footer } from '../../assets/footer';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Header>Meu site</Header>
      </Container>

      <Container>{children}</Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}