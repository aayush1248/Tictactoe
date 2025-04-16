const assert = require('assert');

function checkWin(board, player) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];
    return winPatterns.some(pattern =>
        pattern.every(index => board[index] === player)
    );
}

describe('TicTacToe', function() {
    it('should detect a horizontal win', function() {
        const board = ['X', 'X', 'X', null, null, null, null, null, null];
        assert.strictEqual(checkWin(board, 'X'), true);
    });

    it('should detect a vertical win', function() {
        const board = ['O', null, null, 'O', null, null, 'O', null, null];
        assert.strictEqual(checkWin(board, 'O'), true);
    });

    it('should detect a diagonal win', function() {
        const board = ['X', null, null, null, 'X', null, null, null, 'X'];
        assert.strictEqual(checkWin(board, 'X'), true);
    });

    it('should not detect a win for incomplete board', function() {
        const board = ['X', 'O', null, null, null, null, null, null, null];
        assert.strictEqual(checkWin(board, 'X'), false);
    });
});