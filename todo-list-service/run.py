import os
from flask import Flask, jsonify

app = Flask(__name__)
 
@app.route('/')
def hello_world():
    return f"Hello, {os.environ['NAME']}"

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {
        'todos': ["Walk a dog", "Buy milk", "Go to work"],
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)