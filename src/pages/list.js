
import React, { useEffect } from 'react';
import {useCanisterListing} from "../hooks/useListing";
import {useHistory} from "react-router-dom";

function List() {
    const history = useHistory();
    const list1 = useCanisterListing("3mttv-dqaaa-aaaah-qcn6q-cai")
    const list2 = useCanisterListing("3mttv-dqaaa-aaaah-qcn6q-cai")
    const list3 = useCanisterListing("3mttv-dqaaa-aaaah-qcn6q-cai")
    console.log(list1)
    console.log(list2)
    console.log(list3)

    return (
        <>
            List
            <button onClick={()=>{
                history.push("/stats")
            }}>to stats</button>


        </>
    )
}
export default List