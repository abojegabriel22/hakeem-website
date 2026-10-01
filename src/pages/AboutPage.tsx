export function AboutPage() {
  return (
    <>
      <section className="page-hero"><div className="container">
        <span className="eyebrow">About Hakeem</span>
        <h1 className="display-title">A life in <em>performance.</em></h1>
        <p className="lead">British-Nigerian actor, producer and director working across international film, television, theatre and voice.</p>
      </div></section>
      <section className="container content-section about-layout">
        <div className="portrait-frame"><img src="/images/hakeem-about.png" alt="Hakeem Kae-Kazim portrait" /></div>
        <div className="about-copy">
          <span className="eyebrow">Biography</span>
          <h2>International perspective. A singular presence.</h2>
          <p>Hakeem Kae-Kazim is a British-Nigerian actor, producer and director. His career spans Hollywood and British television, African cinema, theatre, and voice work, bringing a wide-ranging international perspective to each medium.</p>
          <p>His screen credits include <em>Hotel Rwanda</em>, <em>24</em>, <em>Black Sails</em>, <em>Troy: Fall of a City</em>, <em>Pirates of the Caribbean</em>, <em>X-Men Origins: Wolverine</em>, <em>Godzilla vs. Kong</em> and <em>Aníkúlápó</em>.</p>
          <p>Trained at Bristol Old Vic Theatre School, he has also performed with the Royal Shakespeare Company and the National Theatre. Alongside acting, he continues to develop work as a producer and director.</p>
          <div className="detail-list">
            <div className="detail-item"><strong>Training</strong><span>Bristol Old Vic Theatre School</span></div>
            <div className="detail-item"><strong>Theatre</strong><span>Royal Shakespeare Company · National Theatre</span></div>
            <div className="detail-item"><strong>Languages</strong><span>English · French</span></div>
            <div className="detail-item"><strong>Practice</strong><span>Film · Television · Theatre · Voice · Producing · Directing</span></div>
          </div>
        </div>
      </section>
    </>
  )
}