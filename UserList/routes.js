const reqHandler = (req, res) => {
    const { url, method } = req;
    if (url === '/') {
        res.write(`
            <html>
                <head><title>Welcome</title></head>
                <body>
                    <h1> Welcome user ! </h1>
                    <form action="/create-user" method="POST">
                        <input type="text" name="username" />
                        <button type="submit">Submit</button>
                    </form>
                </body>
            </html>
        `);
        return res.end();
    }

    if (url === '/users') {
        res.write(`
            <html>
                <head><title>Welcome</title></head>
                <body>
                    <ul>
                        <li> Dijish U K </li>
                        <li> Dhani </li>
                        <li> Yash </li>
                        <li> David </li>
                </body>
            </html>
        `);
        return res.end();
    }

    if (url === '/create-user' && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const userName = parsedBody.split('=')[1];
            console.log('User name: ', userName);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
    }

    return null;
};

module.exports = reqHandler;
