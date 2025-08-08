// pages/index.js

import '../styles/globals.scss';
import Link from 'next/link';

export default function Home() {
  return (
      <div className="container">
            <h1>Michael Munro — Dev Blog</h1>
                  <p>Welcome to my corner of the web. Explore my work and thoughts:</p>
                        <ul>
                                <li><Link href="/resume">Resume</Link></li>
                                        <li><Link href="/portfolio">Portfolio</Link></li>
                                                <li><Link href="/articles">Articles</Link></li>
                                                      </ul>
                                                          </div>
                                                            );
                                                            }