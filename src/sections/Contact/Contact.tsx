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
          <ContactButton href={`mailto:${import.meta.env.VITE_EMAIL}`}>
            <IoIosMail
              style={{
                marginRight: "0.5rem",
                color: colors.white,
                backgroundColor: colors.black,
                width: "1rem",
                height: "1rem",
              }}
            />
            Skontaktuj się z nami
          </ContactButton>
          {/* <StyledImageStar src={starImage} alt="star image" width={360} /> */}
          {/* <StyledImageSpring src={springImage} alt="spring image" width={360} /> */}
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

// const StyledImageStar = styled.img`
//   display: none;
//   @media ${minDeviceSize.tablet} {
//     display: block;
//     position: absolute;
//     left: -90%;
//     top: -80%;
//   }
// `;

// const StyledImageSpring = styled.img`
//   display: none;
//   @media ${minDeviceSize.tablet} {
//     display: block;
//     position: absolute;
//     right: -90%;
//     top: 30%;
//   }
// `;
