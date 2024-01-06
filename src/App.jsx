import './App.css'
import Button from './components/Button.jsx';
import Product from './components/Product.jsx';
import Tile from './components/Tile.jsx';
import Bag1 from './assets/bag_1.png'
import Bag2 from './assets/bag_2.png'
import Bag3 from './assets/bag_3.png'
import Bag4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import our_story from './assets/our_story.png'

function App() {
  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav>
        <Button type='button' buttonText='to the collection' onClick={() => console.log (`to the collection`)}/>
        <Button type='button' buttonText='shop all bags' onClick={() => console.log (`shop all bags`)}/>
        <Button disabled= {true} type='button' buttonText='pre-orders' onClick={() => console.log (`pre-orders`)}/>
      </nav>

      <main>
        {/*<article>*/}
        {/*  <span>Best Seller</span>*/}
        {/*  <img src={Bag1} alt='bag image'/>*/}
        {/*  <p>The handy bag</p>*/}
        {/*  <h4>400,-</h4>*/}
        {/*</article>*/}

          <Product label='Best Seller' image={Bag1} title='The handy bag' price={400}/>
          <Product label='Best Seller' image={Bag2} title='The stylish bag' price={250}/>
          <Product label='New collection' image={Bag3} title='The simple bag' price={300}/>
          <Product label='New collection' image={Bag4} title='The trandy bag' price={150}/>
      </main>

      <footer>
        <section>
          <Tile title='The Brand'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga
              pariatur
              praesentium quia sequi similique sunt.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga
              pariatur
              praesentium quia sequi similique sunt.</p>
          </Tile>
        </section>
        <section>
          <Tile image={brand} imageDescription="The brand logo"/>
        </section>


        <Tile image={our_story} imageDescription="The designers"/>

            <Tile title='Our Story'>

            <section>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eligendi exercitationem illo,
                labore
                laboriosam nihil omnis praesentium. Aspernatur cum deleniti excepturi itaque, laboriosam nisi rerum
                sunt.
                At repellendus tenetur veniam!</p>
            </section>

            </Tile>

      </footer>
    </>
  )
}

export default App
// eind git
