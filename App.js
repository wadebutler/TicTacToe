import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Header from './src/components/Header';
import PlayerTurnIndicator from './src/components/PlayerTurnIndicator';
import Cross from './src/components/Cross';
import Circle from './src/components/Circle';
import { $Black, $White, $Blue } from './src/utilities/StyleVariables';

const windowWidth = Dimensions.get('window').width;

export default function App() {
  const [winner, setWinner] = useState(0);
  const [activePlayer, setActivePlayer] = useState(1);
  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [playerOneWinCount, setPlayerOneWinCount] = useState(0);
  const [playerTwoWinCount, setPlayerTwoWinCount] = useState(0);

  const markPosition = (pos) => {
    if (gameBoard[pos] === null) {
      let tempObj = [...gameBoard]
      tempObj[pos] = activePlayer
      setGameBoard(tempObj)

      if (activePlayer === 1) {
        setActivePlayer(2)
      } else {
        setActivePlayer(1)
      }
    }
  }

  const playAgain = () => {
    if (winner === 1) {
      setPlayerOneWinCount(playerOneWinCount + 1)
    } else if (winner === 2) {
      setPlayerTwoWinCount(playerTwoWinCount + 1)
    }

    setWinner(0)
    setActivePlayer(1)
    setGameBoard(Array(9).fill(null))
  }

  const resetTracker = () => {
    setPlayerOneWinCount(0)
    setPlayerTwoWinCount(0)
  }

  // pulled from react tutorial page
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const checkDraw = (num) => {
    return num !== null
  }

  useEffect(() => {
    const winner = calculateWinner(gameBoard);

    if (winner === 1) {
      setWinner(1)
    } else if (winner === 2) {
      setWinner(2)
    } else if (gameBoard.every(checkDraw)) {
      setWinner(3)
    }
  }, [gameBoard])

  return (
    <View style={styles.container}>
      <Header />

      <PlayerTurnIndicator activePlayer={activePlayer} />

      <View style={styles.boardContainer}>
        <TouchableOpacity style={styles.tileTopLeft} disabled={winner === 0 ? false : true} onPress={() => markPosition(0)}>
          {gameBoard[0] === 1 ? <Cross size={130} /> : null}
          {gameBoard[0] === 2 ? <Circle size={95} /> : null}
        </TouchableOpacity>

        <TouchableOpacity style={styles.tileTopMid} disabled={winner === 0 ? false : true} onPress={() => markPosition(1)}>
          {gameBoard[1] === 1 ? <Cross size={130} /> : null}
          {gameBoard[1] === 2 ? <Circle size={95} /> : null}
        </TouchableOpacity>

        <TouchableOpacity style={styles.tileTopRight} disabled={winner === 0 ? false : true} onPress={() => markPosition(2)}>
          {gameBoard[2] === 1 ? <Cross size={130} /> : null}
          {gameBoard[2] === 2 ? <Circle size={95} /> : null}
        </TouchableOpacity>

        <TouchableOpacity style={styles.tileMidLeft} disabled={winner === 0 ? false : true} onPress={() => markPosition(3)}>
          {gameBoard[3] === 1 ? <Cross size={130} /> : null}
          {gameBoard[3] === 2 ? <Circle size={95} /> : null}
        </TouchableOpacity>

        <TouchableOpacity style={styles.tileMidMid} disabled={winner === 0 ? false : true} onPress={() => markPosition(4)}>
          {gameBoard[4] === 1 ? <Cross size={130} /> : null}
          {gameBoard[4] === 2 ? <Circle size={95} /> : null}
        </TouchableOpacity>

        <TouchableOpacity style={styles.tileMidRight} disabled={winner === 0 ? false : true} onPress={() => markPosition(5)}>
          {gameBoard[5] === 1 ? <Cross size={130} /> : null}
          {gameBoard[5] === 2 ? <Circle size={95} /> : null}
        </TouchableOpacity>

        <TouchableOpacity style={styles.tileBotLeft} disabled={winner === 0 ? false : true} onPress={() => markPosition(6)}>
          {gameBoard[6] === 1 ? <Cross size={130} /> : null}
          {gameBoard[6] === 2 ? <Circle size={95} /> : null}
        </TouchableOpacity>

        <TouchableOpacity style={styles.tileBotMid} disabled={winner === 0 ? false : true} onPress={() => markPosition(7)}>
          {gameBoard[7] === 1 ? <Cross size={130} /> : null}
          {gameBoard[7] === 2 ? <Circle size={95} /> : null}
        </TouchableOpacity>

        <TouchableOpacity style={styles.tileBotRight} disabled={winner === 0 ? false : true} onPress={() => markPosition(8)}>
          {gameBoard[8] === 1 ? <Cross size={130} /> : null}
          {gameBoard[8] === 2 ? <Circle size={95} /> : null}
        </TouchableOpacity>
      </View>

      <View style={[styles.messageContainer, {backgroundColor : winner === 0 ? null : $Blue}]}>
        {
          winner === 0 ? null :
            <View style={styles.alignmentContainer}>
              {
                winner === 1 ? 
                  <View style={styles.winningMessage}>
                    <Text style={styles.whiteFont}>Congrats player </Text>
                    <Cross size={20} />
                    <Text style={styles.whiteFont}> you won!</Text>
                  </View>
                : null
              }

              {
                winner === 2 ? 
                  <View style={styles.winningMessage}>
                    <Text style={styles.whiteFont}>Congrats player </Text>
                    <Circle size={15} />
                    <Text style={styles.whiteFont}> you won!</Text>
                  </View>
                : null
              }

              {
                winner === 3 ?
                  <View style={styles.winningMessage}>
                    <Text style={styles.whiteFont}>Oops, better luck next time.</Text>
                  </View>
                : null
              }

              <TouchableOpacity onPress={() => playAgain()}>
                <Text style={[styles.whiteFont, {marginTop: 4}]}>Play Again?</Text>
              </TouchableOpacity>
            </View>
        }
      </View>

      <View style={styles.winContainer}>
        <Text style={styles.whiteFont}>Win Count</Text>

        <View style={styles.playerContainer}>
          <View style={styles.countContainer}>
            <Cross size={20} />

            <Text style={styles.whiteFont}>: </Text>
          </View>

          {
            playerOneWinCount === null ? null :
              <Text style={styles.whiteFont}>{playerOneWinCount}</Text>
          }
        </View>

        <View style={styles.playerContainer}>
          <View style={styles.countContainer}>
            <Circle size={15} />

            <Text style={styles.whiteFont}> : </Text>
          </View>

          {
            playerOneWinCount === null ? null :
              <Text style={styles.whiteFont}>{playerTwoWinCount}</Text>
          }
        </View>

        <TouchableOpacity onPress={() => resetTracker()}>
          <Text style={[styles.whiteFont, { marginTop: 4 }]}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: $White,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boardContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    flexWrap: 'wrap', 
    maxWidth: windowWidth,
    marginVertical: 20,
  },
  messageContainer: {
    height: 80, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 10, 
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  winContainer: {
    alignItems: 'center', 
    backgroundColor: $Blue, 
    padding: 10, 
    borderRadius: 10,
  },
  playerContainer: {
    flexDirection: 'row', 
    justifyContent: 'center',
  },
  countContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  winningMessage: {
    flexDirection: 'row', 
    height: 25, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  alignmentContainer: {
    alignItems: 'center',
  },
  whiteFont: {
    color: $White, 
    fontSize: 15,
  },
  tileTopLeft: {
    height: windowWidth/3.3, 
    width: windowWidth / 3.3,
    borderWidth: 2,
    borderColor: $Black,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  tileTopMid: {
    height: windowWidth / 3.3,
    width: windowWidth / 3.3,
    borderWidth: 2,
    borderColor: $Black,
    borderTopWidth: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tileTopRight: {
    height: windowWidth / 3.3,
    width: windowWidth / 3.3,
    borderWidth: 2,
    borderColor: $Black,
    borderTopWidth: 0,
    borderRightWidth: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tileMidLeft: {
    height: windowWidth / 3.3,
    width: windowWidth / 3.3,
    borderWidth: 2,
    borderColor: $Black,
    borderLeftWidth: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tileMidMid: {
    height: windowWidth / 3.3,
    width: windowWidth / 3.3,
    borderWidth: 2,
    borderColor: $Black,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tileMidRight: {
    height: windowWidth / 3.3,
    width: windowWidth / 3.3,
    borderWidth: 2,
    borderColor: $Black,
    borderRightWidth: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tileBotLeft: {
    height: windowWidth / 3.3,
    width: windowWidth / 3.3,
    borderWidth: 2,
    borderColor: $Black,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tileBotMid: {
    height: windowWidth / 3.3,
    width: windowWidth / 3.3,
    borderWidth: 2,
    borderColor: $Black,
    borderBottomWidth: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tileBotRight: {
    height: windowWidth/3.3, 
    width: windowWidth / 3.3,
    borderWidth: 2,
    borderColor: $Black,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    alignItems: 'center', 
    justifyContent: 'center'
  }
});