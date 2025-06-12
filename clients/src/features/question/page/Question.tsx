import styled from 'styled-components'
import Row from '../../../shared/components/layout/Row'
import ButtonIcon from '../../../shared/components/ui/ButtonIcon'
import { HiArrowLeft } from 'react-icons/hi2'

import { useMoveBack } from '../../../shared/hooks/useMoveback'

import { useForm } from 'react-hook-form'
import CreateQuestionForm from '../components/form/CreateQuestionForm'
import Button from '../../../shared/components/ui/Button'

const Title = styled.div`
  font-size: 1.5rem;
  display: flex;
  `

type FormValues = {
    catalogs: {
        title: string;
        subCatalogs: {
            title: string;
            questions: {
                label: string;
            }[];
        }[];
    }[];
}

function Question() {
  const { control, register, handleSubmit} = useForm<FormValues>({
        defaultValues: {
            catalogs: [{
                title: '',
                subCatalogs: [{
                    title: '',
                    questions: []
                }]
            }]
        }
    });
  const moveback = useMoveBack();

  function onSubmit(data: FormValues) {
        console.log('Submitted Data:', data);
    }

  return (
    <>
    <Row type="horizontal">
        <Title>
            <ButtonIcon onClick={moveback}>
                <HiArrowLeft/>
            </ButtonIcon>
           <h1>คำถาม</h1> 
        </Title>
        <Button onClick={handleSubmit(onSubmit)} variation='primary' size='medium'>Submit</Button>
    </Row>
    <CreateQuestionForm control={control} register={register}/>
    </>
  )
}

export default Question