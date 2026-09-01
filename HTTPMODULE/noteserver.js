import http from 'http';
import fs from 'fs';


const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  // Home page
  if (url.pathname === "/") {
    fs.readFile("notes.txt", "utf8", (err, data) => {
      if (err) {
        data = "No notes yet!";
      }

      res.writeHead(200, { "Content-Type": "text/html" });

      res.end(`
        <h1>My Notes</h1>

        <form action="/add">
          <input name="note" placeholder="Write a note">
          <button>Add Note</button>
        </form>

        <h2>Notes:</h2>
        <pre>${data}</pre>
      `);
    });
  }

  // Add note
  else if (url.pathname === "/add") {
    const note = url.searchParams.get("note");

    if (!note) {
      res.end("Please enter a note");
      return;
    }

    fs.appendFile("notes.txt", note + "\n", (err) => {
      if (err) {
        res.end("Error saving note");
        return;
      }

      res.writeHead(302, {
        Location: "/"
      });

      res.end();
    });
  }

  // Show notes as JSON
  else if (url.pathname === "/notes") {
    fs.readFile("notes.txt", "utf8", (err, data) => {
      if (err) {
        data = "";
      }

      const notes = data
        .split("\n")
        .filter(note => note !== "");

      res.writeHead(200, {
        "Content-Type": "application/json"
      });

      res.end(JSON.stringify(notes));
    });
  }

  // Clear notes
  else if (url.pathname === "/clear") {
    fs.writeFile("notes.txt", "", (err) => {
      if (err) {
        res.end("Error clearing notes");
        return;
      }

      res.end("All notes cleared!");
    });
  }

  // Page not found
  else {
    res.writeHead(404, {
      "Content-Type": "text/plain"
    });

    res.end("404 - Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});