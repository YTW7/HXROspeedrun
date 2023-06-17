const adjectives = ['Sneaky', 'Swift', 'Crimson', 'Daring', 'Fierce'];
const nouns = ['Shadow', 'Wolf', 'Blade', 'Phoenix', 'Sword'];

export default function generateUsername() {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const number = Math.floor(Math.random() * 90) + 10;
  return `${adjective}${noun}${number}`;
}