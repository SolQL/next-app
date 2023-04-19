import { useState } from "react";
import { ethers } from "ethers";
import { QueryArtifact } from "./QueryArtifact";
import { Artifact } from "hardhat/types";

export const useSolQL = (hardhatArtifact: Artifact) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);



    // send static request to node

    // set isLoading to true while waiting for result
    
    // decode data once received

    return {
        data,
        isLoading,
        error
    }


}