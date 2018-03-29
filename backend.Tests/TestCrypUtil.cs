using backend_api.Helpers;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace BackEnd.Tests
{
    [TestClass]
    public class TestCrypUtil
    {
        [TestMethod]
        public void encodeTest()
        {
            string expectedResult = "VGVzdFBhc3M=";
            string actualText = "TestPass";
            string actualResult = CrypUtil.Base64Encode(actualText);

            Assert.AreEqual<string>(expectedResult, actualResult);
        }

        [TestMethod]
        public void dencodeTest()
        {
            string expectedResult = "TestPass";
            string actualText = "VGVzdFBhc3M=";
            string actualResult = CrypUtil.Base64Decode(actualText);

            Assert.AreEqual<string>(expectedResult, actualResult);
        }
    }
}
