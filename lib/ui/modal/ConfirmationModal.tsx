import { Modal, ModalProps } from '.'
import { ButtonKind, Button } from '../buttons/Button'
import { UniformColumnGrid } from '../css/uniformColumnGrid'

interface ConfirmationModalProps
  extends Omit<ModalProps, 'footer' | 'onClose'> {
  onClose: () => void
  onConfirm: () => void
  confirmActionText: string
  confirmActionKind?: ButtonKind
}

export const ConfirmationModal = ({
  onClose,
  onConfirm,
  confirmActionText,
  confirmActionKind = 'alert',
  ...props
}: ConfirmationModalProps) => {
  return (
    <Modal
      {...props}
      onClose={onClose}
      footer={
        <UniformColumnGrid gap={20}>
          <Button type="button" size="l" onClick={onClose} kind="secondary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              onConfirm()
              onClose()
            }}
            size="l"
            kind={confirmActionKind}
          >
            {confirmActionText}
          </Button>
        </UniformColumnGrid>
      }
    />
  )
}
