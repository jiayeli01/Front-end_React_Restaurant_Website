import './About.css';

function About({onNav}){

    return(
        <div className='about'>
            <h2>Let's see our classic cookies!</h2>
            <div className="cards">
                <div className="card">
                    <h3>Tiramisu</h3>
                    <img className="img" src="../tiramisu.png" alt="the picture of tiramisu"/>
                    <p className="paragraph">
                    Indulge in the rich, creamy deliciousness of our homemade tiramisu! Made with layers of fluffy mascarpone, 
                    sponge cake and espresso-soaked ladyfingers, and dusted with cocoa powder, 
                    this classic Italian dessert is the perfect ending to any meal or a sweet treat any time of day. Available now at our cookie shop!
                    </p>
                    <a onClick={onNav} data-target="Home" href="#">Go to Home</a>
                </div>
                <div className="card">
                    <h3>Cheese Cake</h3>
                    <img className="img" src="../cheesecake.png" alt="the picture of ragdoll breed" />
                    <p className="paragraph">
                    Satisfy your tooth with our cheesecake! Made with a buttery graham cracker crust, creamy cheesecake filling and topped with fresh fruit or homemade compote, this classic dessert is the perfect balance of sweet and tangy. Indulge in a slice or take a whole cake to share with your loved ones. 
                    </p>
                    <a onClick={onNav} data-target="Cats" href="#">Go to Cats</a>
                </div>
                <div className="card">
                    <h3>Pudding</h3>
                    <img className="img" src="../shorthairLuna.png" alt="the picture of british shorthair breed" />
                    <p className="paragraph">
                    Experience the ultimate comfort food with our homemade pudding! Made with rich and creamy ingredients, our pudding comes in a variety of flavors such as chocolate, vanilla, and butterscotch that will transport your taste buds to heaven. Perfect as a dessert or a midday snack, 
                    our pudding is sure to delight your palate. 
                    </p>
                    <a onClick={onNav} data-target="Cats" href="#">Go to Cats</a>
                </div>
            </div>
        </div>
    );
}

export default About;