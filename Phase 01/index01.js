const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html'});

    if(req.url === "/"){
        res.end(`
        <html>
        <head>
        <title>Portfolio</title>
        <style>
        body{font-family:Arial;text-align:center;background:#f4f4f4;}
        nav{background:black;padding:15px;}
        nav a{color:white;margin:10px;text-decoration:none;font-size:18px;}
        </style>
        </head>

        <body>

        <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/education">Education</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
        </nav>

        <h1>Welcome to My Portfolio</h1>
        <h2>Name: Arpitha V G</h2>
        <p>Computer Science Engineering (AI & ML)</p>
        <p>ATME College of Engineering, Mysore</p>

        </body>
        </html>
        `);
    }

    else if(req.url === "/about"){
        res.end(`
        <html>
        <body style="font-family:Arial;text-align:center">

        <h1>About Me</h1>
        <p>I am Arpitha, a Computer Science Engineering student specializing in AI and Machine Learning.</p>
        <p>I am interested in Web Development, Backend Development and Artificial Intelligence.</p>

        <a href="/">Back to Home</a>

        </body>
        </html>
        `);
    }

    else if(req.url === "/education"){
        res.end(`
        <html>
        <body style="font-family:Arial;text-align:center">

        <h1>Education</h1>

        <p>B.E in Computer Science Engineering (AI & ML)</p>
        <p>ATME College of Engineering, Mysore</p>

        <a href="/">Back to Home</a>

        </body>
        </html>
        `);
    }

   

    else if(req.url === "/contact"){
        res.end(`
        <html>
        <body style="font-family:Arial;text-align:center">

        <h1>Contact</h1>

        <p>Name: Arpitha V G</p>
        <p>Email: arpithavg@email.com</p>
        <p>Location: Mysore, India</p>

        <a href="/">Back to Home</a>

        </body>
        </html>
        `);
    }

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});