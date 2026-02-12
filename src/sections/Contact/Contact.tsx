import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/colors";
import { Button } from "../../components/atoms/Button/Button";
import { maxDeviceSize } from "../../utils/deviceSize";
import { MdEmail, MdPhone } from "react-icons/md";

interface ContactProps {
  $isHighlighted: boolean;
}

export const Contact: React.FC<ContactProps> = ({ $isHighlighted = false }) => {
  const email = import.meta.env.VITE_EMAIL;
  const phone = import.meta.env.VITE_PHONE_NUMBER;

  return (
    <ContactSection $isHighlighted={$isHighlighted} id="contact">
      <ContactContent>
        <h2>Skontaktuj się z nami</h2>
        <p>
          Masz pytania? Chętnie pomożemy. Skontaktuj się z nami mailowo lub
          telefonicznie — odpowiemy szybko i konkretnie.
        </p>

        <ButtonContainer>
          <Button border={colors.white} href={`mailto:${email}`}>
            <ButtonInner>
              <MdEmail size={20} />
              <span>{email}</span>
            </ButtonInner>
          </Button>

          <Button href={`tel:${phone}`} secondary>
            <ButtonInner>
              <MdPhone size={20} />
              <span>{phone}</span>
            </ButtonInner>
          </Button>
        </ButtonContainer>
      </ContactContent>
    </ContactSection>
  );
};

const ContactSection = styled.section<ContactProps>`
  background-color: ${({ $isHighlighted }) =>
    $isHighlighted ? colors.lightBlack : colors.black};
  color: ${colors.white};
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    background-color 0.8s ease-in-out,
    color 0.8s ease-in-out;

  @media ${maxDeviceSize.phone} {
    padding: 3rem 1rem;
  }
`;

const ContactContent = styled.div`
  text-align: center;
  max-width: 800px;

  h2 {
    font-size: 2.4rem;
    color: ${colors.orange};
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

    a {
      width: 100%;
      text-align: center;
    }
  }
`;

const ButtonInner = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;
