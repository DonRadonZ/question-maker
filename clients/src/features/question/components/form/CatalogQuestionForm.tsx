import { useFieldArray } from 'react-hook-form';
import ButtonIcon from '../../../../shared/components/ui/ButtonIcon'
import { HiMinus, HiPlus } from 'react-icons/hi2';
import styled from 'styled-components';
import Input from '../../../../shared/components/form/Input';
import SubCatalogs from './SubCatalogs';



const StyledCatalogs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;

    & > div {
        display: flex;
        align-items: center;
        gap: 10px;
    }
`;



const StyledQuestionCatalogs = styled.div`
    padding: 1.2rem 2.4rem;
    background-color: var(--color-brand-400);
`;



function CatalogQuestionForm({control, register }: any) {
    


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
        
        {catalogFields.map((catalog, index) => (
            <>
            <StyledQuestionCatalogs key={catalog.id}>
                <label>{index + 1}</label>
                <Input {...register(`catalogs.${index}.title`)} placeholder="Catalog Title" />
                {index > 0 ?<ButtonIcon onClick={() => removeCatalog(index)}><HiMinus/></ButtonIcon> : null}
            
            
            </StyledQuestionCatalogs>
            <SubCatalogs
                nestedIndex={index}
                {...{control, register}}
            />
            </>
        ))}
        <ButtonIcon onClick={() => appendCatalog({ title: '', subCatalogs: [] })} ><HiPlus/></ButtonIcon>
    </StyledCatalogs>
  )
}

export default CatalogQuestionForm