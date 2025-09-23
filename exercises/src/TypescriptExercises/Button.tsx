// Create a button component that has 2 props: label and onClick handled.


type ButtonProps = {
  label: string;
  onClick: () => void;
}
export default function Button({label, onClick} : ButtonProps){
  return (
  <>
    <button onClick={onClick}>{label}</button>
  </>)
}