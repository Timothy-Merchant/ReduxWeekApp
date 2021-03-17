import { Button } from "react-bootstrap";

const LanguageButton = ({ language, changeLanguageEN, changeLanguageJP }) => {
    return (        
        <Button onClick={language === "en" ? changeLanguageJP : changeLanguageEN} className="btn btn-danger">
            {language === "en" ? "日本語" : "English"}
        </Button>
    )
}

export default LanguageButton;
