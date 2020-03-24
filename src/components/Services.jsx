import React, { Fragment, useState } from 'react';
import { Title } from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";


export const Services = () => {
    const [service, setService] = useState([
        {
            icon: <FaCocktail />,
            title: "free cocktails",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, qui?",
        },
        {
            icon: <FaHiking />,
            title: "Endless Hiking",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, qui?",
        },
        {
            icon: <FaShuttleVan />,
            title: "free shuttle",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, qui?",
        },
        {
            icon: <FaBeer />,
            title: "Strongest Beer",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, qui?",
        },
    ]);

    return (
        <Fragment>
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {service.map(item => {
                        return (
                            <article className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        </Fragment>
    )
}
