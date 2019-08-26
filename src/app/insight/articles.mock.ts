import {Article} from './model/article';

export const mockArticles: Article[] = [
    {
        id: 'how-to-write-clean-code-that-reduces-headache',
        title: 'How To Write Clean Code That Reduces Headaches',
        subtitle: 'Abstraction is evil. Code is anti-evil, and clean code is perhaps divine',
        tags: ['programming', 'engineering', 'code'],
        source: 'https://towardsdatascience.com/how-to-write-clean-code-that-reduces-headaches-23ff6d933fdd',
        insights: [
            {
                title: `The first draft of anything is shit`,
                content: `The first draft of any article should not be published. It will be shoddy,
                incoherent for readers to understand and will be embarrassing for the author to be published.
                In the same vein, the first thoughts of any developer are hardly clear.
                The code will be probably a clutter of muddy ideas and syntax.`
            }, {
                title: `Importance of clean code`,
                content: `Clean code almost always pays for itself in a matter of months
                (depending on the size and scale of your business or solution).
                Code that expresses its purpose clearly without surprises is easier to understand and 
                less likely to contain bugs`
            }, {
                title: `What's in a name`,
                content: `Your name should reveal the intent. Choosing good names takes time but saves more than it 
                takes when the going gets tough. So take care of your names and change 
                them when you find better names. Everybody who reads your code will thank you immensely for it`
            }
        ]
    }, {
        id: 'SOLID-Principles-in-10-minutes',
        title: 'SOLID Principles in 10 minutes',
        subtitle: 'Understand SOLID Principles in less than a hour',
        tags: ['engineering', 'code'],
        source: 'https://medium.com/doku-insight/solid-principles-with-example-7bd77972787b'
    }, {
        id: 'Psychology-of-Code-Readability',
        title: 'Psychology of Code Readability',
        subtitle: 'helpful in understanding and finding better ways of writing code',
        tags: ['programming', 'engineering', 'code'],
        source: 'https://medium.com/@egonelbre/psychology-of-code-readability-d23b1ff1258a'
    }, {
        id: 'What-Is-Readable-Code',
        title: 'What Is Readable Code?',
        subtitle: 'Code creates interfaces. But code itself is also an interface',
        tags: ['programming', 'code'],
        source: 'https://medium.com/s/story/readability-as-usability-78c5a2a373cc'
    }, {
        id: 'Keep-it-Simple-with-the-Strategy-Design-Pattern',
        title: 'Keep it Simple with the Strategy Design Pattern',
        subtitle: 'how to structure your classes and their relationships are what matters',
        tags: ['programming', 'engineering', 'code', 'software'],
        source: 'https://blog.bitsrc.io/keep-it-simple-with-the-strategy-design-pattern-c36a14c985e9'
    }, {
        id: 'A-query-language-for-your-API',
        title: 'A query language for your API',
        subtitle: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data',
        tags: ['programming', 'engineering', 'code', 'software'],
        source: 'https://graphql.org'
    }
];
