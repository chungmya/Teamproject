import Header from "@/components/Header/Header";
import Nav from "@/components/Header/nav";
import Article from "@/components/Contents/Article";



export default function Home() {

  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'scss', body:'scss is ...'},
    {id:3, title:'reat', body:'reat is ...'},
  ]

  return (
    <div>
      <Header title="Chungmya" onChangeMode={() =>{
        console.log("clicked");
      }} />
      <Nav topics={topics}/>
      <Article />
    </div>
  );
}
