import { useField } from "formik";

type InputFeildProps = {
  name: string;
  placeholder: string;
};

export const InputFeild = (props: InputFeildProps) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input className="input-feild" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
