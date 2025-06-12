
import styled from 'styled-components';
import { Table } from '../../../shared/components/ui/Table';

const Qcode = styled.div`
    text-align: center
`

function QuestionRow({question}: any) {
    const { qcode, qnamet } = question;
  return (
    <Table.Row>
        <Qcode>{qcode}</Qcode>
        <Qcode>{qnamet}</Qcode>
    </Table.Row>
  )
}

export default QuestionRow