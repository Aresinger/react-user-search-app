import { useState, useEffect, useRef } from "react";

export default function Result({ inputSearch }) {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState('')
  const cacheRef = useRef({});
  const cleaned = inputSearch.trim().toLowerCase();


  useEffect(() => {
    setError('')
    if (cleaned === "" ) {
      setPayload(null);
      setLoading(false);

      return ;
    }


    const controller = new AbortController();
    const signal = controller.signal;
    

    if( cacheRef.current[cleaned] ){
     
     return setPayload(cacheRef.current[cleaned])
    }
    async function Search(cleaned) {
      try {
        setLoading(true);
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users?username_like=${cleaned}`,
          { signal },
        );

        if (!res.ok) {
          setError("errore nella fetch")
            setPayload(null)
            return
            
        };

        const json = await res.json();

        cacheRef.current[cleaned] = json;
        setPayload(json);
      } catch (err) {
        if (err.name === "AbortError") return;
       setError(err.name);
       setPayload(null)
      } finally {
        setLoading(false);
        
      }
    }

    const timeOutId = setTimeout(() => {
      Search(cleaned);
    }, 300);

    return () => {
      controller.abort();
      clearTimeout(timeOutId);
    };
  }, [cleaned]);

if(cleaned === ''){
  return null
}
if(loading) {
  return <div className="text-center mt-24">Caricamento..</div> 
}
if(error !== ''){
  return <div className="text-center mt-24">{error}</div> 
}
if(payload?.length === 0){
  return <div className="text-center mt-24">Nessun risultato</div> 
}
  return <div className="m-2 shadow-lg rounded-4xl">
     <h2 className="mb-2 text-2xl ">Risultati: </h2>
    <ul className=" list-disc p-8 ">
     
      {payload?.map((el) => (<li key={el.id}>{el.name}</li>))}</ul>

  </div> 

}
