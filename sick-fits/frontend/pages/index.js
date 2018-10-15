import Link from 'next/link';

import React, { Component } from 'react';

const Home = props => (
    <div>
        <p>Home Page</p>
        <Link href="/sell">
            <a>Sell</a>
        </Link>
    </div>
);


export default Home;