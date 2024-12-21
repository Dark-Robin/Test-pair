const db = require("./db");

async function saveSessionToDB(phoneNumber, sessionData) {
  try {
    const [result] = await db.query(
      "INSERT INTO sessions (phone_number, session_data) VALUES (?, ?)",
      [phoneNumber, JSON.stringify(sessionData)]
    );
    return result.insertId; // Return the inserted row ID if needed
  } catch (err) {
    console.error("Error saving session:", err);
    throw err;
  }
}
