from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app)

players = {}

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('connect')
def handle_connect():
    print('Player connected')
    emit('message', 'Connected to the game server')

@socketio.on('player_move')
def handle_player_move(data):
    player_id = data['player_id']
    paddle_y = data['paddle_y']
    players[player_id] = paddle_y
    emit('update_game', players, broadcast=True)

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)
