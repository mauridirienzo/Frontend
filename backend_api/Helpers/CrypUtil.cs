using System;

namespace backend_api.Helpers
{
    public static class CrypUtil
    {
        /// <summary>
        /// Text encode. From plain text to base 64.
        /// </summary>
        /// <param name="decodedText">Text to be encoded</param>
        /// <returns>Returns a encoded text</returns>
        public static string Base64Encode(string decodedText)
        {
            byte[] byteText;
            byteText = System.Text.Encoding.UTF8.GetBytes(decodedText);
            return Convert.ToBase64String(byteText);
        }

        /// <summary>
        /// Text Decode. From base64 to plain text.
        /// </summary>
        /// <param name="encodedText">Text to be dencoded</param>
        /// <returns>Returns a dencoded text</returns>
        public static string Base64Decode(string encodedText)
        {
            byte[] byteText;
            byteText = Convert.FromBase64String(encodedText);
            return System.Text.Encoding.UTF8.GetString(byteText);
        }
    }
}