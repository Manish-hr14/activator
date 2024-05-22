// src/config.js

const CONTRACT_NAME = "act1.breadjam.testnet"; // Replace with your contract name

function getConfig(env) {
  switch (env) {
    case "mainnet":
      return {
        networkId: "mainnet",
        nodeUrl: "https://rpc.mainnet.near.org",
        contractName: CONTRACT_NAME,
        walletUrl: "https://app.mynearwallet.com",
        helperUrl: "https://helper.mainnet.near.org",
        explorerUrl: "https://explorer.mainnet.near.org",
      };
    case "testnet":
    default:
      return {
        networkId: "testnet",
        nodeUrl: "https://rpc.testnet.near.org",
        contractName: CONTRACT_NAME,
        walletUrl: "https://testnet.mynearwallet.com",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org",
      };
  }
}

export default getConfig;