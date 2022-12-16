import Carousel from "react-bootstrap/Carousel";

function Imagenes() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://noticiasnet2.cdn.net.ar/i1700/noticiasnet2/images/45/89/458929_3b54ba7d63b8ac7c1efe901825dd1fd7eb7dc89b44cdaf01b7128e9c939ac234/sm.webp"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://media.tycsports.com/files/2021/08/22/322558/quini-6_862x485_wmk.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i0.wp.com/www.datoposta.com/wp-content/uploads/2022/12/loteria.jpg?fit=640%2C360&ssl=1"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Imagenes;
