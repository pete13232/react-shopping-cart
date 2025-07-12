import "./BaseBtn.css"

export const BaseBtn = ({ onClick, className = '', children }) => {
    return (
        <button className={`${className}`} onClick={onClick}>
            {children}
        </button>
    );
};
