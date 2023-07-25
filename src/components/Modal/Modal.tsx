import { FC, PropsWithChildren } from 'react'

type ModalProps = {
  isShow?: boolean
  onClose?: () => void
}

export const Modal: FC<ModalProps & PropsWithChildren> = ({ isShow, children }) => {
  if (isShow)
    return (
      <div
        className='fixed inset-0 left-0 top-0 z-[1055] flex h-full w-full items-center justify-center  overflow-hidden bg-black bg-opacity-25 '
        tabIndex={-1}
        role='dialog'
        aria-hidden='true'
      >
        {children}
      </div>
    )
  return null
}
