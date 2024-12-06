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
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router";

export default function DeleteReview({ id }) {
  const [open, setOpen] = useState(false);

  const handleModalOpen = () => setOpen(!open);

  return (
    <Modal open={open} onOpenChange={handleModalOpen}>
      <ModalAction asChild>
        <Button
          className="bg-red-500 hover:bg-red-500"
          onClick={handleModalOpen}>
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
          <Button variant="outline" onClick={handleModalOpen}>
            Cancel
          </Button>
          <Link to={`/deleteReview/${id}`}>
            <Button onClick={handleModalOpen}>Delete</Button>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
DeleteReview.propTypes = {
  id: PropTypes.string.isRequired,
};
