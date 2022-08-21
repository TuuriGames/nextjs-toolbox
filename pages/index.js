export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>tuurigames</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Next.js Toolbox" />
        <hr />
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}

var name = prompt("kirjoita nimesi ")
var greeting = "hauska tutustua " + name + "!"
var word = prompt("Kirjoita sana ")
document.write(greeting)
</script>

<button onclick="tonguetwist()">Sano tämä!</button>
<script>
 function tonguetwist()
 {
  document.write(word)
 }

