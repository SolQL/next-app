import { Artifact, HardhatRuntimeEnvironment } from "hardhat/types";

export default async function generateStaticArtifacts() {
    
    const hre: HardhatRuntimeEnvironment = require("hardhat");
    const artifactNames: string[] = await hre.artifacts.getAllFullyQualifiedNames()
    const artifactPromises: Promise<Artifact>[] = artifactNames.map(
        (name: string) => hre.artifacts.readArtifact(name)
    )

    const hardhatArtifacts: Artifact[] = await Promise.all(artifactPromises);

    return hardhatArtifacts;
}