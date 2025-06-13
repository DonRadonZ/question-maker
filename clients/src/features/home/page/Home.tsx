import { useNavigate } from "react-router-dom";
import Row from "../../../shared/components/layout/Row"
import Button from "../../../shared/components/ui/Button"
import QuestionTable from "../components/QuestionTable"


function Home() {
    const navigate = useNavigate();

    const handleCreateQuestion = () => {
        navigate("/addquestion");
    };

    return (
        <>
        <Row type="horizontal">
        <h1>Welcome Test User</h1>
        <Button variation="primary" size="medium" onClick={handleCreateQuestion}>สร้างแบบประเมินใหม่</Button>
        </Row>
        <QuestionTable/>
        </>
    )
}

export default Home