const mega = require("megajs");

const auth = {
  email: "sihileld23@gmail.com",
  password: "sihilel2006#",
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246",
};

const upload = (data, name) => {
  return new Promise((resolve, reject) => {
    try {
      const storage = new mega.Storage(auth);

      // Wait for storage to be ready
      storage.on("ready", () => {
        console.log("Storage is ready for upload.");

        const fileStream = storage.upload({ name: name, allowUploadBuffering: true });

        // Pipe data to the upload stream
        data.pipe(fileStream);

        // Handle file addition and link retrieval
        fileStream.on("complete", (file) => {
          file.link((err, url) => {
            if (err) {
              return reject(err);
            }
            console.log("File uploaded successfully:", url);
            storage.close();
            resolve(url);
          });
        });
      });

      // Handle storage initialization errors
      storage.on("error", (err) => {
        console.error("Error initializing storage:", err);
        reject(err);
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { upload };
