import { useContext } from "react";
import { dets } from "../context/Datacontext";

const One = () => {
  const [first,setfirst] = useContext(dets)
  return (
    <div>
{first}
    </div>
  )
}

export default One

