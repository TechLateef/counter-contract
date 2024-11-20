import * as hre from "hardhat";


async function main() {
    try {

        console.log("Deploying Count Contract");

        const CountContract = await hre.ethers.getContractFactory("Counter");
        const counterContract = await CountContract.deploy();

        await counterContract.waitForDeployment();

        console.log("Count contract address: ", counterContract.target);
    } catch (error) {
        console.log("Error deploying Contract", error)
    }

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})