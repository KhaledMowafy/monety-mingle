type Iprops ={
  amount:number,
  handleConvert: (params: number) => void
}

function Convert({amount, handleConvert}: Iprops) {

  const eventClick: React.MouseEventHandler<HTMLButtonElement> = () => {
   handleConvert(amount)
  };

  console.log(amount)

  return (
    <>
         <div className="currency-exchanger__convert">
            <button className="currency-exchanger__convert--item" disabled={amount>0?false:true} onClick={eventClick}>
              <span>
                Convert
                </span>
            </button>
          </div>
    </>
  )
}

export default Convert
