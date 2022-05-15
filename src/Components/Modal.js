import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import { UseContext } from '../Context/context'
import LoginModal from './LoginModal'
import SignupModal from './SignupModal'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    maxWidth: '500px',
    boxShadow: 24,
    p: 4,
}

export default function TransitionsModal() {
    const { isModalOpen, setIsModalOpen, isLoginOpen } = UseContext()
    const handleClose = () => setIsModalOpen(false)

    return (
        <div>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                open={isModalOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isModalOpen}>
                    <div style={style}>
                        {isLoginOpen ? <LoginModal /> : <SignupModal />}
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
