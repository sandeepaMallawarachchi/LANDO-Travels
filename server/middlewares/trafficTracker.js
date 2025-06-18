const activeUsers = new Map();

const trackOnlineUsers = (req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const now = Date.now();

  // Store/Update IP timestamp
  activeUsers.set(ip, now);

  // Remove inactive IPs (> 2 minutes)
  for (const [key, time] of activeUsers.entries()) {
    if (now - time > 2 * 60 * 1000) {
      activeUsers.delete(key);
    }
  }

  next();
};

const getActiveUserCount = () => activeUsers.size;

module.exports = {
  trackOnlineUsers,
  getActiveUserCount,
};
