import { useFormContext } from '../../utils/FormContext/FormContext';

export default function SetupPage() {
  const { formState, formDispatch } = useFormContext();
  const handleSetup = () => {
    formDispatch({ type: 'CHANGE_PAGE', payload: { page: 2 } });
  };
  return (
    <div>
      <div>Setup</div>
      <button onClick={handleSetup}>Next</button>
    </div>
  );
}
