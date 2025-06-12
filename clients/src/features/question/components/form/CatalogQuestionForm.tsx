import { useFieldArray } from 'react-hook-form';
import ButtonIcon from '../../../../shared/components/ui/ButtonIcon'
import { HiMinus, HiPlus } from 'react-icons/hi2';
import styled from 'styled-components';
import Input from '../../../../shared/components/form/Input';
import SubCatalogs from './SubCatalogs';
import { useState } from 'react';
import ButtonGroup from '../../../../shared/components/ui/ButtonGroup';

import CatalogButton from '../ui/CatalogButton';





const StyledCatalogs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;

   
`;



const StyledQuestionCatalogs = styled.div`
    display: grid;
    grid-template-columns: 24rem 1fr 1.2fr;
    justify-content: space-between;
    padding: 1.2rem 1.6rem;
    background-color: var(--color-brand-400);
    border-radius: 0.5rem;
    align-items: center;
`;








function CatalogQuestionForm({control, register }: any) {
    const [dropdownOpen, setDropdownOpen] = useState(true);


    const {
        fields: catalogFields,
        append: appendCatalog,
        remove: removeCatalog
    } = useFieldArray({
        control,
        name: 'catalogs'
    });

    
    

  return (
    <StyledCatalogs>
        <CatalogButton onClick={() => appendCatalog({ title: '', subCatalogs: [] })} variation='primary' size='large' ><HiPlus/> เพิ่มหัวข้อ</CatalogButton>
        {catalogFields.map((catalog, index) => (
            <>
            <StyledQuestionCatalogs key={catalog.id}>
                <label>{`หัวข้อ ${index + 1}`}</label>
                <Input {...register(`catalogs.${index}.title`)} placeholder="หัวข้อ" />
                <ButtonGroup>
                    {index > 0 ?<ButtonIcon onClick={() => removeCatalog(index)}><HiMinus/></ButtonIcon> : null}
                <ButtonIcon onClick={() => setDropdownOpen(!dropdownOpen)}>{dropdownOpen ? 'Hide' : 'Show'}</ButtonIcon>
                </ButtonGroup>
                
            </StyledQuestionCatalogs>
            <SubCatalogs
                nestedIndex={index}
                {...{control, register}}
            />
            </>
        ))}
        
    </StyledCatalogs>
  )
}

export default CatalogQuestionForm