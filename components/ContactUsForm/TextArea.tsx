import { useField } from "formik";

type TextAreaProps = {
  name: string;
  placeholder: string;
  rows?: number;
};

export const TextArea = (props: TextAreaProps) => {
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
