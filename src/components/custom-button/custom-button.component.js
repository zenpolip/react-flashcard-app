import './custom-button.styles.scss'

const CustomButton = ({ children, handleClick }) => {
    return (
        <button className="btn" onClick={handleClick}>{children}</button>
    );
}

export default CustomButton;