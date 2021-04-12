import React from 'react';
import { faClock , faMapMarker , faPhone } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';
const infoData = [
    {
        title: 'Opening Hours',
        details: 'Lorem ipsum is simply dummy text',
        image: faClock,
        background: 'primary'

    },
    {
        title: 'Visit Our Location',
        details: 'Brooklyn , NY 10038 , USA ',
        image: faMapMarker,
        background: 'dark'

    },
    {
        title: 'Contact Us Now',
        details: +1234566789,
        image: faPhone,
        background: 'primary'

    }
]

const BusinessInfo = () => {
    return (
        <section className = "d-flex justify-content-center">
            <div className = "row w-75">
            {
                infoData.map(info =><InfoCard info = {info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;