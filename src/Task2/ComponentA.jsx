import {ComponentB} from'./ComponentB';
import { ComponentC } from "./ComponentC";
function ComponentA() {
    return ( <>
    <h1>Component A</h1>
    <ComponentB/>
    <ComponentC/>
    </> );
}

export  {ComponentA};