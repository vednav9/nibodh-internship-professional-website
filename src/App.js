import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Models from './Models';
import Services from './Services';
import About from "./About";
import Contact from "./Contact";
import Seriestwo from "./modelall/Seriestwo";
import Seriesthree from "./modelall/Seriesthree";
import Seriesfive from "./modelall/Seriesfive";
import Seriessix from "./modelall/Seriessix";
import Seriesseven from "./modelall/Seriesseven";
import Seriesx from "./modelall/Seriesx";
import Seriesm from "./modelall/Seriesm";
import Seriesi from "./modelall/Seriesi";
import Seriesz from "./modelall/Seriesz";
import Stwoone from "./bmwcars/Stwoone";
import Sthreeone from "./bmwcars/Sthreeone";
import Sthreetwo from "./bmwcars/Sthreetwo";
import Sthreethree from "./bmwcars/Sthreethree";
import Sfiveone from "./bmwcars/Sfiveone";
import Ssixone from "./bmwcars/Ssixone";
import Ssevenone from "./bmwcars/Ssevenone";
import Szone from "./bmwcars/Szone";
import SIone from "./bmwcars/SIone";
import SItwo from "./bmwcars/SItwo";
import Sxone from "./bmwcars/Sxone";
import Sxtwo from "./bmwcars/Sxtwo";
import Sxthree from "./bmwcars/Sxthree";
import Sxfour from "./bmwcars/Sxfour";
import Sxfive from "./bmwcars/Sxfive";
import Sxsix from "./bmwcars/Sxsix";
import Warranty from "./Warranty";
import ServiceandRepair from "./ServiceandRepair";
import Smtwo from "./bmwcars/Smtwo";
import Smthree from "./bmwcars/Smthree";
import Smfour from "./bmwcars/Smfour";
import Smfive from "./bmwcars/Smfive";
import Smsix from "./bmwcars/Smsix";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="models" element={<Models />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="seriestwo" element={<Seriestwo />} />
            <Route path="seriesthree" element={<Seriesthree />} />
            <Route path="seriesfive" element={<Seriesfive />} />
            <Route path="seriessix" element={<Seriessix />} />
            <Route path="seriesseven" element={<Seriesseven />} />
            <Route path="seriesx" element={<Seriesx />} />
            <Route path="seriesm" element={<Seriesm />} />
            <Route path="seriesi" element={<Seriesi />} />
            <Route path="seriesz" element={<Seriesz />} />
            <Route path="Stwoone" element={<Stwoone />} />
            <Route path="Sthreeone" element={<Sthreeone />} />
            <Route path="Sthreetwo" element={<Sthreetwo />} />
            <Route path="Sthreethree" element={<Sthreethree />} />
            <Route path="Sfiveone" element={<Sfiveone />} />
            <Route path="Ssixone" element={<Ssixone />} />
            <Route path="Ssevenone" element={<Ssevenone />} />
            <Route path="Szone" element={<Szone />} />
            <Route path="SIone" element={<SIone />} />
            <Route path="SItwo" element={<SItwo />} />
            <Route path="Sxone" element={<Sxone />} />
            <Route path="Sxtwo" element={<Sxtwo />} />
            <Route path="Sxthree" element={<Sxthree />} />
            <Route path="Sxfour" element={<Sxfour />} />
            <Route path="Sxfive" element={<Sxfive />} />
            <Route path="Sxsix" element={<Sxsix />} />
            <Route path="Warranty" element={<Warranty />} />
            <Route path="ServiceandRepair" element={<ServiceandRepair />} />
            <Route path="Smtwo" element={<Smtwo />} />
            <Route path="Smthree" element={<Smthree />} />
            <Route path="Smfour" element={<Smfour />} />
            <Route path="Smfive" element={<Smfive />} />
            <Route path="Smsix" element={<Smsix />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
