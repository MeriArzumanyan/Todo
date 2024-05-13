import st from "./Inputs.module.css";
export const Inputs = (props) => {
  return (
    <input type={props.type} onChange={props.onChange} value={props.value} />
  );
};
