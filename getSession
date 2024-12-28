const db = require("./db");

async function getSessionFromDB(sessionId) {
  try {
    const [rows] = await db.query("SELECT session_data FROM sessions WHERE id = ?", [sessionId]);
    return rows.length > 0 ? JSON.parse(rows[0].session_data) : null;
  } catch (err) {
    console.error("Error retrieving session:", err);
    throw err;
  }
}

module.exports = { getSessionFromDB };
