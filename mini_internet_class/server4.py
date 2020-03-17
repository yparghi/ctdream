from BaseHTTPServer import HTTPServer
from BaseHTTPServer import BaseHTTPRequestHandler

import json


class Website(BaseHTTPRequestHandler):

    def do_GET(self):
        print('Got GET request for path: %s', self.path)

        self.send_header('Content-type', 'application/json')
        self.end_headers()

        db_contents = self.load_db()

        self.send_response(200)
        self.wfile.write(json.dumps(db_contents))


    def load_db(self):
        db_file = open('db.txt', 'r')
        loaded_json = json.load(db_file)
        db_file.close()
        return loaded_json


    def do_POST(self):
        print 'Got a post! What do I do???'
        self.send_response(200)


server = HTTPServer(
    ('0.0.0.0', 8081),
    Website)
print 'Running on localhost:8081 ...'
server.serve_forever()

