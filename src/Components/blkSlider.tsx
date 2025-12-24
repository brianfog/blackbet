import '../CSS/blkslide.css'

export default function BSlider(){

    return (
        <div className='Wholesilde'>
            <div className="slide">
                {Array.from({length : 3},(_, i) => (<div className="sitem">
                    <div className='itemimage'>
                        <img src="" alt="" />
                    </div>
                    <div className='Details'>
                         <h1>
                            Header
                         </h1>
                         <div className='detail-par'>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora hic eum quo, alias earum animi consequuntur error distinctio placeat rerum voluptate sint esse saepe qui cumque obcaecati dolore facere expedita!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quaerat non tenetur neque ipsam asperiores vitae dignissimos. Sed adipisci autem, ad dolore neque ut necessitatibus quia repellat soluta officiis cumque.
                            </p>
                         </div>
                         <p className='Author'>
                            Author: Will Smith
                         </p>
                    </div>
                </div>))}
                
            </div>
        </div>
    )

}