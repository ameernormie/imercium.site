import { useField } from "formik";

type textFeildProps = {
  name: string;
  placeholder: string;
};

export const TextArea = (props: textFeildProps) => {
  const [field, meta] = useField(props);
  return (
    <>
      <textarea className="text-area" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export const InputFeild = (props: textFeildProps) => {
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
