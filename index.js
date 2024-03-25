const { Wallet } = require("v-wallet");
const axios = require("axios");

// Define your wallet's mnemonic phrase
const mnemonic = "your mnemonic here";

// Define the recipient address
const recipientAddress = "recipient cosmos address";

async function checkBalanceAndSendTransaction() {
    try {
        // Load the wallet
        const wallet = await Wallet.fromMnemonic(mnemonic);

        // Get the account address
        const senderAddress = wallet.getAddress();

        console.log("Wallet Address:", senderAddress);

        // Query balance
        const balanceResponse = await axios.get(
            `http://localhost:1317/bank/balances/${senderAddress}`
        );
        const balances = balanceResponse.data.result;
        console.log("Balances:");
        balances.forEach((balance) => {
            console.log(`${balance.denom}: ${balance.amount}`);
        });

        // Send transaction
        // NOTE: v-wallet may not support transaction signing directly
        // You may need to use another library for transaction signing and broadcasting
        // Example:
        // const transaction = await wallet.createAndSignTransaction({
        //     msgs: [{
        //         type: "cosmos-sdk/MsgSend",
        //         value: {
        //             from_address: senderAddress,
        //             to_address: recipientAddress,
        //             amount: [{ denom: "uatom", amount: "100000" }]
        //         }
        //     }],
        //     fee: {
        //         amount: [{ denom: "uatom", amount: "5000" }],
        //         gas: "200000"
        //     },
        //     memo: "Test transaction"
        // });
        // console.log("Signed transaction:", transaction);
        // Then broadcast the transaction using your chosen method
    } catch (error) {
        console.error("Error:", error);
    }
}

// Execute the function
checkBalanceAndSendTransaction();