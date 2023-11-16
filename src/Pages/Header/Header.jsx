import bg from "../../assets/bg.jpg"
import { AiOutlineShopping } from "react-icons/ai";

const Header = () => {
    const commonBackgroundStyle = {
        backgroundImage: `url(${bg})`,
        // Add any other common styling properties here
    };

    return (
        <div style={commonBackgroundStyle} className="grid grid-cols-1 md:grid-cols-2">
            <div>
                <div className="divider divider-end"></div>
                <h2 className="text-white font-bold text-7xl">
                    Great Product <br />
                    <span className="text-green-500 text-5xl md:text-7xl font-bold">Presentations</span></h2>
                <p className="py-2 text-xl text-slate-300">How old is the first toy?
                    4,000 years old
                    The origin of the word toy is unknown, but it is believed that it was first used in the 14th century. Toys are mainly made for children. The oldest known doll toy is thought to be 4,000 years old.</p>

                <div className="flex w-full text-white gap-3 py-5">
                    <AiOutlineShopping className="text-8xl w-50 me-3 text-white" />
                    <div>
                        <h2 className="text-2xl font-bold ">SINGLE PRODUCT SHOWCASES
                        </h2>   <p> The earliest toys were made from rocks, sticks or clay. In Ancient Egypt, children played with dolls made of clay and sticks.</p>
                    </div>

                </div>
            </div>
            <div>

            </div>

        </div>
    );
};

export default Header;