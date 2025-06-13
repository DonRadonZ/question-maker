import Input from '../../../../shared/components/form/Input';
import ButtonIcon from '../../../../shared/components/ui/ButtonIcon';
import { HiMinus, HiPlus } from 'react-icons/hi2';
import { useFieldArray } from 'react-hook-form';
import styled from 'styled-components';
import Checkbox from '../../../../shared/components/ui/Checkbox';
import ButtonGroup from '../../../../shared/components/ui/ButtonGroup';
import CatalogButton from '../ui/CatalogButton';

type SubCatalogsProps = {
    nestedIndex: number;
    control: any;
    register: any;
}
const StyledQuestionSubCatalogs = styled.div`
    display: grid;
    grid-template-columns: 24rem 1fr 1.2fr;
    justify-content: space-between;
    padding: 1.2rem 1.6rem;
    background-color: var(--color-gray-100);
    border-radius: 0.5rem;
    align-items: center;
`;

const EvaluationCount = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;`;

function SubCatalogs({ nestedIndex, control, register }: SubCatalogsProps) {
  const { fields: subCatalogFields, append: appendSubCatalog, remove: removeSubCatalog } = useFieldArray({
    control,
    name: `catalogs.${nestedIndex}.subCatalogs`
  });

  return (
    <>
      {subCatalogFields.map((subCatalog, index) => (
        <StyledQuestionSubCatalogs key={subCatalog.id}>
          <EvaluationCount>
            
            
                <label>{`ข้อที่ ${index + 1}`}</label>
            </EvaluationCount>
          <Input {...register(`catalogs.${nestedIndex}.subCatalogs.${index}.title`)} placeholder="คำถาม (ไทย)" />
          <Input {...register(`catalogs.${nestedIndex}.subCatalogs.${index}.title`)} placeholder="คำถาม (อังกฤษ)" />
          <EvaluationCount>
          <label>คิดคะแนน</label>
          <Checkbox />
          </EvaluationCount>
          <EvaluationCount>
          <label>ค่าน้ำหนัก</label>
            <select>
              <option value={1.00}>1.00</option>
              <option value={1.00}>1.50</option>
              <option value={2.00}>2.00</option>
              
          </select>
          </EvaluationCount>
          <ButtonGroup>
                    {index > 0 ?<ButtonIcon onClick={() => removeSubCatalog(index)}><HiMinus/></ButtonIcon> : null}
                
          </ButtonGroup>
          
        </StyledQuestionSubCatalogs>
      ))}
      <CatalogButton onClick={() => appendSubCatalog({ title: '', questions: [] })} variation='secondary' size='medium'><HiPlus/> เพิ่มข้อคำถาม</CatalogButton>
    </>
  )
}

export default SubCatalogs