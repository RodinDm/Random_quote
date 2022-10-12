const quotes = [
    {
        quote: 'Чем старше человек, тем больше ему лет.',
        source: 'Виталий Кличко',
    },
    {
        quote: 'Я многим обязан своим родителям, особенно матери и отцу.',
        source: 'Грег Норман',
    },
    {
        quote: 'Уверен, что гомосексуальный брак должен быть только между мужчиной и женщиной.',
        source: 'Арнольд Шварценеггер',
    },
    {
        quote: 'Так где проходит в этом году Каннский фестиваль?',
        source: 'Кристина Агилера',
    },
    {
        quote: 'Я никогда не хотела в Японию. Просто потому, что мне не нравится рыба. А знаю, она очень популярна, там, в Африке.',
        source: 'Бритни Спирс',
    },
    {
        quote: 'Кондолиза Райс — такая же простая техасская девушка, как и я.',
        source: 'Джорж Буш младший',
    },
];

function newQuote() {
   let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
   document.querySelector('.phrase').innerHTML = '"' + randomQuote.quote + '"';
   document.querySelector('.author').innerHTML = randomQuote.source;
};

newQuote()