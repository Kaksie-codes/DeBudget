import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = {
        firstName: "Nsikak", 
        lastName: 'Akpan', 
        email: 'nsikakakpan007@gmail.com'
    }

  return (
    <section className='home'>
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                    type="greeting"
                    title="welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext='Access and mangae your Account and transactions efficiently.'
                />     
                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                />           
            </header>
            RECENT TRANSITIONS
        </div>
        <RightSidebar 
            user={loggedIn}
            transactions={[]}
            banks={[]}
        />
    </section>
  )
}

export default Home