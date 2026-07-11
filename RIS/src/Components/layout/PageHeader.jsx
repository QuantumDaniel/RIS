

import './PageHeader.css';

export default function PageHeader({ title, subtitle, icon, actionButton }) {
    return (
        <div className="page-header">
            <div className="page-header-content">
                <div className="page-header-info">
                    {icon && <i className={`bi ${icon} page-header-icon`}></i>}
                    <div>
                        <h1 className="page-title">{title}</h1>
                        {subtitle && <p className="page-subtitle">{subtitle}</p>}
                    </div>
                </div>
                {actionButton && <div className="page-header-action">{actionButton}</div>}
            </div>
        </div>
    );
}