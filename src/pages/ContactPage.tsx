import styled from "styled-components";
import { colors } from "../utils/colors";
import { Button } from "../components/atoms/Button/Button";
import { maxDeviceSize } from "../utils/deviceSize";
import MainLayout from "../layouts/MainLayout";

const ContactPage = () => {
  return (
    <MainLayout>
      <ContactSection>
        <ContactContent>
          <h2>Skontaktuj się z nami</h2>
          <p>
            Masz pytania? Chętnie pomożemy! Napisz do nas lub zadzwoń, a nasi
            specjaliści odpowiedzą na każde Twoje pytanie i pomogą w wyborze
            najlepszych rozwiązań.
          </p>
          <ButtonContainer>
            <Button href={`mailto:${import.meta.env.VITE_EMAIL}`}>
              Napisz do nas
            </Button>
            <Button
              href={`mailto:${import.meta.env.VITE_PHONE_NUMBER}`}
              secondary
            >
              Zadzwoń
            </Button>
          </ButtonContainer>
        </ContactContent>
      </ContactSection>
    </MainLayout>
  );
};

const ContactSection = styled.section`
  background-color: ${colors.black};
  color: ${colors.white};
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.8s ease-in-out, color 0.8s ease-in-out;
  height: 100vh;
  @media ${maxDeviceSize.phone} {
    padding: 3rem 1rem;
  }
`;

const ContactContent = styled.div`
  text-align: center;
  max-width: 800px;

  h2 {
    font-size: 2.4rem;
    color: ${colors.yellow};
    margin-bottom: 1rem;
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    color: ${colors.grayLight};
  }

  @media ${maxDeviceSize.phone} {
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media ${maxDeviceSize.phone} {
    flex-direction: column;
    gap: 1rem;

    a {
      width: 100%;
      text-align: center;
    }
  }
`;

export default ContactPage;
