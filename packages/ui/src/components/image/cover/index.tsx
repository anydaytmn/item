import React from 'react'
import { Wrapper, StyledImage, WrapperProps } from './style'

interface IProps extends WrapperProps {
  src?: string
  editable?: boolean
}

export const CoverImage = ({ src, editable, ...rest }: IProps) => {
  const isEmpty = !src

  return (
    // @ts-ignore
    <Wrapper
      isEmpty={isEmpty}
      borderRadius={'lg'}
      sx={{
        bg: (isEmpty && editable) ? 'black' : 'grays.8',
        borderWidth: (isEmpty && editable) ? '2px' : 0,
        borderStyle: 'dashed',
        borderColor: 'grays.6',
      }}
      {...rest}
    >
      {src && <StyledImage src={src}/>}
    </Wrapper>
  )
}