import ReactToPrint from 'react-to-print';

function App() {


  return (
    <>
    <div className="print">
    <div className="Text">
    <div className="information">

    </div>

</div>
<ReactToPrint trigger={()=> <button className='btn'>print</button>}/>
    </div>
    </>
  )
}

export default App
