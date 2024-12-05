import {
  Button,
  Modal,
  ModalAction,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "keep-react";
import { Trash } from "phosphor-react";

export default function DeleteReview() {
  return (
    <Modal>
      <ModalAction asChild>
        <Button className="bg-red-500 hover:bg-red-500">
          <Trash size={20} />
        </Button>
      </ModalAction>
      <ModalContent className="dark:bg-dark">
        <ModalHeader className="mb-6 space-y-3">
          <div className="space-y-1">
            <ModalTitle>Are you sure?</ModalTitle>
            <ModalDescription className="font-inter text-gray-500">
              Do you really want to delete this review? This process cannot be
              undone.
            </ModalDescription>
          </div>
        </ModalHeader>
        <ModalFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
