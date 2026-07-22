import { useNavigate } from "react-router-dom";
import './LogoutModal.css';

export default function LogoutModal({ isActive, setIsActive }) {
    const navigate = useNavigate();
    //if (!isOpen) return null;

    function onConfirm() {
        navigate("/logout");
    }


    function onClose() {
        setIsActive('Dashboard');
        navigate("/dashboard");
    }





    return (
        <div className="modal-backdrop">
            <div className="logout-modal">d
                <div className="modal-header">
                    <div className="modal-icon">
                        <i className="bi bi-exclamation-circle"></i>
                    </div>
                </div>

                <div className="modal-body">
                    <h5 className="modal-title">Confirm Logout</h5>
                    <p className="modal-message">
                        Are you sure you want to logout? Any unsaved work will be lost.
                    </p>
                </div>

                <div className="modal-footer">
                    <button className="btn btn-outline-secondary" onClick={onClose}>
                        <i className="bi bi-x-circle me-2"></i>
                        Cancel
                    </button>
                    <button className="btn btn-danger" onClick={onConfirm}>
                        <i className="bi bi-box-arrow-right me-2"></i>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}