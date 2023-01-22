import { ComponentL } from "./ComponentL";
import { ComponentM } from "./ComponentM";
function ComponentF() {
    return ( <>
    <h1>ComponentF</h1>
    <ComponentM/>
    <ComponentL/>
    </> );
}

export {ComponentF};