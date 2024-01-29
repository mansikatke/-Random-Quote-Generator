const quotes = [{
    quote: "You live once, but if you do it right, once is enough.",
    writer: `-Mae West`
},{
    quote: "We write to taste life twice, in the moment and in retrospect.",
    writer: `-Anaïs Nin`
},{
    quote: "Either write something worth reading or do something worth writing.",
    writer: `-Benjamin Franklin`
},{
    quote: "You never have to change anything you got up in the middle of the night to write.",
    writer: `-Saul Bellow`
},{
    quote: "Let me live, love, and say it well in good sentences.",
    writer: `-Sylvia Plath`
},{
    quote: "Always be a poet, even in prose.",
    writer: `-Charles Baudelaire`
},{
    quote: "To live is the rarest thing in the world. Most people exist, that is all.",
    writer: `- Oscar Wilde`
},{
    quote: "That it will never come again is what makes life so sweet.",
    writer: `-Emily Dickinson`
},{
    quote: "It is never too late to be what you might have been.",
    writer: `- George Eliot`
},{
    quote: "Pain is inevitable. Suffering is optional.",
    writer: `-Haruki Murakami`
},]

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;

})


