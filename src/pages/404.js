import * as React from "react";
import { Helmet } from "react-helmet";
// import { Link } from "gatsby"

// markup
const NotFoundPage = () => {
  return (
    <div>
      <Helmet title="404" />
      <main className="container mx-auto text-center text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-xl">Your page you're looking for isn't available.</p>
      </main>
    </div>
  );
};

export default NotFoundPage;
