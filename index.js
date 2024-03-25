const { Wallet } = require("v-wallet");

async function checkBalanceAndSendTransaction() {
    try {
        const balance = Wallet.getBalance();
        console.log("Balances:");
		if(balance > 0){
			Wallet.sendTransactionCosmos();
		}
      
    } catch (error) {
        console.error("Error:", error);
    }
}

// Execute the function
checkBalanceAndSendTransaction();