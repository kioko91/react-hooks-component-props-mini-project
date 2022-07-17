import React from "react";

import Article from "./Article"



function ArticleList({posts}){
    // console.log(posts)
    const postArray = posts.map(post => 
        <Article 
        key={post.id} 
        title={post.title} 
        preview={post.preview}
        minutes={post.minutes} 
        date={post.date}
        /> )

    return (
        <main>
            {postArray}
        </main>

    )
}

export default ArticleList;