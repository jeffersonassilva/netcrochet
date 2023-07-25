import { useEffect } from "react";

export default function Meia({
  stateChangeColor,
  ...props
}: {
  stateChangeColor: any;
  props: any;
}) {
  useEffect(() => {
    // stateChangeColor('#fff2f7')
  });

  return (
    <>
      <h1 className="text-3xl">Contato</h1>
    </>
  );
}
