import styled from "styled-components";
import { colors } from "../utils/colors";
import { maxDeviceSize } from "../utils/deviceSize";
import MainLayout from "../layouts/MainLayout";
import { MdEmail, MdPhone } from "react-icons/md";

const ContactPage = () => {
  const email = import.meta.env.VITE_EMAIL;
  const phone = import.meta.env.VITE_PHONE_NUMBER;

  return (
    <MainLayout>
      <ContactSection>
        <ContactContent>
          <h2>Skontaktuj się z nami</h2>

          <p>
            Potrzebujesz wyceny lub konsultacji? Skontaktuj się z nami —
            odpowiadamy szybko i konkretnie.
          </p>

          <ContactCards>
            <ContactCard href={`mailto:${email}`}>
              <IconWrapper>
                <MdEmail size={26} />
              </IconWrapper>
              <div>
                <Label>E-mail</Label>
                <Value>{email}</Value>
              </div>
            </ContactCard>

            <ContactCard href={`tel:${phone}`}>
              <IconWrapper>
                <MdPhone size={26} />
              </IconWrapper>
              <div>
                <Label>Telefon</Label>
                <Value>{phone}</Value>
              </div>
            </ContactCard>
          </ContactCards>
        </ContactContent>
      </ContactSection>
    </MainLayout>
  );
};

const ContactSection = styled.section`
  background-color: ${colors.black};
  color: ${colors.white};
  min-height: 100vh;
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${maxDeviceSize.phone} {
    padding: 3rem 1rem;
  }
`;

const ContactContent = styled.div`
  text-align: center;
  max-width: 900px;
  width: 100%;

  h2 {
    font-size: 2.6rem;
    color: ${colors.orange};
    margin-bottom: 1rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.7;
    margin-bottom: 3rem;
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

const ContactCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media ${maxDeviceSize.phone} {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const ContactCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  padding: 1.5rem 2rem;
  border-radius: 18px;

  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);

  text-decoration: none;
  color: ${colors.white};

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${colors.orange};
    background: rgba(255, 255, 255, 0.07);
  }

  @media ${maxDeviceSize.phone} {
    justify-content: center;
  }
`;

const IconWrapper = styled.div`
  background: rgba(255, 255, 255, 0.08);
  padding: 0.9rem;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.div`
  font-size: 0.9rem;
  color: ${colors.grayLight};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const Value = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
`;

export default ContactPage;
