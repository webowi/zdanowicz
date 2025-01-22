import React from "react";
import styled from "styled-components";
import { getImageUrl } from "../../../services/ImageProvider";
import { colors } from "../../../utils/colors";
import { maxDeviceSize } from "../../../utils/deviceSize";

interface MachineCardProps {
  machine: {
    uuid: string;
    name: string;
    description?: string;
    mainImage: string;
  };
}

export const MachineCard: React.FC<MachineCardProps> = ({ machine }) => {
  return (
    <Wrapper>
      <ProductImg>
        <img src={getImageUrl(machine.mainImage)} alt={machine.name} />
      </ProductImg>
      <ProductInfo>
        <h2>{machine.name}</h2>
        {machine.description && <p>{machine.description}</p>}
      </ProductInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 420px;
  width: 654px;
  max-width: 100%;
  margin: 50px auto;
  border-radius: 7px;
  box-shadow: 10px 10px 28px -4px ${colors.yellow};
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
  transition: transform 0.3s;

  @media ${maxDeviceSize.phone} {
    flex-direction: column;

    width: auto;
    height: 36rem;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    color: ${colors.white};

    box-shadow: 6px 6px 15px -4px ${colors.yellow};
  }

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProductImg = styled.div`
  height: 420px;
  width: 327px;

  img {
    height: 100%;
    width: 100%;
    border-radius: 7px 0 0 7px;
    object-fit: cover;

    @media ${maxDeviceSize.phone} {
      width: 100%;
    }
  }
`;

const ProductInfo = styled.div`
  height: 420px;
  width: 327px;
  border-radius: 0 7px 7px 0;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;

  h2 {
    font-size: 24px;
    color: ${colors.black};
    margin-bottom: 16px;
  }

  p {
    color: ${colors.lightBlack};
    font-size: 1rem;
    line-height: 1.5em;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 150px;

    @media ${maxDeviceSize.phone} {
      text-align: center;
      margin-top: 8px;
    }
  }

  @media ${maxDeviceSize.phone} {
    border-radius: 0 0 7px 7px;
    /* width: 100%; */
  }
`;
