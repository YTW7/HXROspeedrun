export default function UserCheck({ walletPublicKey }) {
  const walletExists = database.some(entry => entry.publicKey === walletPublicKey);

  return (
    
      {walletExists}
    
  );
};
     