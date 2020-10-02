import React from "react";
import BlogTitle from "./BlogTitle";
import {mainBlogTitle} from '../constant/Fa-IR'

const Main = () => {
    return(
        <div className="container-fluid">
            <div className="row flex-xl-nowrap">
                <nav className="d-none d-xl-block col-xl-2 bd-toc border-left" aria-label="Secondary navigation">
                    <ul className="section-nav mt-4">
                        {Object.values(mainBlogTitle).map((courseTitle: string) =>
                            <li className="toc-entry toc-h2"><a href="#how-it-works">{courseTitle}</a></li>)
                        }
                    </ul>
                </nav>


                <main className="col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
                    <BlogTitle/>
                    <BlogTitle/>
                    <BlogTitle/>
                    <BlogTitle/>
                    <BlogTitle/>
                    <BlogTitle/>
                    <BlogTitle/>
                    <BlogTitle/>
                    <BlogTitle/>
                    <BlogTitle/>
                </main>
            </div>
        </div>
    )
}

export default Main;