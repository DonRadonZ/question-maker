// Library
// import { useState } from 'react';
import styled from 'styled-components';
import { HiMinus, HiPlus } from 'react-icons/hi2';
import { useFieldArray } from 'react-hook-form';

// Shared Components
import ButtonIcon from '../../../../shared/components/ui/ButtonIcon'
import Input from '../../../../shared/components/form/Input';
import ButtonGroup from '../../../../shared/components/ui/ButtonGroup';

import SubCatalogs from './SubCatalogs';
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
    // const [dropdownOpen, setDropdownOpen] = useState(true);


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
            <CatalogButton onClick={() => appendCatalog({ title: '', subCatalogs: [] })} variation='primary' size='large' ><HiPlus /> เพิ่มหมวดคำถาม</CatalogButton>
            {catalogFields.map((catalog, index) => (
                <>
                    <StyledQuestionCatalogs key={catalog.id}>
                        <label>{`หมวดที่ ${index + 1}`}</label>
                        <Input {...register(`catalogs.${index}.titleth`)} placeholder="ชื่อหมวด (ไทย)" />
                        <Input {...register(`catalogs.${index}.titleen`)} placeholder="ชื่อหมวด (อังกฤษ)" />
                        <ButtonGroup>
                            {index > 0 ? <ButtonIcon onClick={() => removeCatalog(index)}><HiMinus /></ButtonIcon> : null}
                            {/* <ButtonIcon onClick={() => setDropdownOpen(!dropdownOpen)}>{dropdownOpen ? 'Hide' : 'Show'}</ButtonIcon> */}
                        </ButtonGroup>
                    </StyledQuestionCatalogs>
                    <SubCatalogs
                        nestedIndex={index}
                        {...{ control, register }}
                    />
                </>
            ))}
        </StyledCatalogs>
    )
};

export default CatalogQuestionForm