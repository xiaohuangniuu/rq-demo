import { Actor, HttpAgent } from "@dfinity/agent";
import {useQueries} from "react-query";
import {idlFactory} from "../canister/nft/nft.did.js";

const agent = new HttpAgent({ host: "https://ic0.app" });
export const useCanisterStats = (canisterIds:[string]) =>{
    const userQueries = useQueries(
        canisterIds?.map(canisterId => {
            return {
                queryKey: ['canister_stats', canisterId],
                queryFn: () => fetchCanisterStats(canisterId),
                options:{
                    staleTime:60*1000*1,
                }
            }
        }) ?? [],

    )
    return userQueries
};

const fetchCanisterStats = async (canisterId:string) => {
    const nft = Actor.createActor<any>(idlFactory,{
       agent,
       canisterId,
    })
    const statsResult = await nft.stats();
    return statsResult
}