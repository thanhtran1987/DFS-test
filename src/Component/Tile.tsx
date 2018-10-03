/// <reference path="./Tile.d.ts" />

import * as React from 'react';
import { Col, Glyphicon, Button } from 'react-bootstrap';
import styled, { StyledFunction, keyframes } from 'styled-components';

import { styleAnimateFade } from '../Helper/sharedStyle';
import ModalButton from '../Container/ModalButton';

interface IProps {
  inputImage: string;
}

function styledComponentWithProps<T, U extends HTMLElement = HTMLElement>(
  styledFunction: StyledFunction<React.HTMLProps<U>>,
): StyledFunction<T & React.HTMLProps<U>> {
  return styledFunction;
}

const TileWrapper = styled.div`
  width: 360px;
  height: 300px;
  background: #fff;
  overflow: hidden;
  margin: 15px 0;
`;

const ClipArt = styled.div`
  width: 360px;
  height: 300px;
  overflow: hidden;
  background-size: 360px;
  background: #ccc;
  position: relative;
  transition: all 1s;
  ${TileWrapper}:hover & {
    margin-top: -150px;
    ::before {
      -webkit-transform: rotate(2.5deg);
    }
  }
  &:hover {
  }
  ::before {
    content: ' ';
    position: absolute;
    top: 268px;
    margin-left: -50px;
    background: #fff;
    display: block;
    width: 460px;
    height: 200px;
    -webkit-transform: rotate(-2.5deg);
    transition: transform 1s;
  }
`;

const ImageWrapper = styled.img`
  width: 360px;
`;

const TitleWrapper = styled.div`
  padding: 0 20px;
  h2 {
    font-size: 1.2em;
  }
  button > span {
    margin-right: 5px;
  }
`;

const GlyphiconWrapper = styled(Glyphicon)`
  color: #fff;
  animation: ${styleAnimateFade} 2s linear infinite;
  position: absolute;
  top: 230px;
  left: 320px;
  transition: transform 1s;
  font-size: 1.5em;

  ${TileWrapper}:hover & {
    -webkit-transform: rotate(180deg);
  }
`;

export default (props: ITileProp) => {
  return (
    <Col xs={6} md={4}>
      <TileWrapper>
        <ClipArt>
          <ImageWrapper src={props.data.url} alt="" />
          <GlyphiconWrapper glyph="chevron-up" />
        </ClipArt>
        <TitleWrapper className="title-wrapper">
          <h2>{props.data.title}</h2>
          <ModalButton buttonID={props.data.id} />
        </TitleWrapper>
      </TileWrapper>
    </Col>
  );
};
