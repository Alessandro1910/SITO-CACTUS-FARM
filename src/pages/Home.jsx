const Home = () => {

  return (
    <>
      <div className='container mx-auto px-4 mt-40' id="slider-container">
        <h3 className='digu'>Digital Menù</h3>
        <h2 className='Digu mt-15 font-bold'>Scopri nuovi ristoranti <br />
          e nuovi piatti nella tua città </h2>
        <p className='digu mt-10'>Cosa vorresti assaggiare oggi ?</p>
        <label htmlFor="Inserire"></label>
        <input className="digu mt-10 cursor-pointer bg-transparent p-2 w-2/6 border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 focus:border-gray peer" placeholder='Inserisci le parole chiave' />
        <button className="bg-yellow-400 font-bold text-white py-4 px-8 rounded-full margin cursor-pointer"><img src="src/Livello_1.png" alt="img" /></button>
      </div>
    </>
  )
}

export default Home