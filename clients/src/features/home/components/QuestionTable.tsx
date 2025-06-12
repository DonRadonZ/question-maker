import { Table } from "../../../shared/components/ui/Table"
import QuestionRow from "./QuestionRow"


const testData: any = [
  {
    qcode: "TES00001",
    qnamet: "ประเมินทดสอบ 1"
  },
  {
    qcode: "TES00002",
    qnamet: "ประเมินทดสอบ 2"
  },
  {
    qcode: "TES00003",
    qnamet: "ประเมินทดสอบ 3"
  }
]

function QuestionTable() {
  return (
    <Table columns="1fr 4fr 5rem">
      <Table.Header>
        <div>รหัสแบบประเมิน</div>
        <div>ชื่อคำถาม</div>
      </Table.Header>
        <Table.Body
        data={testData}
        render={(question) => (
          <QuestionRow question={question}/>
        )}
        />
      
    </Table>
  )
}

export default QuestionTable