from BaseHTTPServer import HTTPServer
from BaseHTTPServer import BaseHTTPRequestHandler


HTML = """
<html>
<head>
<title>My simple site</title>

<style>
{0[css_data]}
</style>

</head>

<body>
<h1>Hello (your name!)</h1>
</body>
</html>
"""

class Website(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)

        css_file = open('styling.css', 'r')
        my_css = css_file.read()
        css_file.close()

        final_html = HTML.format({
            'css_data': my_css,
        })
        self.wfile.write(final_html)


server = HTTPServer(
    ("0.0.0.0", 8081),
    Website)
server.serve_forever()

