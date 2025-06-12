
import Box from '../../../../shared/components/form/Box'
import BoxRow from '../../../../shared/components/form/BoxRow'
import Input from '../../../../shared/components/form/Input'
import CatalogQuestionForm from './CatalogQuestionForm'

function CreateQuestionForm({control, register }: any) {
  return (
    <>
    <Box >
        <BoxRow label='รหัสคำถาม'>
            <Input type="text" id="qname" name="qname" placeholder="Enter question name" />
        </BoxRow>
        <BoxRow label='ชื่อคำถาม'>
            <Input type="text" id="qnamet" name="qnamet" placeholder="Enter question name in Thai" />
        </BoxRow>
    </Box>

    <CatalogQuestionForm control={control} register={register} />
    </>
  )
}

export default CreateQuestionForm