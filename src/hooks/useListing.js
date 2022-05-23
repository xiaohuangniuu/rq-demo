import { Actor, HttpAgent } from "@dfinity/agent";
import { useQuery} from "react-query";
import {idlFactory} from "../canister/nft/nft.did.js";

const agent = new HttpAgent({ host: "https://ic0.app" });
export const useCanisterListing = (canisterId:string) =>{
    const {data,isFetching} = useQuery(   ["canister_listing",  canisterId ], async ()=> {
        const nft = Actor.createActor<any>(idlFactory,{
            agent,
            canisterId,
        })
        return await nft.listings();
    },{
        staleTime:60*1000*2,
    })
    return {data,isFetching}
};