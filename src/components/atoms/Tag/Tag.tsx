import styled from "styled-components";

interface TagProps {
  children: React.ReactNode;
}

export const Tag: React.FC<TagProps> = ({ children }) => (
  <StyledTag>{children}</StyledTag>
);

const StyledTag = styled.h2`
  font-size: 0.875rem;
  display: inline-flex;
  border: 1px solid rgba(34, 34, 34, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  letter-spacing: -0.01em;
`;
