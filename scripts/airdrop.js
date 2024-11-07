const { ethers } = require("hardhat");

async function main() {
    
    const airdropAddresses = [
        "0xb509E2Dd96E38350Cb1B6Bb7D355BADE60e060Dc",
        "0xCcD6FdFC4A8483B884203D1F62E615F7F5C9b561",
        "0xd273279327B13746D43E63A2275875ff2E6bb428"
    ];
    
    // Jumlah token yang akan dikirim ke masing-masing alamat (dalam format ether)
    const airdropAmount = "10"; // misalnya 10 token per alamat
    
    // Alamat kontrak token Anda (ganti dengan alamat kontrak Melina token Anda)
    const tokenAddress = "0xC09980Be4474D91234f04e17a3AA331D55D46496";
    
    // Dapatkan signer
    const [deployer] = await ethers.getSigners();
    
    // Hubungkan ke kontrak token
    const token = await ethers.getContractAt("Melina", tokenAddress);
    
    console.log("Mulai airdrop...");
    console.log("Total penerima:", airdropAddresses.length);
    
    // Lakukan airdrop ke setiap alamat
    for (let i = 0; i < airdropAddresses.length; i++) {
        try {
            const amount = ethers.parseEther(airdropAmount);
            const tx = await token.transfer(airdropAddresses[i], amount);
            await tx.wait();
            
            console.log(`✅ Berhasil mengirim ${airdropAmount} token ke ${airdropAddresses[i]}`);
        } catch (error) {
            console.error(`❌ Gagal mengirim ke ${airdropAddresses[i]}:`, error.message);
        }
    }
    
    console.log("Airdrop selesai!");
    
    // Cek saldo kontrak
    const balance = await token.balanceOf(deployer.address);
    console.log("Sisa saldo token:", ethers.formatEther(balance));
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
