import { useState, createContext, useContext } from "react";
import { QueryArtifact } from "./QueryArtifact";
import getArtifacts from "./getArtifacts";

// final hook only takes in a name (query name)
// use a top level context to store artifacts
// hook looks up artifact 


const artifactsContext = createContext({});

const useSolQL = (queryName: string) => {
    const artifacts = useContext(artifactsContext);
}

