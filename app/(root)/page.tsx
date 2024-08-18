import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'George', lastName: 'Gragas', email: 'gqS9z@example.com'}

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting" 
            title="Hello" 
            user={loggedIn?.firstName || 'guest'} 
            subtext="Access and manage your accounts and transactions effieciently"
          />  

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.90}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 145.23}, {currentBalance: 908.76}]}
      />
    </section>
  )
}

export default Home