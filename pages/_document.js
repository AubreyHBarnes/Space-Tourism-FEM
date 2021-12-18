import Document, { Html, Head, Main, NextScript } from "next/document";
  class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps };
    }
    render() {
      return (
        <Html lang="EN">
          <Head />
          <body className="bg-test bg-no-repeat bg-cover">
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  export default MyDocument;
