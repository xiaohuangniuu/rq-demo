import { Actor, HttpAgent } from "@dfinity/agent";
import {useQueries} from "react-query";
import {idlFactory} from "../canister/nft/nft.did.js";

const agent = new HttpAgent({ host: "https://ic0.app" });
export const useCanisterStats = (canisterIds) =>{
    const qq = canisterIds?.map(canisterId => {
        return {
            queryKey: ['canister_stats', canisterId],
            queryFn: () => fetchCanisterStats(canisterId),
            staleTime:60*1000*2,
        }
    }) ?? []
    const userQueries = useQueries(
        qq,
    )
    return userQueries
};

const fetchCanisterStats = async (canisterId) => {
    console.log(canisterId)
    const nft = Actor.createActor(idlFactory,{
       agent,
       canisterId,
    })
    const statsResult = await nft.stats();
    return statsResult
}