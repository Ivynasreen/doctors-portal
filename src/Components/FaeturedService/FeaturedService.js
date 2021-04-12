import React from 'react';
import featured from '../../images/Mask Group 3.png';


const FeaturedService = () => {
    return (
        <div>
            <section className = "my-5">
                <div className = "container">
                    <div className="row mb-5">
                        <div className="col-md-5">
                            <img className = "img-fluid" src={featured} alt=""/>
                        </div>
                        <div className="col-md-7 align-self-center">
                            <h3>Exceptional Dental <br />Care, On Your Terms</h3>
                            <p className = "text-secondary my-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellendus distinctio amet quidem aliquid, maiores enim qui cumque quaerat natus dolore deleniti maxime, officiis numquam sunt quis ea ipsam facere?
                            Facilis reprehenderit saepe facere accusantium maxime exercitationem labore, necessitatibus beatae iure, doloribus, recusandae inventore nisi minus optio! Perspiciatis nobis in repellendus quia facilis laboriosam reiciendis id, alias fugiat, voluptatem eos!
                            Consequuntur nobis totam officiis in aspernatur nesciunt minus vitae placeat porro. Alias ab nobis dolores. Iste nostrum rerum fugit doloribus laboriosam deserunt. Iure veritatis laboriosam ducimus expedita nobis, unde quibusdam.
                            </p>
                            <button className = "btn btn-info text-white">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturedService;