import React from 'react';

export default class CreateMenu extends React.Component {
    constructor(props) {
        super(props);


    }

    closeMenu = (e) => {
        this.props.changeHandler(e);
    }

    render() {
        return (
            <>
                <form method='POST' className='w-[400px] flex flex-row bg-[#181e34] rounded-md'>
                    <div className='flex flex-col p-5 '>
                        {/*TODO: max aantal woorden in de input*/}
                        <input type='text' placeholder='Titel' className='w-full h-[24px] mb-3 rounded-md text-color bg-[#4b4e69] border border-[#406380]'/>

                        <textarea placeholder='Omschrijving' className='w-full min-h-[140px] max-h-[140px] mb-3 whitespace-normal break-all rounded-md text-color bg-[#4b4e69] border border-[#406380]'/>

                        <div className='flex flex-row mb-4'>
                            <span className='text-sm text-color'>Estimation</span>
                            {/*TODO: alleen maar "valid" inputs (1m-1h-1d-1w)*/}
                            <input type='text' placeholder='1m 1h 1d 1w' className='w-[85px] ml-1 pl-0 rounded-md text-sm text-color bg-[#4b4e69] border border-[#406380]'/>
                            <span className='ml-1 text-xs leading-5 text-color'>1 dag = 8 uur, 1 week = 5 dagen </span>
                        </div>

                        <div>
                            {/*TODO: add card button veranderen van kleur als de form wel/niet valid is?*/}
                            <button className='px-2 rounded-md text-[#aaacb2;] bg-[#4b4e69] border border-[#406380]'>Toevoegen</button>
                            <button onClick={this.closeMenu} className='ml-4 px-2 rounded-md text-[#aaacb2;] bg-[#4b4e69] border border-[#406380] '>Annuleren</button>
                        </div>
                    </div>

                    <div>

                    </div>
                </form>
            </>
        )
    }
}