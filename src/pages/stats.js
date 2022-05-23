
import React, { useEffect } from 'react';
import {useCanisterListing} from "../hooks/useListing";
import {useCanisterStats} from "../hooks/useCanisterStats";
import {useHistory} from "react-router-dom";
function Stats() {
    const history = useHistory();
    const stats = useCanisterStats(["3mttv-dqaaa-aaaah-qcn6q-cai","rw7qm-eiaaa-aaaak-aaiqq-cai"])
    const stat1 = useCanisterStats(["3mttv-dqaaa-aaaah-qcn6q-cai","rw7qm-eiaaa-aaaak-aaiqq-cai"])
    const stat2 = useCanisterStats(["3mttv-dqaaa-aaaah-qcn6q-cai","rw7qm-eiaaa-aaaak-aaiqq-cai"])

    console.log(stats)
    console.log(stat1)
    console.log(stat2)
    return (
        <>
            STATS
            <button onClick={()=>{
                history.push("/list")
            }}>to list</button>
        </>
    )
}
export default Stats