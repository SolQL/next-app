import { Artifact, HardhatRuntimeEnvironment } from "hardhat/types";

export default async function getArtifacts(artifactNames: [string]) {
    const hre: HardhatRuntimeEnvironment = require("hardhat");

    const artifactPromises: Promise<Artifact>[] = artifactNames.map(
        (name: string) => hre.artifacts.readArtifact(name)
    )

    const hardhatArtifacts: Artifact[] = await Promise.all(artifactPromises)

    return hardhatArtifacts;
}