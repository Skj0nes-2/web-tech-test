import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { FadeIn, SlideInBottom } from "~/components/animate";

export default function Games(){
    return(
        <FadeIn>
            <Header />
            <h1 className="font-header text-center text-5xl">Games</h1>
            <SlideInBottom>
                    <></>
            </SlideInBottom>
            <Footer />
         </FadeIn>
    );
};