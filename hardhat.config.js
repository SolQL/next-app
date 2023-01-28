
module.exports = {
    defaultNetwork: "goerli",
    networks: {
      hardhat: {
      },
      goerli: {
        url: "https://eth-goerli.alchemyapi.io/v2/123abc123abc123abc123abc123abcde"
      }
    },
    solidity: {
      version: "0.8.17",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    },
    paths: {
      sources: "./queries",
      tests: "./test",
      cache: "./cache",
      artifacts: "./artifacts"
    }
}