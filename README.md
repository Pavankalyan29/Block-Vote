# 🗳️ Block-Vote: A Decentralized Voting Application

**Block-Vote** is a decentralized voting platform built using Ethereum blockchain technology to ensure secure, transparent, and tamper-proof elections. It leverages smart contracts and blockchain integration for seamless user and admin interaction.

## 🚀 Features

- Voter registration and authentication
- Admin-only candidate registration
- Phase-based voting: Registration → Voting → Result
- One-person-one-vote enforcement using smart contracts
- MetaMask integration for Ethereum wallet access
- Responsive and interactive UI
- Email OTP verification using NodeMailer

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript, Bootstrap, Lottie animations
- **Backend**: Node.js, Express.js, MySQL, Nodemailer
- **Blockchain**: Solidity, Truffle, Ganache, Web3.js, MetaMask

## 📁 Project Structure

```
Block-Vote/
├── contracts/           # Solidity smart contracts (Contest.sol)
├── migrations/          # Truffle migration scripts
├── public/              # Static files (CSS, JS, Images, Animations)
├── routes/              # Node.js route handlers
├── views/               # HTML/EJS files (Frontend & Admin Panel)
├── database/            # MySQL connection and queries
├── app.js               # Entry point for Node.js backend
├── truffle-config.js    # Truffle configuration
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```


markdown
Copy
Edit

## 🧪 How to Run the Project

### Prerequisites

- Node.js and npm
- Ganache (CLI or Desktop)
- Truffle
- MetaMask (browser extension)
- MySQL

### Steps

1. Clone the repo:

   ```bash
   git clone https://github.com/your-username/block-vote.git
   cd block-vote
Install dependencies:

bash
Copy
Edit
npm install
Start Ganache and compile/deploy smart contracts:

bash
Copy
Edit
truffle compile
truffle migrate --reset
Start the Node.js backend server:

bash
Copy
Edit
npm run dev
Open your browser and go to:

arduino
Copy
Edit
http://localhost:3000
Connect your MetaMask wallet to the local Ganache network.

🔐 Smart Contract Features
Admin can register voters and candidates

Voters can vote only once

Contest phases controlled securely on-chain

Transparent result display

📧 Email Verification
Email OTP is sent using NodeMailer to verify the user's identity during registration.

📸 Screenshots
Add screenshots of:

Registration page

Voting cards with Lottie animations

Admin panel

Final result screen

👨‍💻 Developed By
Pentam Pavan Kalyan

📄 License
This project is licensed under the MIT License.

yaml
Copy
Edit

---

✅ **Just copy-paste this into a file named `README.md`** in the root folder of your GitHub project.

Let me know if you want me to generate a matching `LICENSE` file or include real 
