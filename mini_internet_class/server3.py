from BaseHTTPServer import HTTPServer
from BaseHTTPServer import BaseHTTPRequestHandler

import json


HTML = """
<html>
<head>
<title>My simple site</title>

<style>
{0[css_data]}
</style>

</head>

<body>
<h1>DB class</h1>

<ul>
{0[db_contents]}
</ul>

<form method="POST" action="/">
<input type="text" name="new_name"></input>
<input type="submit" value="Submit"></input>
</form>

</body>
</html>
"""

class Website(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)

        css_file = open('styling.css', 'r')
        my_css = css_file.read()
        css_file.close()

        db_contents = self.load_db()

        final_html = HTML.format({
            'css_data': my_css,
            'db_contents': db_contents,
        })
        self.wfile.write(final_html)


    def load_db(self):
        db_file = open('db.txt', 'r')
        loaded_json = json.load(db_file)
        db_file.close()

        html = ''
        for name in loaded_json['names']:
            html += '<li>' + name + '</li>'

        return html


    def do_POST(self):
        print 'Got a post! What do I do???'
        self.send_response(200)


server = HTTPServer(
    ('0.0.0.0', 8081),
    Website)
print 'Running on localhost:8081 ...'
server.serve_forever()

