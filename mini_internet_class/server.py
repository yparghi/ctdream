from BaseHTTPServer import HTTPServer
from BaseHTTPServer import BaseHTTPRequestHandler


HTML = """
<html>
<head>
<title>My simple site</title>
</head>

<body>
<h1>Hello (your name!)</h1>
</body>
</html>
"""

class Website(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.wfile.write(HTML)


server = HTTPServer(
    ("0.0.0.0", 8081),
    Website)
server.serve_forever()

