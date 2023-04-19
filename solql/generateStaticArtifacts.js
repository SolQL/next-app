
async function generateStaticArtifacts() {
    
    const hre = require("hardhat");
    const fs = require("fs");

    const artifactNames = await hre.artifacts.getAllFullyQualifiedNames()
    const artifactPromises = artifactNames.map(
        (name) => hre.artifacts.readArtifact(name)
    )
    const hardhatArtifacts = await Promise.all(artifactPromises);
    const write = fs.writeFileSync("./public/solql-artifacts.json", JSON.stringify(hardhatArtifacts));
    return write;
}


generateStaticArtifacts()
.then(() => process.exit(0))
.catch(() => process.exit(1));