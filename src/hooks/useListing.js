import { Actor, HttpAgent } from "@dfinity/agent";
import { useQuery} from "react-query";
import {idlFactory} from "../canister/nft/nft.did.js";

const agent = new HttpAgent({ host: "https://ic0.app" });
export const useCanisterListing = (canisterId) =>{
    const {data,isFetching} = useQuery(   ["canister_listing",  canisterId ], async ()=> {
        const nft = Actor.createActor(idlFactory,{
            agent,
            canisterId,
        })
        console.log("1231231",canisterId)
        return await nft.listings();
    },{
        staleTime:60*1000*2,
    })
    return {data,isFetching}
};