const mongoose = require('mongoose');
const User = require('../models/user');

async function main() {
  const [,, usernameOrEmail, newPassword] = process.argv;
  if (!usernameOrEmail || !newPassword) {
    console.error('Usage: node init/reset_password.js <username-or-email> <newPassword>');
    process.exit(1);
  }
  const url = process.env.ATLASDB_URL || 'mongodb://127.0.0.1:27017/wanderlust';
  await mongoose.connect(url);
  try {
    // Try to find by username first, then by email
    let user = await User.findOne({ username: usernameOrEmail }) || await User.findOne({ email: usernameOrEmail });
    if (!user) {
      console.error('User not found:', usernameOrEmail);
      process.exit(1);
    }
    await user.setPassword(newPassword);
    await user.save();
    console.log(`Password updated for user ${user.username}`);
    await mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();
