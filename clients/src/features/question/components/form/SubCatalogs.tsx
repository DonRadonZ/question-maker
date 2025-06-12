import Input from '../../../../shared/components/form/Input';
import ButtonIcon from '../../../../shared/components/ui/ButtonIcon';
import { HiMinus, HiPlus } from 'react-icons/hi2';
import { useFieldArray } from 'react-hook-form';

type SubCatalogsProps = {
    nestedIndex: number;
    control: any;
    register: any;
}

function SubCatalogs({ nestedIndex, control, register }: SubCatalogsProps) {
  const { fields: subCatalogFields, append: appendSubCatalog, remove: removeSubCatalog } = useFieldArray({
    control,
    name: `catalogs.${nestedIndex}.subCatalogs`
  });

  return (
    <>
      {subCatalogFields.map((subCatalog, index) => (
        <div key={subCatalog.id}>
          <label>SubCatalog {index + 1}</label>
          <Input {...register(`catalogs.${nestedIndex}.subCatalogs.${index}.title`)} placeholder="SubCatalog Title" />
          {index > 0 ? <ButtonIcon onClick={() => removeSubCatalog(index)}><HiMinus/></ButtonIcon> : null}
        </div>
      ))}
      <ButtonIcon onClick={() => appendSubCatalog({ title: '', questions: [] })}><HiPlus/></ButtonIcon>
    </>
  )
}

export default SubCatalogs