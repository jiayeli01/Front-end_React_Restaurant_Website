import './Cats.css';
import Form from './Form';

function Cats(){

    return(
        <div className='page-cats'>
            <h2>Let's see our cats!</h2>
            <div className="panels">
                <div className="panel" >
                    <img className="cats-img" src="../birman.png" alt="the cat named Chole" />
                    <p>
                    Chole has long, silky fur and striking blue eyes. It has a medium-to-large build and a distinctive, "lion-like" appearance, with long, fluffy tails and tufted paws.
                    Chole are known for her calm and gentle disposition, and is often considered to be ideal companions for families with children. It is also intelligent and easily trained, and highly social and affectionate with human companions.
                    </p>
                </div>
                <div className="panel" >
                    <img className="cats-img" src="../birmanCandy.png" alt="the cat named Candy" />
                    <p>
                    Candy is known for its luxurious coats and striking blue eyes.
                    she is known for her long, flowing coats, which are typically a rich, golden color and have a soft and silky texture. She also has distinctive white "gloves" on their paws, and long, 
                    fluffy tails. Candy is known to be friendly and affectionate, She is are also intelligent and easy to train, and very social and playful.
                    </p>
                </div>
                <div className="panel" >
                    <img className="cats-img" src="../coco.png" alt="the cat named Coco" />
                    <p>
                    Coco is also known for distinctive blue eyes and tendency to go limp and relaxed when picked up, hence the breed's name. 
                    It is friendly and affectionate, and make great companion animal for families with children. It is also intelligent, easily trained, social and playful.
                    </p>
                </div>
                <div className="panel" >
                    <img className="cats-img" src="../mochi.png" alt="the cat named Mochi" />
                    <p>
                        Mochi is also known for distinctive blue eyes and tendency to go limp and relaxed when picked up, hence the breed's name. 
                        It is friendly and affectionate, and make great companion animal for families with children. It is also intelligent, easily trained, social and playful.
                    </p>
                </div>
                <div className="panel" >
                    <img className="cats-img" src="../shorthairLuna.png" alt="the cat named Luna" />
                    <p>
                    Luna has short, thick fur and stocky build. It is a relatively old breed, having originated in the United Kingdom, and is known for her calm and dignified demeanor. 
                    It has a dense, plush coat that requires regular grooming. 
                    Luna is friendly and affectionate, and is known to be patient and good-natured with children.
                    </p>
                </div>
                <div className="panel" >
                    <img className="cats-img" src="../shorthairOreo.png" alt="the cat named Oreo" />
                    <p>
                    Oreo has short, thick fur and stocky build. It is a relatively old breed, having originated in the United Kingdom, and is known for her calm and dignified demeanor. 
                    It has a dense, plush coat that requires regular grooming. 
                    Luna is friendly and affectionate, and is known to be patient and good-natured with children.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Cats;