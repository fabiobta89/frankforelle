import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import pca_logo from '@/images/pca.png';
import pca_yellow_logo from '@/images/yellowstone-pca.png';
import frank from '@/images/frank-x-1-150x150.jpg';
import { TbAlertTriangleFilled } from "react-icons/tb";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {

  const [tab, setTab] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prev => !prev); // toggle visibility
    }, 1000); // every 2 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <>
      <main
          className={`${inter.className}`}
      >
        <header className={`bg-black`}>
          <div className={`max-w-2xl mx-auto p-6 lg:px-6 lg:max-w-7xl`}>
            <div className={`flex justify-between w-full items-center my-8`}>
              <Image
                  src={frank} alt={`Frank Forelle`}
                  className={`rounded-full`}
                  height={`150`}
                  width={`150`}
              />
            </div>
          </div>
        </header>
        <div className={`border-b-4 border-gray-800 fade-box ${isVisible ? 'fade-in' : 'fade-out'}`}>
          <div className={`max-w-2xl mx-auto p-6 lg:px-6 lg:max-w-7xl`}>
            <div className={`flex w-full items-center`}>
              <div className={`flex items-center`}>
                <TbAlertTriangleFilled className={`text-3xl`}/>
                <span className={`block w-[2px] h-12 bg-red-600 mx-4`}></span>
              </div>
              <h2 className={`text-xl font-bold flex items-center`}>
                WARNING: Do Not Trust Frank Forelle and Avoid at all Costs
              </h2>
            </div>
          </div>
        </div>
        <div className={`max-w-2xl mx-auto p-6 lg:px-6 lg:max-w-7xl`}>
          {/*<div className={`flex items-center mb-8`}>*/}
          {/*  <Image*/}
          {/*      src={pca_logo} alt={`PCA Logo`}*/}
          {/*      height={`75`}*/}
          {/*      width={`75`}*/}
          {/*  />*/}
          {/*  <Image*/}
          {/*      src={pca_yellow_logo} alt={`PCA Yellow Logo`}*/}
          {/*      height={`75`}*/}
          {/*      width={`75`}*/}
          {/*  />*/}
          {/*</div>*/}
          <p className={`mb-8`}>If you’re looking for a model of dishonesty, Frank Forelle of Wyoming sets a new standard for deceit and unreliability. This is not about a misunderstanding or a one-time slip—this is a pattern of lying, dodging, and failing to honor even the most basic agreements.</p>
          <h3 className={`text-xl font-bold mb-8`}>The Frank Forelle Fiasco</h3>
          <p className={`mb-8`}>Frank Forelle’s actions have exposed his true nature as a liar who cannot be trusted under any circumstance:</p>
          <ul className={`pl-4 mb-8`}>
            <li className={`list-disc mb-8`}><span className={`font-bold`}>Habitual liar:</span> Frank agreed to sell his vehicle on Bring a Trailer, only to shamelessly back out of the deal with no explanation, apology, or attempt to set things right.</li>
            <li className={`list-disc mb-8`}><span className={`font-bold`}>False promises:</span> He gives his word and then treats it as worthless, misleading others and ignoring every commitment he’s made.</li>
            <li className={`list-disc mb-8`}><span className={`font-bold`}>Complete disrespect:</span> When confronted, Frank vanished—refusing to respond and showing that accountability and honesty mean absolutely nothing to him.</li>
            <li className={`list-disc mb-8`}><span className={`font-bold`}>Serial deceiver:</span> His pattern is clear: say anything to get what he wants, then disappear when it’s time to deliver.</li>
            <li className={`list-disc`}><span className={`font-bold`}>Irredeemable reputation:</span> There is no excuse or justification for Frank’s ongoing dishonesty; he’s simply demonstrated, again and again, that he cannot be believed.</li>
          </ul>
          <p className={`mb-8`}>Anyone thinking of dealing with Frank Forelle should expect empty promises, wasted time, and a complete lack of integrity. <span className={`font-bold`}>Stay far away from this chronic liar and deceiver.</span></p>
          <h3 className={`text-xl font-bold mb-8`}>The Porsche Club of America, Yellowstone Region: A Culture of Cowardice</h3>
          <p className={`mb-8`}>But the rot doesn’t stop at Frank. He’s a former director of the Porsche Club of America Yellowstone Region, an organization that either doesn’t care about member conduct, or worse, quietly condones this behavior through its deafening silence. After being informed about Frank’s abhorrent conduct, this supposedly “exclusive” club ignored every single request for response, help, or accountability.</p>
          <h3 className={`text-xl font-bold mb-8`}>PCA Yellowstone: Where Leadership Means Looking the Other Way</h3>
          <p className={`mb-8`}>Here’s the entire gallery of <span className={`italic`}>ostriches with their heads in the sand:</span></p>
          <div className={`max-w-full overflow-x-auto`}>
            <table className="border-collapse border border-gray-400 w-full mb-8">
              <thead>
              <tr>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Role</th>
                <th className="border border-gray-300 p-2">Contact</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td className="border border-gray-300 p-2 p-2">Frank Forelle</td>
                <td className="border border-gray-300 p-2 p-2">Director</td>
                <td className="border border-gray-300 p-2 p-2">frankforelle@yahoo.com</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 p-2">Mark Kaczor</td>
                <td className="border border-gray-300 p-2 p-2">President</td>
                <td className="border border-gray-300 p-2 p-2">markkaze@gmail.com</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 p-2">Greg Wallace</td>
                <td className="border border-gray-300 p-2 p-2">Vice President, Newsletter</td>
                <td className="border border-gray-300 p-2 p-2">gwallace@bropart.com</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Cody Mulligan</td>
                <td className="border border-gray-300 p-2">Treasurer</td>
                <td className="border border-gray-300 p-2">codymulligan@gmail.com</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Bobbie Reppa</td>
                <td className="border border-gray-300 p-2">Secretary</td>
                <td className="border border-gray-300 p-2">ddreppa@cs.com</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Eric Weber</td>
                <td className="border border-gray-300 p-2">Director</td>
                <td className="border border-gray-300 p-2">powderstash@bresnan.net</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Dwight Reppa</td>
                <td className="border border-gray-300 p-2">Director</td>
                <td className="border border-gray-300 p-2">ddreppa@cs.com</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Ked Nilson</td>
                <td className="border border-gray-300 p-2">Webmeister</td>
                <td className="border border-gray-300 p-2">ked@kwazadilla.com</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Paula Szypko</td>
                <td className="border border-gray-300 p-2">Newsletter Co-Editor</td>
                <td className="border border-gray-300 p-2">peszypko@gmail.com</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Marty Quadland</td>
                <td className="border border-gray-300 p-2">Newsletter Co-Editor</td>
                <td className="border border-gray-300 p-2">docquad@aol.com</td>
              </tr>
              </tbody>
            </table>
          </div>
          <p className={`mb-8`}><span className={`font-bold`}>Every one of them chose silence. Not a peep.</span> No explanation, no action—just pure indifference. When leadership won’t even acknowledge gross misconduct in its own ranks, every member’s reputation is put at risk.</p>
          <h3 className={`text-xl font-bold mb-8`}>The Takeaway</h3>
          <ul className={`pl-4 mb-8`}>
            <li className={`list-disc mb-8`}><span className={`font-bold`}>Frank Forelle:</span> Shifty, unreliable, and unapologetically dishonest—avoid like the plague.</li>
            <li className={`list-disc mb-8`}><span className={`font-bold`}>PCA Yellowstone Leadership:</span> A collective wall of silence and complicity. Don’t expect them to stand up for fairness or hold anyone accountable.</li>
          </ul>
          <p className={`mb-8`}>If you value your money, your sanity, or your sense of fairness, <span className={`font-bold`}>stay far away from both Frank Forelle and anyone doing business under the PCA Yellowstone Region.</span> Make no mistake: associating with them is inviting dishonesty, disrespect, and—if you trust them—regret. Let their actions (or lack thereof) serve as a warning: there are people and organizations out there who simply do not care about doing the right thing.</p>
        </div>
        <footer className={`bg-black`}>
          <div className={`max-w-2xl mx-auto p-6 lg:px-6 lg:max-w-7xl`}>
            <p className={`text-center text-white font-bold`}>2025</p>
          </div>
        </footer>
      </main>

    </>
  );
}
