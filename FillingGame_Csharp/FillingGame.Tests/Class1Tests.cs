using NUnit.Framework;

using FluentAssertions;

namespace FillingGame.Tests
{
    [TestFixture]
    public class Class1Tests
    {
        [Test]
        public void FirstTest()
        {
            var c = new Class1();

            var result = c.Add(5, 2);

            Assert.AreEqual(result, 7);
        }
    }
}
