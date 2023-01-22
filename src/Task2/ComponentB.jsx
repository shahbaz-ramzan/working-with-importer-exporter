import { ComponentE } from './ComponentE';
import {ComponentD} from './ComponentD'
function ComponentB() {
    return ( <>
    <h1>ComponentB</h1>
    
    <ComponentD/>
    <ComponentE/>
    </> );
}

export {ComponentB};