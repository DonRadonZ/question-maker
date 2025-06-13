
import Box from '../../../../shared/components/form/Box'
import BoxRow from '../../../../shared/components/form/BoxRow'
import Input from '../../../../shared/components/form/Input'
import CatalogQuestionForm from './CatalogQuestionForm'

function CreateQuestionForm({control, register }: any) {
  return (
    <>
    <Box >
        <BoxRow label='รหัสแบบประเมิน'>
            <Input type="text" id="qname" name="qname" placeholder="รหัสแบบประเมิน" />
        </BoxRow>
        <BoxRow label='ชื่อแบบประเมิน (ไทย)'>
            <Input type="text" id="qnamet" name="qnamet" placeholder="ชื่อแบบประเมิน (ไทย)" />
        </BoxRow>
        <BoxRow label='ชื่อแบบประเมิน (อังกฤษ)'>
            <Input type="text" id="qnamet" name="qnamet" placeholder="ชื่อแบบประเมิน (อังกฤษ)" />
        </BoxRow>
    </Box>

    <CatalogQuestionForm control={control} register={register} />
    </>
  )
}

export default CreateQuestionForm