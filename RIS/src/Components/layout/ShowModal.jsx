import './ShowModal.css';
export default function ShowModal() {
    return (
        <div className="modal-backdrop">
            <div className="logout-modal">
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
                    <button className="btn btn-outline-secondary" >
                        <i className="bi bi-x-circle me-2"></i>
                        Cancel
                    </button>

                </div>
            </div>
        </div>
    );
};