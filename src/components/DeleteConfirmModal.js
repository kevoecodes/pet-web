import { Modal } from 'antd';
const DeleteConfirmModal = ({
    isModalOpen = false,
    onDelete = () => {},
    setIsModalOpen,
    message = 'Are you sure you want to delete this content?'
}) => {
    const handleOk = () => {
        onDelete();
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Modal centered title="Are you sure" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <> {message} </>
            </Modal>
        </>
    );
};
export default DeleteConfirmModal;
