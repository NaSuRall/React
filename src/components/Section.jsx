import Card from "./Card.jsx";

export default function Section({titleButton,Title, SubTitle, cards = []}) {

    return <div>
        <section>
            <div className="titre">
                <button>{titleButton}</button>
                <h1>{Title}</h1>
                <p>{SubTitle}</p>
            </div>

            {cards.length > 0 && (
                <div className="cards-container">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            description={card.description}
                            backgroundColor={card.backgroundColor}
                            icon={card.icon}
                        />
                    ))}
                </div>
            )}

        </section>
    </div>

}