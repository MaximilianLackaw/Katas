using NUnit.Framework;

using FluentAssertions;
using System.Collections;

namespace FillingGame.Tests
{
    [TestFixture]
    public class BoardTests
    {
        [Test]
        public void WhenBoardWithTwoColorsIsInitializedColorsShouldContainTwoDiffrentColors()
        {
            int[,] boardArray = new int[2,2] { { 1, 2 }, { 2, 2 } };

            var board = new Board(boardArray);

            board.Colors.Should().Contain(1);
            board.Colors.Should().Contain(2);
            board.Colors.Count.Should().Be(2);
        }

        [Test]
        public void WhenBoardHasTwoTilesAfterMoveBothTilesShouldHaveTheSameColor()
        {
            int[,] boardArray = new int[1, 2] { { 1, 2 } };

            var board = new Board(boardArray);

            board.Move();

            board.GetBoard().Should().BeEquivalentTo(new int[1, 2] { { 2, 2 } });
        }

        [Test]
        [TestCaseSource(typeof(TestBoards))]
        public void MoveTest(int [,] givenBoard, int[,] expectedBoard)
        {
            var board = new Board(givenBoard);

            board.Move();

            board.GetBoard().Should().BeEquivalentTo(expectedBoard);
        }


        class TestBoards : IEnumerable
        {
            public IEnumerator GetEnumerator()
            {
                yield return new object[] {
                    new int[1, 2] { { 1, 2 } },
                    new int[1, 2] { { 2, 2 } }
                };

                yield return new object[] {
                    new int[2, 2] { { 1, 2 }, { 1, 1 } },
                    new int[2, 2] { { 2, 2 }, { 2, 2 } }
                };

                yield return new object[] {
                    new int[2, 2] { { 1, 3 }, { 2, 2 } },
                    new int[2, 2] { { 2, 3 }, { 2, 2 } }
                };

                yield return new object[] {
                    new int[3, 3] { { 1, 2, 3 }, { 1, 4, 2 }, { 1, 1, 2 } },
                    new int[3, 3] { { 2, 2, 3 }, { 2, 4, 2 }, { 2, 2, 2 } }
                };
            }
        }
    }
}
