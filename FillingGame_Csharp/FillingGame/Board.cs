using System;
using System.Collections.Generic;
using System.Linq;

namespace FillingGame
{
    public class Board
    {
        private int[,] board;
        public List<int> Colors { get; private set; }

        public Board(int[,] board)
        {
            this.board = board;

            this.Colors = new List<int>();

            for (int i = 0; i < this.board.GetLength(0); i++)
            {
                for (int j = 0; j < this.board.GetLength(1); j++)
                {
                    if (this.Colors.Contains(this.board[i, j]) == false)
                    {
                        this.Colors.Add(this.board[i, j]);
                    }
                }
            }
        }

        public void Move()
        {
            var bestBoard =
                this.Colors
                    .Where(x => x != this.board[0, 0])
                    .Select(color =>
                        {
                            var newBoard = CreateBoard(color);
                            var number = CountColor(newBoard);

                            return new Tuple<int[,], int>(newBoard, number);
                        })
                    .OrderByDescending(x=>x.Item2)
                    .First();

            this.board = bestBoard.Item1;
        }

        private int[,] CreateBoard(int color)
        {
            int[,] localBoard = (int[,])this.board.Clone();

            int startColor = localBoard[0, 0];

            ChangeNeighbors(localBoard, 0, 0, startColor, color);


            return localBoard;
        }

        private static void ChangeNeighbors(int[,] board, int i, int j, int startColor, int newColor)
        {
            if (i < 0 || i >= board.GetLength(0) ||
                j < 0 || j >= board.GetLength(1)) return;

            if (board[i, j] != startColor) return;

            board[i, j] = newColor;

            ChangeNeighbors(board, i - 1, j, startColor, newColor); //North
            ChangeNeighbors(board, i, j + 1, startColor, newColor); //East
            ChangeNeighbors(board, i + 1, j, startColor, newColor); //South
            ChangeNeighbors(board, i, j - 1, startColor, newColor); //West
        }

        private static int CountColor(int[,] board)
        {
            HashSet<Tuple<int,int>> visted = new HashSet<Tuple<int, int>>();
            
            return CountColor(board, 0, 0, visted);
        }

        private static int CountColor(int[,] board, int i, int j, HashSet<Tuple<int, int>> visted)
        {
            if (i < 0 || i >= board.GetLength(0) ||
                j < 0 || j >= board.GetLength(1)) return 0;

            if (board[i, j] != board[0, 0] ||
                visted.Contains(new Tuple<int, int>(i, j))) return 0;

            visted.Add(new Tuple<int, int>(i, j));

            return
                CountColor(board, i - 1, j, visted) //North
                + CountColor(board, i, j + 1, visted) //East
                + CountColor(board, i + 1, j, visted) //South
                + CountColor(board, i, j - 1, visted) //West
                + 1;
        }

        public int[,] GetBoard()
        {
            return (int[,])board.Clone();
        }
    }
}
