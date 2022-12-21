const { ethers } = require("ethers");
const rpcURL = "https://cloudflare-eth.com/"
const provider = new ethers.providers.JsonRpcProvider(rpcURL);

const address = "0x101D7eD3eF83b58B82892C773793b49D0a456a00"

const checkBalance = async () => {
    const balance = await provider.getBalance(address)
    console.log(balance)
}

checkBalance()