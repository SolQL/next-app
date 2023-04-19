import hre from "hardhat";
import { Artifact } from "hardhat/types";
import { ethers } from "ethers";

// provider
// QueryHub contract object



/// holds key information about each query contract 
export class QueryArtifact {
    // deployment bytecode of the query
    bytecode: string;

    interface: ethers.utils.Interface

    bytecodeEncodedArgs?: string;

    constructor(hardhatArtifact: Artifact) {
        this.bytecode = hardhatArtifact.bytecode;
        this.interface = new ethers.utils.Interface(hardhatArtifact.abi);
    }

    run() {
        // assumes constructor args are already encoded if they exist.

    }

    encodeArgs(args?: any[]) {
        // throws an error in case of type mismatch of args 
        const encodedArgs = this.interface.encodeDeploy(args);
        this.bytecodeEncodedArgs = ethers.utils.hexConcat([this.bytecode, encodedArgs]);
    }

    constructAndRun(args?: any[]) {
        this.encodeArgs(args);
        console.log(this.bytecodeEncodedArgs)

        return this.bytecodeEncodedArgs;
    }

}


/*
    // return types of the main() function
    mainReturnTypes: [any];

    // types of the constructor args
    constructorInputTypes?: [any];
    // values of constructor args
    constructorInputArgs?: [any];




        // get abi of main function and store it's return types
        const mainFunctionAbi = hardhatArtifact.abi.find(item => item.name == "main")
        if(!mainFunctionAbi) throw new Error("Make sure your query has a main function")
        if(mainFunctionAbi.inputs.length > 0) throw new Error("main function cannot have input args. Function signature has to be main()")
        this.mainReturnTypes = mainFunctionAbi.outputs;

        // get types of constructor args
        const constructorAbi = hardhatArtifact.abi.find(item => item.type == "constructor")
        if(constructorAbi) {
            this.constructorInputTypes = constructorAbi.inputs
        }
*/