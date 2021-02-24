import './App.css';
//Components 
import Header from './components/Header'
import Person from './components/Person'
import Card from './components/Card'
// third party libraries.
import { nanoid as getNanoId } from 'nanoid'

function App() {
  const name = 'Esteban'
  const age = '29'
  const login = true
  const numbers = [1, 2, 3, 4, 5]
  const familyMembers = ['Siman', 'Moshi-oshi', 'Sarita', 'Deivi']
  const cards = [
    {
      id: getNanoId(),
      title: "Card 1",
      img: '/assets/wolf.jpg',
      author: 'Dorian',
      date: new Date().toLocaleDateString(),
      tags: ['animal', 'wolf', 'snow'],
      views: 23,
      description: "A beautiful wolf in snow. Lorem ipsum dolor sit amet consectetur adipiscing elit integer, dictumst nibh sociosqu torquent tempor blandit neque habitasse, sodales mi nisl praesent rhoncus urna pharetra. Leo integer sem volutpat feugiat fusce luctus, arcu laoreet urna mauris cum mus platea, pulvinar magna mattis auctor penatibus. Laoreet cubilia duis luctus vivamus nunc pulvinar ligula porta vehicula hendrerit convallis eleifend sed, auctor proin dignissim integer vel tristique rutrum rhoncus purus ultricies curabitur."
    },
    {
      id: getNanoId(),
      title: "Card 2",
      img: '/assets/wolf.jpg',
      author: 'Dorian',
      date: new Date().toLocaleDateString(),
      tags: ['animal', 'wolf', 'snow'],
      views: 23,
      description: "A beautiful wolf in snow. Lorem ipsum dolor sit amet consectetur adipiscing elit integer, dictumst nibh sociosqu torquent tempor blandit neque habitasse, sodales mi nisl praesent rhoncus urna pharetra. Leo integer sem volutpat feugiat fusce luctus, arcu laoreet urna mauris cum mus platea, pulvinar magna mattis auctor penatibus. Laoreet cubilia duis luctus vivamus nunc pulvinar ligula porta vehicula hendrerit convallis eleifend sed, auctor proin dignissim integer vel tristique rutrum rhoncus purus ultricies curabitur."
    },
    {
      id: getNanoId(),
      title: "Card 3",
      img: '/assets/wolf.jpg',
      author: 'Dorian',
      date: new Date().toLocaleDateString(),
      tags: ['animal', 'wolf', 'snow'],
      views: 23,
      description: "A beautiful wolf in snow. Lorem ipsum dolor sit amet consectetur adipiscing elit integer, dictumst nibh sociosqu torquent tempor blandit neque habitasse, sodales mi nisl praesent rhoncus urna pharetra. Leo integer sem volutpat feugiat fusce luctus, arcu laoreet urna mauris cum mus platea, pulvinar magna mattis auctor penatibus. Laoreet cubilia duis luctus vivamus nunc pulvinar ligula porta vehicula hendrerit convallis eleifend sed, auctor proin dignissim integer vel tristique rutrum rhoncus purus ultricies curabitur."
    }
  ]

  return (login) &&
    (
      <>
        <Header />
        <h1>My name is {name} and I'm {age} old.</h1>
        <h3>{numbers.join(',')}</h3>
        <ul>
          {
            familyMembers.map(member => {
              return (
                <li key={getNanoId()}>{member}</li>
              )
            })
          }
        </ul>
        <hr />
        { /* Reusable component */}
        <Person
          id={1}
          name="Alfredo"
          age={29}
          birthday={new Date(1991, 2, 26)}
          hobbies={['fut', 'dibujar', 'ver películas']}
          flag
        >
          This is the children.
        </Person>
        <Person
          id={2}
          name="Esteban"
          age={30}
          birthday={new Date(1991, 2, 26)}
          hobbies={['cocinar', 'platicar', 'jugar']}
          flag={null}
        >
          This is the children.
        </Person>
        <hr />
        { /* Reusable component */}
        <div className="cards">
          {
            cards.map(card => (
              <Card
                author={card.author}
                date={card.date}
                img={card.img}
                key={card.id}
                tags={card.tags}
                title={card.title}
                views={card.views}
              >
                {card.description}
              </Card>
            ))
          }
        </div>
      </>

    )
}

export default App;
