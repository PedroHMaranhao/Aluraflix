import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { useVideoContext } from "../../Contexts/VideoContext";
import {
  FormContainer,
  Input,
  Textarea,
  Button,
  FormTitle,
} from "./Modal.styled";
import styled from "styled-components";

const Overlay = styled.div `
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom:0;
    left: 0;
`
const DialogEstilizado = styled.dialog`
  background-color: transparent;
  border: none;
`
const BotaoIcone = styled.button `
  width: fit-content;
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const Modal = ({ video }) => {
  return (
    <>
      {video && <>
        <Overlay/>
        <DialogEstilizado open={!!video}>
          <FormContainer method="dialog">
            <BotaoIcone formMethod="dialog">
              <FaWindowClose/>
            </BotaoIcone>
            <FormTitle>Editar Vídeo</FormTitle>
            <Input
              type="text"
              name="titulo"
              placeholder="Título"
              required
            />

            <Button type="submit">Salvar</Button>
            <Button type="button">
              Limpar
            </Button>
          </FormContainer>
        </DialogEstilizado>
      </>}
    </>
  )
}

export default Modal
