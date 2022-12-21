const { ethers } = require("ethers");
const rpcURL = "https://cloudflare-eth.com/"
const provider = new ethers.providers.JsonRpcProvider(rpcURL);

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)"
];

const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // DAI Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const name = await contract.name();
    console.log(name);
}

main()