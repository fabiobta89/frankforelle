import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import pca_logo from '@/images/pca.png';
import pca_yellow_logo from '@/images/yellowstone-pca.png';
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
            <div className={`flex items-center mb-4`}>
              <Image
                  src={pca_logo} alt={`PCA Logo`}
                  height={`75`}
                  width={`75`}
              />
              <Image
                  src={pca_yellow_logo} alt={`PCA Yellow Logo`}
                  height={`75`}
                  width={`75`}
              />
            </div>
            <h1 className={`text-6xl font-bold text-white`}>Should Frank Forelle Be Trusted?</h1>
          </div>
        </header>
        <div className={`fade-box ${isVisible ? 'fade-in' : 'fade-out'}`}>
          <div className={`max-w-2xl mx-auto p-6 lg:px-6 lg:max-w-7xl`}>
            <h2 className={`text-2xl font-bold flex items-center`}>
              <TbAlertTriangleFilled className={`text-6xl mr-2`}/>
              STAY CLEAR FROM THIS INDIVIDUAL.
            </h2>
          </div>
        </div>
        <div className={`max-w-2xl mx-auto p-6 lg:px-6 lg:max-w-7xl`}>
          <p className={`mb-4`}>Frank Forelle, based in Wyoming, has demonstrated a concerning lack of
            integrity by failing to honor a vehicle sale agreement on the reputable
            auction site, Bring a Trailer. Such behavior erodes trust within the
            enthusiast community and highlights the real risks buyers
            face when sellers act dishonorably.</p>
          <h3 className={`text-xl font-bold mb-4`}>What Happened?</h3>
          <ul className={`pl-4 mb-4`}>
            <li className={`list-disc`}>Frank Forelle agreed to sell his vehicle through Bring a Trailer, a major online
              auction site for classic
              and specialty vehicles.
            </li>
            <li className={`list-disc`}>Despite reaching a deal, he did not finalize the transaction, leaving the
              winning bidder without
              recourse
            </li>
          </ul>
          <p className={`mb-4`}>Failure to complete an agreed sale not only wastes the time and money of honest bidders
            but also damages the
            reputation of these communities as a whole.</p>
          <h3 className={`text-xl font-bold mb-4`}>Frank Forelle&#39;s Club Affiliations: Porsche Club of America (PCA),
            Yellowstone Region</h3>
          <p className={`mb-4`}>Frank Forelle is a documented member and former executive board director of the Porsche
            Club of America
            Yellowstone Region. This group publicly lists him as a board member with his contact information associated
            with official club communications</p>
          <h3 className={`text-xl font-bold mb-4`}>Why This Matters</h3>
          <ul className={`pl-4 mb-4`}>
            <li className={`list-disc`}>Joining a recognized organization like the PCA is typically seen as a sign of
              credibility within the car
              enthusiast world.
            </li>
            <li className={`list-disc`}>However, when a club member acts dishonorably in public transactions and the
              club leadership fails to
              address the behavior or even respond to good-faith concerns, the integrity of the whole organization is
              called into question.
            </li>
          </ul>
          <h3 className={`text-xl font-bold mb-4`}>Yellowstone Region Porsche Club Leadership: A Pattern of Silence</h3>
          <p className={`mb-4`}>After multiple attempts to contact the Yellowstone Region PCA regarding Frank Forelle’s
            actions, there was no
            reply or willingness to address the issue from anyone in the local leadership.
            These are the officers and key contacts who did not respond:</p>
          <div className={`max-w-full overflow-x-auto`}>
            <table className="border-collapse border border-gray-400 w-full mb-4">
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
          <p className={`mb-4 italic`}>This lack of any helpful response from the entire listed leadership demonstrates
            a
            disregard for ethical standards and transparency expected from a major club in the automotive community.</p>
          <h3 className={`text-xl font-bold mb-4`}>What Can You Do?</h3>
          <ul className={`pl-4 mb-4`}>
            <li className={`list-disc`}>Exercise extreme caution in any transactions with Frank Forelle.</li>
            <li className={`list-disc`}>Be wary of trusting the PCA Yellowstone Region leadership with conflict
              resolution
              or accountability, as they have shown zero willingness to address clear ethics violations among their own
              ranks.
            </li>
            <li className={`list-disc`}>Share this information with others in the collector and enthusiast communities
              to
              help prevent future issues.
            </li>
          </ul>
          <h3 className={`text-xl font-bold mb-4`}>Protect Yourself and Others</h3>
          <p className={`mb-4`}>If you experience or witness unethical behavior in online car auctions, make it public,
            warn your community, and demand accountability—both from individuals and the organizations they
            represent.</p>
          <p className={`italic`}>This site will be updated with any further information or developments in this
            situation.</p>
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
