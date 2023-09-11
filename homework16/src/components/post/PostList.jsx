import Post from "./Post";

const PostList = () => {
  const posts = [
    {
      id: 1,
      author: {
        name: "Anakin skywalker",
        photo: "https://hips.hearstapps.com/hmg-prod/images/is-anakin-skywalker-in-ahsoka-hayden-christensen-star-wars-news1-64e3866eab9c3.jpeg",
        nickname: "@dart_vader",
        isVerified: true
      },
      content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      image: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
      date: "26 лют."
    },
    {
      id: 2,
      author: {
        name: "R2-D2",
        photo: "https://www.cnet.com/a/img/resize/bfc6e095eac3e0901e2d255ce66031b13c44054e/hub/2013/11/20/43ff135f-67d7-11e3-a665-14feb5ca9861/alg-r2d2-jpg.jpg?auto=webp&fit=crop&height=675&width=1200",
        nickname: "@r2_d2",
        isVerified: false
      },
      content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      image: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
      date: "10 січ."
    },
  ];

  return (
    <>
      {posts.map((post) => (
        <Post 
            key={post.id}
            author={post.author} 
            nickname={post.author.nickname} 
            date={post.date} 
            content={post.content} 
            image={post.image} 
            isVerified={post.author.isVerified}
        />
      ))}
    </>
  )
}

export default PostList;