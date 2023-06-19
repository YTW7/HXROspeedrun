// // pages/api/updateData.js
// import data from "../../database/leadData"
// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//   if (req.method !== 'POST') {
//     res.status(405).end(); // Method Not Allowed
//     return;
//   }

//   const { newLeaderboardData } = req.body;
//   const filePath = path.join(process.cwd(), 'leadData.json');
//   const fileData = JSON.stringify(newLeaderboardData);

//   try {
//     fs.writeFileSync(filePath, fileData, 'utf8');
//     res.status(200).json({ message: 'data.json updated successfully' });
//   } catch (error) {
//     console.error('Error updating data.json:', error);
//     res.status(500).json({ message: 'Error updating data.json' });
//   }
// }
