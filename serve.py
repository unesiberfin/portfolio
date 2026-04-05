import http.server
import socketserver

PORT = 3000
DIRECTORY = "/Users/berfinunesi/Library/Mobile Documents/com~apple~CloudDocs/Documents/Portfolio & Resume/Portfolio"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    def log_message(self, format, *args):
        pass

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()
