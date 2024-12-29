import styled from "styled-components";
import { colors } from "../../utils/colors";
import contactBackgrouindImage from "../../assets/contact-section-image.webp";
import { SectionTitle } from "../../components/atoms/SectionTitle/SectionTitle";
import { ContactButton } from "../../components/atoms/ContactButton/ContactButton";
import { IoIosMail } from "react-icons/io";

export const Contact = () => {
  return (
    <StyledSection name="contact">
      <div className="container">
        <StyledContent>
          <SectionTitle>
            Skontaktuj się z nami, a my pomożemy Ci w stworzeniu strony
          </SectionTitle>
          <ContactButton
            href={`mailto:${import.meta.env.VITE_EMAIL}`}
            textColor={colors.white}
          >
            <IoIosMail
              style={{
                marginRight: "0.5rem",
                width: "1rem",
                height: "1rem",
              }}
            />
            Skontaktuj się z nami
          </ContactButton>
        </StyledContent>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section<{ name: string }>`
  background: linear-gradient(
      180deg,
      #fff 0%,
      rgba(0, 0, 0, 0.5) 70%,
      black 100%
    ),
    url(${contactBackgrouindImage}) no-repeat center;
  overflow: hidden;
  height: 500px;
  background-size: cover;
`;

const StyledContent = styled.div`
  margin-top: 10rem;
  gap: 1rem;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
