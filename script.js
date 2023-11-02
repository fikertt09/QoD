const quotes =[{
    quote: '"ጊዜ ወርቅ ነው"',
    writer: '-Unknown'

}, {
    quote: '"If you want to live a happy life, tie it to a goal, not to people or things"',
    writer: '-Albert Einestin'


}, {
    quote: '"Never let the fear of the striking out keep you from playing the game"',
    writer: '-Babe Ruth'

}, {
    quote: '"Your time is limited, so dont waste it living someone else life "',
    writer: '-Steve Jobs'

}, {
    quote: '"In order to write about life first you must live it"',
    writer: '-Ernest Hemingway'

}, {
    quote: '"Life is not a problem to be solved, but a reality to be experienced"',
    writer: '-Soren Kierkegaard'

}, {
    quote: '"The unexamined life is not worth living"',
    writer: '-Socrates'

}]
let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");


btn.addEventListener("click", function(){
    let random = Math.floor(Math.random()* quotes.length);

    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
})
