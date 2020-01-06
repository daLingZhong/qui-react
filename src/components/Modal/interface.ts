import * as React from 'react'

import { RenderNode } from '../../constants/common'
import { ButtonProps, ButtonTheme } from '../Button/interface'
import { ICON_TYPE } from './common'

type ModalBasicProps = {
  title?: RenderNode
  width?: string
  center?: boolean
  className?: string
  style?: React.CSSProperties
  closeIcon?: boolean
}

export interface QModalProps extends ModalBasicProps {
  isVisible: boolean
  onClose?: () => void
  onOk?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onCancel?: () => void
  cancelText?: RenderNode
  okText?: RenderNode
  okButtonProps?: ButtonProps
  cancelButtonProps?: ButtonProps
  closeIcon?: boolean
  cancelButton?: boolean
  footer?: React.ReactNode
  keyboard?: boolean
  mask?: boolean
  maskClosable?: boolean
  container?: HTMLElement
}

export interface ModalFunReturn<T> {
  destory: () => void
  update: (arg?: T) => void
}
export type ModalInfo = (params?: ModalInfoArg) => ModalFunReturn<ModalInfoArg>
export type ModalConfirm = (params?: ModalConfirmArg) => ModalFunReturn<ModalConfirmArg>
export type InfoType = keyof typeof ICON_TYPE
type ModalFunBasicProps = {
  readonly close?: () => void
  content?: RenderNode
  isVisible?: boolean
  container?: HTMLElement
}
export interface ModalInfoArg extends ModalBasicProps, ModalFunBasicProps {
  haveIcon?: boolean
  infoType?: InfoType
  buttonText?: RenderNode
  buttonTheme?: ButtonTheme
  loadingText?: RenderNode
  onOk?: (closeFun: () => void, loadingDispatch: React.Dispatch<React.SetStateAction<boolean>>) => void
}
export interface ModalConfirmArg extends ModalBasicProps, ModalFunBasicProps {
  cancelText?: RenderNode
  okText?: RenderNode
  okButtonProps?: ButtonProps
  footer?: React.ReactNode
  onOk?: (closeFun: () => void) => void
}
export interface QModalInter extends React.FC<QModalProps> {
  info: ModalInfo
  confirm: ModalConfirm
}
