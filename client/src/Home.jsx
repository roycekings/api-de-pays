import React, { useEffect, useId, useState } from "react";
import Cards from "./cards";
import axios from "axios";
import CardDetail from "./CardDetail";

const Home = () => {
  const id = useId();
  const [lPays, setLpays] = useState([]);
  const [lsPays, setlspays] = useState([]);

  const [africa, setAfrica] = useState(false);
  const [europe, setEurope] = useState(false);
  const [ameriquesud, setAmeriqueSud] = useState(false);
  const [antartique, setAntartique] = useState(false);
  const [ameriquenord, setAmeriqueNord] = useState(false);
  const [asie, setAsie] = useState(false);
  const [oceani, setOceani] = useState(false);

  const [showDetail, setShowDetail] = useState(null);

  useEffect(() => {
    const getPays = async () => {
      try {
        const listepays = await axios.get("https://restcountries.com/v3.1/all");
        setLpays(listepays.data);
      } catch (err) {
        console.error(err);
      }
    };
    getPays();
  }, [lPays.length]);

  
   useEffect(() => {
    
  //   setlspays([...lPays]);
     if (
       !antartique &&
      !ameriquenord &&
       !ameriquesud &&
       !oceani &&
       !europe &&
       !africa &&
       !asie
     ) {
       setlspays([...lPays]);
     } 
   }, [africa, europe, asie, antartique, oceani, ameriquenord, ameriquesud]);

  // test de fonctionnement
  const handleAfrique = (e) => {
    setAfrica(e.target.checked);
    const paysCorrespondant = lPays.filter(
      (pays) => pays.continents[0] === "Africa"
    );

    setlspays([...paysCorrespondant]);
    setAntartique(false);
    setAmeriqueNord(false);
    setAmeriqueSud(false);
    setAsie(false);
    setEurope(false);
    setOceani(false);
  };

  const handleEurope = (e) => {
    setEurope(e.target.checked);
    const paysCorrespondant = lPays.filter(
      (pays) => pays.continents[0] === "Europe"
    );

    setlspays([...paysCorrespondant]);
    setAfrica(false);
    setAmeriqueNord(false);
    setAmeriqueSud(false);
    setAsie(false);
    setAntartique(false);
    setOceani(false);
  };

  const handleAsie = (e) => {
    setAsie(e.target.checked);
    const paysCorrespondant = lPays.filter(
      (pays) => pays.continents[0] === "Asia"
    );

    setlspays([...paysCorrespondant]);
    setAfrica(false);
    setAmeriqueNord(false);
    setAmeriqueSud(false);
    setAntartique(false);
    setEurope(false);
    setOceani(false);
  };
  const handleAmeriquenord = (e) => {
    setAmeriqueNord(e.target.checked);
    const paysCorrespondant = lPays.filter(
      (pays) => pays.continents[0] === "North America"
    );

    setlspays([...paysCorrespondant]);
    setAfrica(false);
    setAntartique(false);
    setAmeriqueSud(false);
    setAsie(false);
    setEurope(false);
    setOceani(false);
  };

  const handleAmeriqueSud = (e) => {
    setAmeriqueSud(e.target.checked);
    const paysCorrespondant = lPays.filter(
      (pays) => pays.continents[0] === "South America"
    );

    setlspays([...paysCorrespondant]);
    setAfrica(false);
    setAmeriqueNord(false);
    setAntartique(false);
    setAsie(false);
    setEurope(false);
    setOceani(false);
    
  };

  const handleOceani = (e) => {
    setOceani(e.target.checked);

    const paysCorrespondant = lPays.filter(
      (pays) => pays.continents[0] === "Oceania"
    );

    setlspays([...paysCorrespondant]);
    setAfrica(false);
    setAmeriqueNord(false);
    setAmeriqueSud(false);
    setAsie(false);
    setEurope(false);
    setAntartique(false);
  };

  const handleAntartique = (e) => {
    setAntartique(e.target.checked);
    const paysCorrespondant = lPays.filter(
      (pays) => pays.continents[0] === "Antarctica"
    );

    setlspays([...paysCorrespondant]);
    setAfrica(false);
    setAmeriqueNord(false);
    setAmeriqueSud(false);
    setAsie(false);
    setEurope(false);
    setOceani(false);
  };

  // const [currentPage,setCurrentPage] = useState(1)

  // const recordsPerPage = 30;
  // const lastIndex= currentPage * recordsPerPage;
  // const firstIndex = lastIndex - recordsPerPage
  
  // const Data = lsPays.splice(firstIndex,lastIndex)
  
  // const nbPage = Math.ceil()



  // test de fonctionnement

  return (
    <>
      <div className="bg-slate-200">
        <h2 className=" text-sky-800 font-bold text-center text-5xl p-7">
          Liste des pays de la planete
        </h2>
        <div className=" flex gap-3 py-4 px-4 rounded-xl bg-slate-200 shadow-md items-center justify-center ">
          <CheckCon
            name="Afrique"
            id={1}
            check={africa}
            onCheck={handleAfrique}
          />
          <CheckCon
            name="Europe"
            id={2}
            check={europe}
            onCheck={handleEurope}
          />
          <CheckCon name="Asie" id={3} check={asie} onCheck={handleAsie} />
          <CheckCon
            name="Amerique du nord"
            id={4}
            check={ameriquenord}
            onCheck={handleAmeriquenord}
          />
          <CheckCon
            name="Amerique du sud"
            id={5}
            check={ameriquesud}
            onCheck={handleAmeriqueSud}
          />
          <CheckCon
            name="Antartique"
            id={6}
            check={antartique}
            onCheck={handleAntartique}
          />
          <CheckCon
            name="Oceani"
            id={7}
            check={oceani}
            onCheck={handleOceani}
          />
        </div>
        <div className="  px-4 grid grid-cols-6 gap-2">
          {lsPays.map((pays, id) => (
            <div key={id}>
              <Cards
                idc={id}
                OnMouseEnter={() => setShowDetail(id)}
                onMouseLeave={() => setShowDetail(null)}
                flags={pays.flags.png}
              />{" "}
              {showDetail === id && (
                <CardDetail
                  idd={id}
                  nomP={pays.name.common}
                  capital={pays.capital}
                  habitant={pays.population}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

function CheckCon({ id, check, onCheck, name }) {
  return (
    <div>
      <div className=" flex justify-center items-center text-md gap-2 font-medium">
        <input type="checkbox" id={id} checked={check} onChange={onCheck} />
        <label htmlFor={id}>{name}</label>
      </div>
    </div>
  );
}

export default Home;
