import CoolShape from '../../images/orange_triangle_shape.svg';

export default function HomepageHero(props) {
  console.log(CoolShape);
  const backgroundImage = {
    backgroundImage: `url("${props.field_homepage_hero_background}")`
  }
  
  return (
    <section className="hero-section">
      <div className="homepage-hero-background" style={backgroundImage}></div>
      <CoolShape />
      <div className="container max-w-6xl mx-auto">        
        <div className="flex align-center items-center grid grid-cols-2 gap-4">						
          <div className="col-md-6">
            <div className="text-slate-50 wow fadeInRight">
              <h1>{props.field_hero_heading}</h1>
              <p className="p-xl">{props.field_hero_sub_text}</p>
              <a className="" href={props.field_hero_cta_button_primary_uri}>{props.field_hero_cta_button_primary_title}</a>                  
            </div>
          </div>
          <div className="col-md-6">	
            <div className="hero-1-img wow fadeInLeft">						
                <img src={props.field_foreground_image} alt={props.field_foreground_image_alt} width="600" height="600" />
            </div>
          </div>
        </div>
      </div>
      { props.edit_link && <a className="admin-link--edit--node" href={props.edit_link}>Edit</a> }
    </section>
  )
}
