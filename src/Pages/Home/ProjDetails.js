import { useParams } from 'react-router-dom';

const ProjDetails = () => {
    const { projectId } = useParams();
    const projects = [
        {
            "id": 1,
            "name": "Moto Parts",
            "type": "Menufacturer",
            "live": "https://moto-parts-c256e.web.app/",
            "cscode": "https://github.com/sohan284/Moto_Parts_manufacturer-client-site",
            "sscode": "https://github.com/sohan284/Moto_Parts_manufacturer-server-site",
            "description": "Some cultures have adopted the traditional Western custom of the white wedding, in which a bride wears a white wedding dress and veil. Our service is always best.This is wedding film service.I take this in our own hand .We also deliver as soon as possible.for this package you will get 10% discount from our perfect couple team.",
            "img": [
                "https://i.ibb.co/v4ShSrW/Screenshot-10.png",
                "https://i.ibb.co/rstWKps/Screenshot-11.png",
                "https://i.ibb.co/nmZgwsd/Screenshot-12.png",
                "https://i.ibb.co/K5SXqXK/Screenshot-14.png"
            ]
        },
        {
            "id": 2,
            "name": "Grocery Shop",
            "type": "E-commerce",
            "live": "https://grocery-shop-c9e00.web.app/",
            "cscode": "https://github.com/sohan284/Grocery_Shop_Client-site",
            "sscode": "https://github.com/sohan284/Grocery_Shop_Server-site",
            "description": "Some cultures have adopted the traditional Western custom of the white wedding, in which a bride wears a white wedding dress and veil. Our service is always best.This is wedding film service.I take this in our own hand .We also deliver as soon as possible.for this package you will get 10% discount from our perfect couple team.",
            "img": [
                "https://i.ibb.co/TggvB3N/Screenshot-21.png",
                "https://i.ibb.co/4mMZqWM/Screenshot-22.png",
                "https://i.ibb.co/sKPT2jg/Screenshot-23.png",
                "https://i.ibb.co/YQ6vhKd/Screenshot-24.png"
            ]
        },
        {
            "id": 3,
            "name": "Perfect Couple",
            "type": "Photography",
            "live": "https://perfect-couple-90811.web.app/",
            "cscode": "https://github.com/sohan284/Perfect-Couple-firebase",
            "sscode": "https://github.com/sohan284/Grocery_Shop_Server-site",
            "description": "Some cultures have adopted the traditional Western custom of the white wedding, in which a bride wears a white wedding dress and veil. Our service is always best.This is wedding film service.I take this in our own hand .We also deliver as soon as possible.for this package you will get 10% discount from our perfect couple team.",
            "img": [
                "https://i.ibb.co/bLDqXQg/Screenshot-26.png",
                "https://i.ibb.co/D4b38WG/Screenshot-27.png",
                "https://i.ibb.co/zx51LZq/Screenshot-28.png",
                "https://i.ibb.co/NNywNQq/Screenshot-29.png"
            ]
        }
    ]

    return (
        <div>
            <div class="h-96 carousel carousel-vertical rounded-box">
                <div class="carousel-item h-full">
                    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=8B7BCDC2" />
                </div>
                <div class="carousel-item h-full">
                    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=500B67FB" />
                </div>
                <div class="carousel-item h-full">
                    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=A89D0DE6" />
                </div>
                <div class="carousel-item h-full">
                    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=225E6693" />
                </div>
                <div class="carousel-item h-full">
                    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=9D9539E7" />
                </div>
                <div class="carousel-item h-full">
                    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=BDC01094" />
                </div>
                <div class="carousel-item h-full">
                    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=7F5AE56A" />
                </div>
            </div>
        </div>
    );
};

export default ProjDetails;